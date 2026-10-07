# Metodologia para criação do simulado AZ-104 com 50 questões reformuladas

## Objetivo

Criar um simulado de estudo para a certificação **Microsoft Azure
Administrator (AZ-104)** a partir dos assuntos presentes no arquivo
**AZ-104 material de referência**, sem reproduzir literalmente as
perguntas do material-base.

O simulado resultante deve:

-   conter **50 questões**;
-   distribuir as questões entre diferentes domínios técnicos;
-   preservar os **conceitos técnicos** usados como base de estudo;
-   alterar enunciados, contexto, nomes de recursos e/ou forma de
    perguntar;
-   utilizar alternativas plausíveis;
-   manter apenas uma resposta pretendida em cada questão;
-   incluir um gabarito separado ao final.

> Este documento descreve a metodologia e os critérios usados para
> produzir as questões. Ele não contém raciocínio interno privado,
> cadeia de pensamento ou processos ocultos do modelo.

------------------------------------------------------------------------

## 1. Fonte utilizada

A base temática consiste em conteúdos e tópicos de estudo relacionados
aos conhecimentos avaliados na certificação **AZ-104**.

Os tópicos observados no material foram usados como ponto de partida
para identificar conceitos que poderiam ser transformados em novas
perguntas, por exemplo:

-   Microsoft Entra ID;
-   Azure RBAC;
-   Azure Policy;
-   Resource Locks;
-   Storage Accounts;
-   Azure Blob Storage;
-   Azure Files;
-   Shared Access Signature (SAS);
-   Hierarchical Namespace (HNS);
-   Encryption Scope;
-   Azure Virtual Machines;
-   Azure Disk Encryption;
-   App Service;
-   Azure Container Instances;
-   Azure Container Apps;
-   Azure Container Registry;
-   Virtual Networks;
-   NSG;
-   VNet Peering;
-   Private Endpoint;
-   Private DNS;
-   Azure Load Balancer;
-   Network Watcher;
-   Azure Monitor;
-   Log Analytics;
-   Data Collection Rules;
-   Azure Backup;
-   Recovery Services Vault;
-   Azure Site Recovery.

O objetivo não foi copiar as perguntas, mas reutilizar os **conceitos
avaliados**.

------------------------------------------------------------------------

## 2. Distribuição das 50 questões

Para evitar que o simulado ficasse concentrado em apenas um assunto, as
50 questões foram distribuídas em cinco blocos:

  Bloco                                   Quantidade
  ------------------------------------- ------------
  Identidades e Governança                        10
  Armazenamento                                   10
  Computação                                      10
  Redes                                           10
  Monitoramento, Backup e Recuperação             10
  **Total**                                   **50**

Essa distribuição foi usada como mecanismo de variedade. Ela não
pretende reproduzir exatamente o peso oficial de cada domínio no exame.

------------------------------------------------------------------------

## 3. Processo de transformação das questões

Para cada questão, o processo de criação seguiu quatro etapas.

### Etapa 1 --- Identificar o conceito

Primeiro foi isolado o conceito técnico que a pergunta deveria testar.

Exemplo de conceito:

> Uma Private DNS Zone precisa ser vinculada a uma Virtual Network e as
> permissões devem seguir o princípio do menor privilégio.

Nesse estágio, o foco é o conhecimento necessário para resolver a
questão, e não a redação original.

### Etapa 2 --- Criar um novo cenário

O conceito é colocado em um cenário diferente.

Podem ser alterados:

-   nomes de usuários;
-   nomes de VNets;
-   nomes de Resource Groups;
-   nomes de Storage Accounts;
-   quantidade de recursos;
-   finalidade empresarial;
-   ordem das informações;
-   maneira como o requisito é apresentado.

Exemplo:

**Conceito-base:** permissões para vincular Private DNS Zone e VNet.

**Novo cenário:** uma empresa possui `VNet-App` e `corp.internal` em
grupos de recursos distintos e quer delegar somente as permissões
necessárias para criar o vínculo.

### Etapa 3 --- Reformular a pergunta

A nova questão deve testar o mesmo conceito sem repetir o texto do
material.

Exemplo:

> Qual combinação de funções segue melhor o princípio do menor
> privilégio?

Isso força o candidato a aplicar RBAC e escopo, em vez de simplesmente
reconhecer uma frase memorizada.

### Etapa 4 --- Criar distratores

As alternativas incorretas devem ser tecnicamente plausíveis.

Exemplo:

-   Contributor nos Resource Groups;
-   Owner na Private DNS Zone;
-   Reader na VNet;
-   Network Contributor + Private DNS Zone Contributor.

A alternativa correta deve exigir que o candidato compreenda o conceito.

------------------------------------------------------------------------

## 4. Tipos de transformação utilizados

### 4.1 Alteração de nomes

Exemplo:

