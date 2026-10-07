# AZ-104 Study

Aplicativo de estudo em português, criado a partir de uma metodologia de questões e de um simulado AZ-104 fornecidos pelo usuário.

Versão online: [AZ-104 Study Lab](https://az104-study-lab.mmsystem7.chatgpt.site/) (acesso privado).

## Abrir

Abra **Abrir AZ104.html** com um duplo clique. Ele abre o aplicativo no navegador, sem instalar nada. Também é possível abrir diretamente `dist/index.html`.

O treino e o simulado funcionam sem internet. Os links do Microsoft Learn exigem conexão. Os materiais originais estão na seção **Materiais de estudo**.

## Como estudar

- **Treino:** selecione uma resposta e clique em **Conferir resposta** para ver a explicação.
- **Áreas:** escolha um dos cinco temas para praticar suas 10 questões.
- **Revisão:** marque questões ou use **Revisar erros**. **Tentar novamente** inicia uma nova tentativa da questão.
- **Simulado:** responda às 50 questões e finalize para receber a correção. As respostas em branco contam como não acertadas.
- **Meu desempenho:** acompanha a última resposta conferida de cada questão do treino nesta sessão. O resultado do simulado é separado.

O rascunho de respostas e as marcações ficam **somente nesta aba**, usando armazenamento de sessão do navegador. Recarregar a página mantém o rascunho quando o navegador permitir. Fechar a aba encerra a sessão; não há conta, sincronização nem histórico permanente. Cada navegador e endereço possui seu próprio rascunho. Alguns navegadores podem restringir o armazenamento ao abrir arquivos locais; o aplicativo continua funcionando na aba aberta e exibe um aviso.

## Conteúdo

São 50 questões, com 10 por área: identidades e governança, armazenamento, computação, redes e monitoramento/backup/recuperação. Esta divisão segue a metodologia fornecida, não os pesos oficiais do exame. O banco cobre os temas presentes nos arquivos, sem pretender cobrir todo o programa AZ-104.

As alternativas são embaralhadas, mantendo a associação entre o texto correto e o gabarito. O simulado embaralha também a ordem das questões. A pontuação é o percentual simples de acertos, sem equivalência com a escala oficial da certificação.

Cada questão tem explicação e referência da Microsoft consultada em **07/10/2026**. Alguns enunciados foram ajustados: funções internas e escopos no vínculo de DNS privado; nome da função Resource Policy Contributor; necessidade de bloquear o acesso público além do Private Endpoint; DNS fornecido pelo Azure; direção do tráfego encaminhado; uso de IP flow verify e transformação padrão de ingestão em KQL.

As questões 21 e 22 mantêm o tema ADE para ambientes existentes e explicam suas restrições. A documentação atual anuncia retirada em 15/09/2028 e orienta encryption at host para novas VMs. Referência: https://learn.microsoft.com/en-us/azure/virtual-machines/windows/disk-encryption-windows

Os arquivos originais não foram alterados. As cópias em `dist/materiais` são idênticas aos originais.

## Manutenção

O aplicativo usa HTML, CSS e JavaScript, sem dependências externas no navegador. Depois de baixar ou clonar este repositório, basta abrir `Abrir AZ104.html`. Os arquivos finais ficam em `dist`.

Para verificar integridade do banco, pontuação, embaralhamento, recuperação do rascunho e hashes dos materiais originais, execute `node tools/check-app.cjs`.

Para regenerar as questões, instale a dependência com `python -m pip install -r requirements.txt` e execute `python tools/prepare_questions.py`. A ferramenta usa os originais no diretório pai, quando disponíveis, ou o PDF incluído em `dist/materiais`. Não é necessário regenerar as questões para usar o aplicativo.

## Privacidade

Não há coleta de telemetria, anúncios ou envio de respostas a um servidor. A versão hospedada é privada. Os links externos abrem apenas quando selecionados. A interface também disponibiliza ferramentas WebMCP quando o navegador suporta o recurso, respeitando as mesmas ações e limites da interface.
