(function (scope) {
  'use strict';
  const shuffle = (values, random = Math.random) => {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  const newAnswer = () => ({ selected: null, checked: false, order: shuffle([0, 1, 2, 3]) });
  const summarize = (questions, answers, submitted = false) => {
    const answered = questions.filter(q => Number.isInteger(answers[q.id]?.selected)).length;
    const evaluated = questions.filter(q => submitted || answers[q.id]?.checked);
    const correct = evaluated.filter(q => answers[q.id]?.selected === q.answer).length;
    return {total: questions.length, answered, evaluated: evaluated.length, correct,
      wrong: evaluated.filter(q => Number.isInteger(answers[q.id]?.selected) && answers[q.id].selected !== q.answer).length,
      unanswered: questions.length - answered,
      accuracy: evaluated.length ? Math.round(correct * 100 / evaluated.length) : null};
  };
  const createDraft = questions => ({version:2,view:'practice',marked:[],practice:{domain:-1,filter:'all',ids:questions.map(q=>q.id),index:0,answers:{}},exam:null});
  const sanitize = (raw, questions) => {
    const initial = createDraft(questions);
    if (!raw || raw.version !== 2) return initial;
    const known = new Set(questions.map(q => q.id));
    const cleanAnswers = source => {
      const result = {};
      for (const q of questions) {
        const value = source?.[q.id];
        if (!value || typeof value !== 'object') continue;
        const selected = Number.isInteger(value.selected) && value.selected >= 0 && value.selected < 4 ? value.selected : null;
        const order = Array.isArray(value.order) && value.order.length === 4 && value.order.every(Number.isInteger) && [...value.order].sort().join('') === '0123' ? value.order : shuffle([0, 1, 2, 3]);
        result[q.id] = { selected, checked: selected !== null && value.checked === true, order };
      }
      return result;
    };
    const domain = Number.isInteger(raw.practice?.domain) && raw.practice.domain >= -1 && raw.practice.domain < 5 ? raw.practice.domain : -1;
    const domainIds = questions.filter(q => domain < 0 || q.domain === domain).map(q => q.id);
    const filter = ['all','wrong','marked'].includes(raw.practice?.filter) ? raw.practice.filter : 'all';
    let ids = Array.isArray(raw.practice?.ids) ? [...new Set(raw.practice.ids)].filter(id => domainIds.includes(id)) : domainIds;
    if (!ids.length && filter === 'all') ids = domainIds;
    const index = Number.isInteger(raw.practice?.index) ? Math.max(0, Math.min(raw.practice.index, Math.max(0,ids.length-1))) : 0;
    const result = {...initial,marked:Array.isArray(raw.marked)?[...new Set(raw.marked)].filter(id=>known.has(id)):[],practice:{domain,filter,ids,index,answers:cleanAnswers(raw.practice?.answers)}};
    const examIds=raw.exam?.ids;
    if(Array.isArray(examIds)&&examIds.length===questions.length&&new Set(examIds).size===questions.length&&examIds.every(id=>known.has(id))) {
      result.exam={ids:examIds,index:Number.isInteger(raw.exam.index)?Math.max(0,Math.min(raw.exam.index,examIds.length-1)):0,answers:cleanAnswers(raw.exam.answers),submitted:raw.exam.submitted===true};
    }
    const allowed=['practice','progress','materials','exam-intro','exam','exam-result','exam-review'];
    result.view=allowed.includes(raw.view)?raw.view:'practice';
    if(result.view.startsWith('exam')&&result.view!=='exam-intro'&&!result.exam)result.view='exam-intro';
    if(result.exam&&!result.exam.submitted&&['exam-result','exam-review'].includes(result.view))result.view='exam';
    if(result.exam?.submitted&&result.view==='exam')result.view='exam-result';
    return result;
  };
  const api={shuffle,newAnswer,summarize,createDraft,sanitize};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else scope.AZ104_CORE=api;
})(typeof window!=='undefined'?window:globalThis);