-   `VNet1` → `VNet-App`
-   `zone1.com` → `corp.internal`
-   `User1` → administrador/equipe

Isso reduz a dependência de memorização visual.

### 4.2 Alteração dos valores

Quando o conceito permite, valores e quantidades podem ser alterados.

Exemplo de Stored Access Policy:

Em vez de perguntar quantas políticas adicionais podem ser criadas
quando existem duas, a questão pode informar que já existem quatro.

O candidato precisa conhecer o limite e calcular o restante.

### 4.3 Alteração da perspectiva

Uma questão originalmente formulada como:

> Qual recurso pode ser usado?

pode ser transformada em:

> Qual recurso atende ao requisito com menor privilégio?

ou:

> Qual configuração deve ser aplicada?

### 4.4 Transformação de cenário em conceito

Informações específicas de um case study podem ser transformadas em uma
pergunta conceitual independente.

Exemplo:

-   cenário com Blob Storage e HNS;
-   nova questão pergunta qual recurso permite diretórios reais e
    operações de namespace.

Resposta esperada:

**Hierarchical Namespace (HNS).**

### 4.5 Comparação entre tecnologias

Algumas perguntas foram construídas colocando serviços Azure semelhantes
como alternativas.

Exemplo:

> Uma VM não possui IP público, mas precisa ser acessada
> administrativamente via portal.

Alternativas podem incluir:

-   Azure Bastion;
-   Load Balancer;
-   Private DNS;
-   Azure Backup.

Isso avalia a capacidade de selecionar o serviço adequado.

------------------------------------------------------------------------

## 5. Critério para os distratores

Uma alternativa incorreta não deve ser obviamente absurda.

Foram preferidos distratores pertencentes ao mesmo ecossistema Azure ou
próximos ao problema apresentado.

### Exemplo

Pergunta sobre filtragem de tráfego:

**Correta:** Network Security Group.

Distratores possíveis:

-   Route Table;
-   Azure Policy;
-   Private DNS.

O candidato precisa distinguir:

-   controle de tráfego;
-   roteamento;
-   governança;
-   resolução de nomes.

------------------------------------------------------------------------

## 6. Questões de Identidades e Governança

Os principais conceitos usados foram:

-   Azure RBAC;
-   menor privilégio;
-   escopo de atribuição;
-   Azure Policy;
-   Policy Initiative;
-   Resource Locks;
-   domínio personalizado do Microsoft Entra ID;
-   User Access Administrator;
-   compliance.

### Padrão de criação

As perguntas desse domínio procuram apresentar uma necessidade
administrativa e pedir:

-   a role apropriada;
-   o menor escopo possível;
-   o efeito de Azure Policy;
-   o mecanismo de proteção;
-   o recurso de governança correto.

------------------------------------------------------------------------

## 7. Questões de Armazenamento

Conceitos utilizados:

-   Stored Access Policies;
-   SAS;
-   Hierarchical Namespace;
-   Azure Files;
-   AzCopy;
-   Encryption Scope;
-   Immutable Blob Storage;
-   Storage tiers;
-   redundância;
-   acesso temporário.

### Exemplo de transformação

Conceito:

> Um container suporta um número limitado de Stored Access Policies.

Nova questão:

> Um container já possui quatro políticas. Quantas adicionais podem ser
> criadas?

Isso mantém o conceito, mas altera o problema apresentado.

------------------------------------------------------------------------

## 8. Questões de Computação

Conceitos utilizados:

-   Azure Virtual Machines;
-   Azure Disk Encryption;
-   Ephemeral OS Disk;
-   Dynamic Volumes;
-   Availability Zones;
-   App Service;
-   VM Scale Sets;
-   Azure Container Instances;
-   Azure Container Apps;
-   Azure Container Registry;
-   VM Extensions.

As questões foram formuladas para avaliar principalmente
**compatibilidade, escolha do serviço e finalidade do recurso**.

------------------------------------------------------------------------

## 9. Questões de Redes

Conceitos utilizados:

-   VNet Peering;
-   NSG;
-   Azure Bastion;
-   Private Endpoint;
-   Route Tables;
-   User Defined Routes;
-   Private DNS;
-   Load Balancer;
-   Network Watcher;
-   forwarded traffic.

### Estratégia

As questões de rede procuram diferenciar funções que frequentemente são
confundidas:

  Necessidade                            Tecnologia
  -------------------------------------- ---------------------
  Filtrar tráfego                        NSG
  Alterar caminho do tráfego             Route Table / UDR
  Conectar VNets                         VNet Peering
  Acesso administrativo sem IP público   Azure Bastion
  Endpoint privado para PaaS             Private Endpoint
  Resolução privada de nomes             Private DNS
  Distribuição L4                        Azure Load Balancer

------------------------------------------------------------------------

## 10. Monitoramento, Backup e Recuperação

