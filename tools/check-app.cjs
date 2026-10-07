'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const scope={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'dist/questions.js'),'utf8'),scope);
const questions=JSON.parse(JSON.stringify(scope.window.AZ104_QUESTIONS));
const core=require('../dist/quiz-core.js');
assert.equal(questions.length,50);
assert.deepEqual(questions.map(q=>q.id),Array.from({length:50},(_,i)=>i+1));
for(let domain=0;domain<5;domain++)assert.equal(questions.filter(q=>q.domain===domain).length,10);
for(const q of questions){
  assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);
  assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
  assert(q.prompt&&q.concept&&q.explanation);
  assert.equal(new URL(q.reference).hostname,'learn.microsoft.com');
  assert(!JSON.stringify(q).includes('\ufffd'));
  for(let i=0;i<24;i++){
    const order=core.shuffle([0,1,2,3]);
    assert.deepEqual([...order].sort(),[0,1,2,3]);
    assert.equal(q.options[order[order.indexOf(q.answer)]],q.options[q.answer]);
  }
}
const allCorrect=Object.fromEntries(questions.map(q=>[q.id,{selected:q.answer,checked:true}]));
assert.equal(core.summarize(questions,allCorrect).accuracy,100);
const selectedOnly=Object.fromEntries(questions.map(q=>[q.id,{selected:q.answer,checked:false}]));
assert.equal(core.summarize(questions,selectedOnly).accuracy,null);
assert.equal(core.summarize(questions,selectedOnly,true).accuracy,100);
const oneCorrect={[questions[0].id]:{selected:questions[0].answer,checked:false}};
const partial=core.summarize(questions,oneCorrect,true);
assert.equal(partial.accuracy,2);assert.equal(partial.unanswered,49);assert.equal(partial.wrong,0);
const allWrong=Object.fromEntries(questions.map(q=>[q.id,{selected:(q.answer+1)%4,checked:true}]));
assert.equal(core.summarize(questions,allWrong).accuracy,0);
assert.equal(core.summarize(questions,{}).accuracy,null);
assert.equal(core.summarize(questions,{},true).accuracy,0);
const draft=core.createDraft(questions);
draft.practice.answers[1]={selected:1,checked:true,order:[3,2,1,0]};draft.marked=[1,50];
draft.exam={ids:core.shuffle(questions.map(q=>q.id)),index:49,answers:allCorrect,submitted:true};draft.view='exam-result';
const restored=core.sanitize(JSON.parse(JSON.stringify(draft)),questions);
assert.equal(restored.exam.index,49);assert.equal(restored.exam.submitted,true);
assert.deepEqual(restored.practice.answers[1].order,[3,2,1,0]);assert.deepEqual(restored.marked,[1,50]);
const corrupted={version:2,view:'exam-review',marked:[1,1,999],practice:{domain:99,index:-20,filter:'bad',ids:[999],answers:{1:{selected:99,checked:true,order:[0,1,2,'3']}}},exam:{ids:[1,1],submitted:true}};
const clean=core.sanitize(corrupted,questions);
assert.equal(clean.practice.domain,-1);assert.equal(clean.practice.index,0);assert.equal(clean.practice.ids.length,50);
assert.equal(clean.practice.answers[1].selected,null);assert.equal(clean.practice.answers[1].checked,false);
assert(clean.practice.answers[1].order.every(Number.isInteger));assert.equal(clean.view,'exam-intro');
assert.deepEqual(clean.marked,[1]);
assert.deepEqual(core.sanitize(null,questions),core.createDraft(questions));
const empty=core.createDraft(questions);empty.practice.ids=[];empty.practice.filter='wrong';
assert.equal(core.sanitize(empty,questions).practice.ids.length,0);
const html=fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
for(const reference of [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m=>m[1])){
  if(reference.startsWith('data:')||reference.startsWith('http'))continue;
  assert(fs.existsSync(path.join(root,'dist',reference.split('?')[0])),`Asset missing: ${reference}`);
}
const originalHashes={
  'simulado-original.pdf':'c5d19779f05ef79c983f97f38c6bcb1196486befcd926f0b8db1cd32d8b32b42',
  'metodologia.md':'d11c8ee391520f6b98975b540d921c5960af43f3f43d4b789a1b841f5c8cf2a9'
};
for(const [name,expected] of Object.entries(originalHashes)){
  const content=fs.readFileSync(path.join(root,'dist/materiais',name));
  assert.equal(crypto.createHash('sha256').update(content).digest('hex'),expected,`Original changed: ${name}`);
}
console.log('OK: 50 questions; scoring; shuffling; draft recovery; assets; unchanged originals.');
