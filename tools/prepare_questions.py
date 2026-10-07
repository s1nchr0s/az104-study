"""Extract the supplied PDF, preserve its question IDs, and add reviewed teaching notes."""
from pathlib import Path
import re
import json
import shutil
from pypdf import PdfReader

root = Path(__file__).resolve().parents[1]
source = root.parent / 'Simulado_AZ104_50_Questoes_e_Gabarito.pdf'
if not source.exists():
    source = root / 'dist' / 'materiais' / 'simulado-original.pdf'
reader = PdfReader(source)
text = '\n'.join(page.extract_text() for page in reader.pages[:-1])
text = re.sub(r'Página\s+\d+', '', text)
text = text.replace('Simulado AZ-104 - 50 Questões', '')
blocks = re.findall(r'(?ms)^\s*(\d+)\.\s+(.*?)(?=^\s*\d+\.\s+|\Z)', text)
answers = {1:1,2:2,3:1,6:1,7:1,9:2,11:1,12:1,19:2}
concepts = [
 'RBAC e menor privilégio','Efeito Deny do Azure Policy','Bloqueio de exclusão','Função Reader','Iniciativas de políticas',
 'Resource Policy Contributor','Escopo de uma política','Verificação de domínio','Delegação de acesso RBAC','Conformidade de políticas',
 'Limite de stored access policies','Hierarchical Namespace','Transferências com AzCopy','Acesso temporário com SAS','Encryption scopes',
 'Compartilhamentos SMB','Camadas de acesso','Retenção imutável','Redundância geográfica','SAS com leitura e expiração',
 'Discos efêmeros e ADE','Volumes dinâmicos e ADE','Availability Zones','Plataforma de aplicações web','Certificado TLS com chave privada',
 'Escalabilidade de VMs','Execução de containers','Escalabilidade de aplicações em containers','Registro de imagens','Extensões de VM',
 'Conectividade entre VNets','Filtragem por NSG','Acesso com Azure Bastion','Private Endpoint e acesso público','Roteamento para um appliance',
 'Vínculo de DNS privado','Balanceamento em camada 4','Diagnóstico de regras de rede','Tráfego encaminhado no peering','Resolução de nomes privados',
 'Transformações em DCRs','Log Analytics workspace','Action groups','Cofre de backups','Backup de Azure Files',
 'Recuperação de desastre','Observabilidade com Azure Monitor','Consultas de logs em KQL','Alertas de métricas','Orquestração da recuperação'
]
explanations = [
 'As funções específicas permitem administrar a rede e a zona privada nos escopos dos respectivos recursos. Elas ainda concedem outras operações nesses recursos; uma delegação restrita apenas ao vínculo exigiria funções personalizadas.',
 'Deny bloqueia solicitações que violam a condição da política. Audit registra a não conformidade, mas não impede a criação; Disabled suspende a avaliação.',
 'CanNotDelete na VM bloqueia a exclusão e permite alterações. ReadOnly também restringe atualizações. O bloqueio protege operações de controle e pode ser removido por quem tiver a permissão apropriada.',
 'Reader permite consultar recursos e configurações no plano de controle. Não concede escrita nem, por si só, acesso ao conteúdo de dados, como blobs.',
 'Uma iniciativa reúne definições de políticas para atribuição e acompanhamento em conjunto. Locks protegem recursos; atribuições RBAC concedem permissões.',
 'Resource Policy Contributor permite criar e alterar políticas e iniciativas. Não equivale ao controle amplo de Owner, nem autoriza, por si só, atribuições RBAC necessárias a certas remediações.',
 'Uma atribuição na assinatura se aplica aos recursos subordinados dentro do escopo, inclusive recursos futuros, respeitando exclusões e condições da definição.',
 'O registro de verificação comprova a propriedade do domínio. Microsoft Entra ID aceita os registros TXT ou MX indicados pelo processo de verificação.',
 'User Access Administrator permite gerenciar o acesso a recursos Azure. Virtual Machine Contributor administra VMs, mas não concede, por si só, a gestão de atribuições RBAC.',
 'A área Compliance do Azure Policy consolida o estado de conformidade das atribuições. A visualização não substitui uma política que aplique a regra de tags.',
 'O limite é de cinco stored access policies por container. Com quatro existentes, resta uma. Esse mecanismo se aplica a service SAS; user delegation SAS e account SAS não usam essas políticas.',
 'Hierarchical Namespace organiza os blobs em diretórios e permite operações de namespace, como renomear diretórios. Soft delete trata recuperação; redundância trata cópias dos dados.',
 'AzCopy é voltado a transferências de dados de Azure Storage pela linha de comando. Bicep descreve infraestrutura e kubectl administra workloads Kubernetes.',
 'Uma SAS restringe os recursos, as operações e o intervalo de validade do acesso. Para Blob Storage, uma user delegation SAS usa credenciais Microsoft Entra em vez da chave da conta.',
 'Encryption scopes permitem estabelecer limites de criptografia para subconjuntos de blobs na mesma conta. O escopo pode usar uma chave gerenciada pela Microsoft ou pelo cliente.',
 'Azure Files oferece compartilhamentos de arquivos gerenciados, acessíveis por SMB ou NFS conforme a configuração. Queue e Table Storage têm modelos de dados diferentes.',
 'Hot é adequada para acesso frequente. Camadas mais frias favorecem armazenamento menos acessado, com diferenças no custo de acesso; Archive exige reidratação antes da leitura.',
 'Uma política de retenção temporal de Immutable Blob Storage preserva dados no modelo WORM. Para retenção com proteção contra remoção da política, configure e bloqueie a política conforme o requisito.',
 'GRS replica dados para uma região secundária. RA-GRS acrescenta leitura nessa região. LRS fica no datacenter primário e ZRS distribui cópias entre zonas da região primária.',
 'Uma SAS de leitura com expiração de duas horas concede o acesso delimitado sem atribuir Owner. O token deve limitar também o recurso e usar HTTPS.',
 'Azure Disk Encryption não é suportado para discos de SO efêmeros. A Microsoft prevê a retirada do ADE em 15/09/2028 e recomenda encryption at host para novas VMs.',
 'Volumes dinâmicos constam nas restrições do ADE para Windows. O ADE tem retirada prevista para 15/09/2028; novos projetos devem avaliar encryption at host.',
 'Availability Zones separam instâncias entre grupos de datacenters fisicamente distintos na mesma região. A aplicação também precisa de configuração apropriada de balanceamento e recuperação.',
 'App Service executa aplicações web em uma plataforma gerenciada, sem exigir administração direta do SO das VMs subjacentes. Azure Files fornece compartilhamentos, não hospedagem de aplicações web.',
 'Um arquivo PFX/PKCS#12 protegido por senha pode conter a chave privada e a cadeia do certificado. Um certificado público sem chave privada não atende a esse envio para binding TLS.',
 'VM Scale Sets administra grupos de VMs e pode usar autoscale para ajustar a quantidade de instâncias conforme métricas ou agendas. Private DNS resolve nomes, não escala computação.',
 'Azure Container Instances oferece execução direta de containers sem administrar um cluster. Azure Container Apps também executa containers, mas o cenário pede um container group sem esse ambiente de aplicações.',
 'Azure Container Apps oferece uma plataforma gerenciada para aplicações em containers, com revisões e regras de escala. Container Registry armazena imagens; não executa a aplicação.',
 'Azure Container Registry é um registro gerenciado para imagens de containers e outros artefatos. O serviço consumidor ainda precisa de autorização para baixar as imagens.',
 'VM Extensions executam tarefas de configuração e automação. A Custom Script Extension é um exemplo para executar scripts após a implantação; um registro DNS não executa tarefas na VM.',
 'VNet peering conecta redes pela infraestrutura de backbone da Microsoft. Os espaços de endereçamento precisam ser compatíveis e NSGs e rotas ainda influenciam a conectividade.',
 'NSGs filtram tráfego com regras de origem, destino, protocolo e porta em subnets ou NICs. É necessário definir prioridades e bloqueios coerentes, considerando também as regras padrão.',
 'Azure Bastion permite conexões RDP/SSH pelo portal ao IP privado da VM. A VM não precisa de IP público, mas a implantação do Bastion e as permissões de acesso devem ser configuradas.',
 'Private Endpoint dá ao serviço um IP privado na VNet. Ele não desativa automaticamente o endpoint público: restrinja o acesso público e configure DNS para resolver o endereço privado.',
 'Uma UDR na route table pode usar o IP privado de um appliance como próximo salto Virtual appliance. A tabela deve estar associada à subnet e o encaminhamento precisa estar habilitado no appliance.',
 'Com o DNS fornecido pelo Azure, o virtual network link permite resolver a zona privada a partir da VNet. DNS personalizado exige também um caminho de resolução ou encaminhamento apropriado.',
 'Azure Load Balancer distribui fluxos TCP/UDP em camada 4. Application Gateway trabalha com requisições HTTP/HTTPS em camada 7; Traffic Manager usa DNS.',
 'IP flow verify, do Network Watcher, avalia se um fluxo para uma VM seria permitido ou negado pelas regras aplicáveis e identifica a regra. Não realiza um teste completo da aplicação.',
 'Allow forwarded traffic autoriza receber pelo peering tráfego encaminhado que não se originou na VNet remota. Não cria rotas nem habilita IP forwarding no appliance.',
 'Azure Private DNS hospeda zonas cujos registros não são resolvidos pela Internet. As VNets autorizadas precisam de vínculo e de uma configuração de resolução adequada.',
 'Transformações padrão de ingestão em DCRs usam KQL para filtrar ou transformar registros. Apenas os operadores suportados para transformações estão disponíveis, não todo o conjunto de KQL.',
 'Um Log Analytics workspace armazena logs e permite consultá-los com KQL. É preciso configurar a coleta e o envio; criar o workspace sozinho não ingere a telemetria.',
 'Um action group agrupa notificações e ações reutilizáveis, como email e automação. A regra de alerta determina a condição e referencia esse grupo.',
 'Recovery Services vault é usado para gerenciar backups de VMs Azure, com políticas e pontos de recuperação. Um backup vault atende outros cenários de backup; não é intercambiável para todos os workloads.',
 'Azure Files é o workload de compartilhamentos protegido nesse cenário. Azure Backup permite definir agenda e retenção de acordo com o tipo de proteção e os limites suportados.',
 'Azure Site Recovery replica workloads e permite failover para uma localização secundária. Backup atende restauração de dados; não substitui por si só a orquestração de continuidade.',
 'Azure Monitor reúne capacidades para coletar e analisar telemetria e disparar alertas. Fontes de logs e métricas ainda precisam da configuração apropriada de coleta.',
 'Kusto Query Language (KQL) é usada nas consultas de logs do Azure Monitor. Bicep descreve recursos de infraestrutura e não consulta logs.',
 'Uma regra de alerta de métrica pode comparar Percentage CPU usando agregação Average e uma janela de avaliação. DNS TXT e SAS não representam utilização de CPU.',
 'Recovery plans organizam máquinas em grupos e definem a sequência de recuperação no Site Recovery, com possibilidades de ações manuais e automação.'
]
paths = [
 'dns/dns-protect-private-zones-recordsets','governance/policy/concepts/effect-deny','azure-resource-manager/management/lock-resources','role-based-access-control/built-in-roles/general','governance/policy/overview',
 'role-based-access-control/built-in-roles/management-and-governance#resource-policy-contributor','governance/policy/overview','ENTRA','role-based-access-control/built-in-roles#user-access-administrator','governance/policy/how-to/get-compliance-data',
 'storage/common/storage-sas-overview','storage/blobs/data-lake-storage-namespace','storage/common/storage-use-azcopy-v10','storage/common/storage-sas-overview','storage/blobs/encryption-scope-overview',
 'storage/files/storage-files-introduction','storage/blobs/access-tiers-overview','storage/blobs/immutable-storage-overview','storage/common/storage-redundancy','storage/common/storage-sas-overview',
 'virtual-machines/ephemeral-os-disks','virtual-machines/windows/disk-encryption-windows','reliability/availability-zones-overview','app-service/overview','app-service/configure-ssl-certificate',
 'virtual-machine-scale-sets/overview','container-instances/container-instances-overview','container-apps/overview','container-registry/container-registry-intro','virtual-machines/extensions/overview',
 'virtual-network/virtual-network-peering-overview','virtual-network/network-security-groups-overview','bastion/bastion-overview','storage/common/storage-private-endpoints','virtual-network/virtual-networks-udr-overview',
 'dns/private-dns-virtual-network-links','load-balancer/load-balancer-overview','network-watcher/ip-flow-verify-overview','virtual-network/virtual-network-manage-peering','dns/private-dns-privatednszone',
 'azure-monitor/data-collection/data-collection-transformations','azure-monitor/logs/log-analytics-workspace-overview','azure-monitor/alerts/action-groups','backup/backup-azure-recovery-services-vault-overview','backup/azure-file-share-backup-overview',
 'site-recovery/site-recovery-overview','azure-monitor/fundamentals/overview','azure-monitor/logs/log-query-overview','azure-monitor/alerts/alerts-types','site-recovery/recovery-plan-overview'
]
overrides = {
 1: ('A VNet-App e a zona DNS privada corp.internal estão em grupos de recursos distintos. Um administrador precisa criar o vínculo entre elas. Entre as funções internas abaixo, qual combinação evita conceder Contributor nos grupos de recursos inteiros?', ['Contributor nos dois grupos de recursos','Network Contributor na VNet-App e Private DNS Zone Contributor na zona corp.internal','Owner na assinatura','Reader na VNet e DNS Zone Contributor na assinatura']),
 6: ('Uma equipe deve criar definições de Azure Policy e iniciativas na assinatura, sem receber Owner. Entre as funções abaixo, qual é a mais adequada?', ['Owner','Resource Policy Contributor','Reader','Virtual Machine Contributor']),
 11: ('Um container de blobs já possui quatro stored access policies. Quantas outras podem ser criadas antes de atingir o limite por container?', ['Nenhuma','Uma','Quatro','Cinco']),
 14: ('Um cliente precisa ler blobs temporariamente, sem receber a chave da conta de armazenamento. Qual mecanismo permite delimitar o recurso, as permissões e a validade desse acesso?', ['Shared Access Signature (SAS)','Chave primária da conta','Resource lock ReadOnly','Private Endpoint sem autorização de dados']),
 21: ('Ao revisar uma VM existente com disco de sistema operacional efêmero, uma equipe propõe habilitar Azure Disk Encryption (ADE). Qual restrição precisa ser considerada?', ['ADE não é suportado para esse tipo de disco','ADE funciona após criar um NSG','ADE exige habilitar Archive no disco','ADE é habilitado automaticamente pelo Bastion']),
 22: ('Uma VM Windows existente utiliza volumes dinâmicos. Antes de aplicar Azure Disk Encryption (ADE), qual conclusão corresponde às restrições documentadas?', ['Volumes dinâmicos não são suportados pelo ADE','Volumes dinâmicos são obrigatórios para ADE','ADE depende apenas de atribuir Reader','Qualquer volume é suportado se a VM tiver IP público']),
 27: ('Uma equipe quer executar um container group isolado diretamente no Azure, sem gerenciar Kubernetes nem criar um ambiente do Container Apps. Qual serviço se encaixa no cenário?', ['Azure Container Instances','Azure Kubernetes Service','Azure Container Registry','Azure Container Apps']),
 28: ('Uma aplicação em containers precisa de revisões e escala orientada a eventos em uma plataforma gerenciada. Qual serviço é mais adequado?', ['Azure Container Apps','Azure Container Registry','Azure Container Instances sem ambiente de aplicações','Azure Files']),
 34: ('Uma aplicação precisa acessar Blob Storage por um IP privado na VNet. O acesso pelo endpoint público da conta também deve ser impedido. Qual solução atende aos dois requisitos?', ['Private Endpoint para Blob, DNS apropriado e acesso público desabilitado na conta','Private Endpoint sem mudar o acesso público','Service Endpoint, mantendo o acesso público aberto','Public Load Balancer na frente da conta']),
 36: ('Uma VNet usa o DNS fornecido pelo Azure. Para que suas VMs resolvam os registros de uma zona DNS privada existente, o que deve ser criado?', ['Virtual network link entre a zona e a VNet','Peering com qualquer outra VNet','Registro NS público delegando a zona privada','Private Endpoint para cada VM']),
 38: ('Você quer descobrir qual regra permite ou nega um fluxo TCP específico para uma VM. Qual ferramenta do Network Watcher é destinada a essa verificação?', ['IP flow verify','Connection monitor','Packet capture','Topology']),
 39: ('Uma NVA na VNet-Hub encaminha tráfego de outra rede para a VNet-App por peering. As UDRs e o IP forwarding estão configurados. Qual configuração do peering permite à VNet-App receber esse tráfego encaminhado da VNet-Hub?', ['Allow forwarded traffic no peering da VNet-App com a VNet-Hub','Allow gateway transit sem encaminhamento','Use remote gateways como substituto das UDRs','Desabilitar o acesso entre as redes virtuais']),
 41: ('Uma transformação padrão de ingestão em uma Data Collection Rule deve filtrar registros antes que sejam armazenados no Azure Monitor. Qual linguagem é usada nessa transformação?', ['KQL','T-SQL','Bicep','PowerShell DSC'])
}
questions=[]
for number,block in blocks:
    qid=int(number)
    parts=re.split(r'(?m)^([ABCD])\.\s*',block)
    assert len(parts)==9,(qid,parts)
    prompt=' '.join(parts[0].split())
    options=[' '.join(parts[i].split()) for i in [2,4,6,8]]
    if qid in overrides:
        prompt,options=overrides[qid]
    reference='https://learn.microsoft.com/en-us/azure/'+paths[qid-1]
    if paths[qid-1]=='ENTRA':
        reference='https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain'
    questions.append(dict(id=qid,domain=(qid-1)//10,concept=concepts[qid-1],prompt=prompt,options=options,answer=answers.get(qid,0),explanation=explanations[qid-1],reference=reference))
assert [q['id'] for q in questions]==list(range(1,51))
assert len(concepts)==len(explanations)==len(paths)==50
for q in questions:
    assert len(q['options'])==4 and len(set(q['options']))==4
    assert 0<=q['answer']<4 and all(q[k] for k in ['prompt','concept','explanation','reference'])
    assert '\ufffd' not in json.dumps(q,ensure_ascii=False)
(root/'dist'/'questions.js').write_text('window.AZ104_QUESTIONS = '+json.dumps(questions,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
materials=root/'dist'/'materiais'
materials.mkdir(exist_ok=True)
if source.resolve() != (materials/'simulado-original.pdf').resolve():
    shutil.copy2(source,materials/'simulado-original.pdf')
methodology = root.parent/'Metodologia_Criacao_Questoes_AZ104.md'
if methodology.exists():
    shutil.copy2(methodology,materials/'metodologia.md')
print(f'{len(questions)} questões extraídas; 10 por área; 50 explicações e referências; originais preservados.')