Conceitos utilizados:

-   Azure Monitor;
-   Log Analytics;
-   KQL;
-   Data Collection Rules;
-   Action Groups;
-   Recovery Services Vault;
-   Azure Backup;
-   Azure Site Recovery;
-   Recovery Plans;
-   métricas.

O objetivo foi diferenciar:

-   coleta;
-   consulta;
-   alerta;
-   ação;
-   backup;
-   disaster recovery.

------------------------------------------------------------------------

## 11. Nível de dificuldade

O simulado foi construído predominantemente em nível **intermediário**.

As questões procuram avaliar três tipos de conhecimento:

1.  **Reconhecimento de serviço**\
    Ex.: identificar Azure Bastion.

2.  **Aplicação de conceito**\
    Ex.: escolher RBAC com menor privilégio.

3.  **Conhecimento de restrições ou limites**\
    Ex.: Stored Access Policies ou compatibilidade com Azure Disk
    Encryption.

------------------------------------------------------------------------

## 12. Regra para evitar cópia literal

Ao criar uma nova questão baseada no material, deve-se alterar pelo
menos alguns dos seguintes elementos:

-   cenário;
-   nomes;
-   números;
-   recurso principal;
-   ordem das informações;
-   formulação da pergunta;
-   alternativas;
-   perspectiva da decisão.

Não basta substituir apenas o nome de `VM1` por `VM10`.

A nova pergunta deve exigir novamente o entendimento do conceito.

------------------------------------------------------------------------

## 13. Exemplo completo

### Conceito identificado

Azure Private DNS + RBAC + menor privilégio.

### Conhecimento necessário

Para administrar o lado de rede:

**Network Contributor**

Para administrar a Private DNS Zone:

**Private DNS Zone Contributor**

### Nova situação

Uma empresa possui:

-   `VNet-App`;
-   `corp.internal`;
-   recursos em grupos diferentes.

Um administrador deve criar somente o vínculo entre eles.

### Pergunta criada

> Qual combinação segue melhor o princípio do menor privilégio?

### Resultado

A alternativa correta combina as permissões específicas, evitando
`Owner` ou `Contributor` em escopos maiores.

------------------------------------------------------------------------

## 14. Estrutura recomendada para futuras questões

Use o seguinte modelo:

``` text
DOMÍNIO:
[Tema AZ-104]

CONCEITO:
[Conhecimento que será avaliado]

CENÁRIO:
[Novo cenário, diferente do material original]

REQUISITO:
[O que precisa ser alcançado]

PERGUNTA:
[Decisão que o candidato precisa tomar]

A.
[DISTRATOR]

B.
[DISTRATOR]

C.
[CORRETA]

D.
[DISTRATOR]

RESPOSTA:
[C]

JUSTIFICATIVA:
[Explicação objetiva baseada no conceito]
```

------------------------------------------------------------------------

## 15. Critérios de qualidade

Antes de incluir uma questão no simulado, verificar:

-   [ ] Está relacionada a um tópico da AZ-104?
-   [ ] O conceito é suportado pelo material-base ou foi claramente
    identificado como conhecimento adicional?
-   [ ] O enunciado foi realmente reformulado?
-   [ ] Existe uma resposta pretendida claramente melhor?
-   [ ] Os distratores são plausíveis?
-   [ ] A questão não depende de informação ausente?
-   [ ] O nível é adequado para AZ-104?
-   [ ] Não existe contradição entre gabarito e explicação?
-   [ ] A terminologia Azure está consistente?
-   [ ] A questão ajuda a compreender o conceito, em vez de apenas
    memorizar uma frase?

------------------------------------------------------------------------

## 16. Observação sobre validação

Durante a análise do material de referência foram encontrados exemplos
em que o campo **Answer** e a própria explicação do material não eram
consistentes.

Por isso, em uma versão futura mais rigorosa do simulado, é recomendável
usar um processo adicional:

1.  localizar o conceito no material de referência;
2.  identificar a resposta indicada;
3.  verificar se a explicação concorda com o gabarito;
4.  quando solicitado, validar o comportamento atual na documentação
    oficial Microsoft Learn;
5.  somente então gerar a questão reformulada.

Isso reduz o risco de transformar um erro do banco original em uma nova
questão.

------------------------------------------------------------------------

## 17. Resultado esperado

Seguindo essa metodologia, o novo banco deixa de funcionar como simples
exercício de memorização e passa a avaliar se o candidato consegue
reconhecer e aplicar conceitos como:

-   menor privilégio;
-   escopo;
-   governança;
-   armazenamento;
-   criptografia;
-   conectividade;
-   roteamento;
-   resolução DNS;
-   observabilidade;
-   backup;
-   recuperação de desastre.

Esse é o princípio usado para produzir o **Simulado AZ-104 com 50
questões reformuladas**.
