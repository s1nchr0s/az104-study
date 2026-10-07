window.AZ104_QUESTIONS = [
  {
    "id": 1,
    "domain": 0,
    "concept": "RBAC e menor privilégio",
    "prompt": "A VNet-App e a zona DNS privada corp.internal estão em grupos de recursos distintos. Um administrador precisa criar o vínculo entre elas. Entre as funções internas abaixo, qual combinação evita conceder Contributor nos grupos de recursos inteiros?",
    "options": [
      "Contributor nos dois grupos de recursos",
      "Network Contributor na VNet-App e Private DNS Zone Contributor na zona corp.internal",
      "Owner na assinatura",
      "Reader na VNet e DNS Zone Contributor na assinatura"
    ],
    "answer": 1,
    "explanation": "As funções específicas permitem administrar a rede e a zona privada nos escopos dos respectivos recursos. Elas ainda concedem outras operações nesses recursos; uma delegação restrita apenas ao vínculo exigiria funções personalizadas.",
    "reference": "https://learn.microsoft.com/en-us/azure/dns/dns-protect-private-zones-recordsets"
  },
  {
    "id": 2,
    "domain": 0,
    "concept": "Efeito Deny do Azure Policy",
    "prompt": "Uma política personalizada deve impedir a criação de novos grupos de recursos quando a tag CostCenter não estiver definida como FIN. Qual efeito do Azure Policy é o mais adequado?",
    "options": [
      "Audit",
      "Append",
      "Deny",
      "Disabled"
    ],
    "answer": 2,
    "explanation": "Deny bloqueia solicitações que violam a condição da política. Audit registra a não conformidade, mas não impede a criação; Disabled suspende a avaliação.",
    "reference": "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-deny"
  },
  {
    "id": 3,
    "domain": 0,
    "concept": "Bloqueio de exclusão",
    "prompt": "Um grupo de recursos contém uma máquina virtual que não pode ser excluída acidentalmente, mas seus administradores ainda precisam alterar configurações da VM. Qual bloqueio atende ao requisito?",
    "options": [
      "ReadOnly no grupo de recursos",
      "CanNotDelete na VM",
      "ReadOnly na assinatura",
      "CanNotDelete no tenant"
    ],
    "answer": 1,
    "explanation": "CanNotDelete na VM bloqueia a exclusão e permite alterações. ReadOnly também restringe atualizações. O bloqueio protege operações de controle e pode ser removido por quem tiver a permissão apropriada.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources"
  },
  {
    "id": 4,
    "domain": 0,
    "concept": "Função Reader",
    "prompt": "Você precisa permitir que uma equipe visualize recursos e configurações de uma assinatura, sem criar, alterar ou excluir recursos. Qual função interna do Azure RBAC é a escolha mais apropriada?",
    "options": [
      "Reader",
      "Contributor",
      "Owner",
      "User Access Administrator"
    ],
    "answer": 0,
    "explanation": "Reader permite consultar recursos e configurações no plano de controle. Não concede escrita nem, por si só, acesso ao conteúdo de dados, como blobs.",
    "reference": "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general"
  },
  {
    "id": 5,
    "domain": 0,
    "concept": "Iniciativas de políticas",
    "prompt": "Uma organização deseja padronizar várias regras de Azure Policy e atribuí-las como uma única unidade a diferentes grupos de gerenciamento. O que deve ser criado?",
    "options": [
      "Uma iniciativa de políticas",
      "Um resource lock",
      "Um action group",
      "Uma role assignment"
    ],
    "answer": 0,
    "explanation": "Uma iniciativa reúne definições de políticas para atribuição e acompanhamento em conjunto. Locks protegem recursos; atribuições RBAC concedem permissões.",
    "reference": "https://learn.microsoft.com/en-us/azure/governance/policy/overview"
  },
  {
    "id": 6,
    "domain": 0,
    "concept": "Resource Policy Contributor",
    "prompt": "Uma equipe deve criar definições de Azure Policy e iniciativas na assinatura, sem receber Owner. Entre as funções abaixo, qual é a mais adequada?",
    "options": [
      "Owner",
      "Resource Policy Contributor",
      "Reader",
      "Virtual Machine Contributor"
    ],
    "answer": 1,
    "explanation": "Resource Policy Contributor permite criar e alterar políticas e iniciativas. Não equivale ao controle amplo de Owner, nem autoriza, por si só, atribuições RBAC necessárias a certas remediações.",
    "reference": "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/management-and-governance#resource-policy-contributor"
  },
  {
    "id": 7,
    "domain": 0,
    "concept": "Escopo de uma política",
    "prompt": "Uma assinatura contém recursos em vários grupos de recursos. Você precisa aplicar uma política a todos eles e também a futuros grupos criados nessa assinatura. Em qual escopo a atribuição deve ser feita?",
    "options": [
      "Em cada recurso individual",
      "Na assinatura",
      "Somente no primeiro grupo de recursos",
      "No Log Analytics workspace"
    ],
    "answer": 1,
    "explanation": "Uma atribuição na assinatura se aplica aos recursos subordinados dentro do escopo, inclusive recursos futuros, respeitando exclusões e condições da definição.",
    "reference": "https://learn.microsoft.com/en-us/azure/governance/policy/overview"
  },
  {
    "id": 8,
    "domain": 0,
    "concept": "Verificação de domínio",
    "prompt": "Uma empresa quer usar um nome DNS personalizado em seu tenant do Microsoft Entra ID. Antes de utilizá-lo como domínio verificado, qual etapa é necessária?",
    "options": [
      "Criar um registro DNS de verificação no domínio",
      "Criar um NSG",
      "Criar uma VNet",
      "Habilitar Azure Backup"
    ],
    "answer": 0,
    "explanation": "O registro de verificação comprova a propriedade do domínio. Microsoft Entra ID aceita os registros TXT ou MX indicados pelo processo de verificação.",
    "reference": "https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain"
  },
  {
    "id": 9,
    "domain": 0,
    "concept": "Delegação de acesso RBAC",
    "prompt": "Um administrador deve delegar a capacidade de gerenciar atribuições de acesso RBAC, sem conceder permissão para modificar as máquinas virtuais existentes. Qual função é mais apropriada?",
    "options": [
      "Reader",
      "Virtual Machine Contributor",
      "User Access Administrator",
      "Network Contributor"
    ],
    "answer": 2,
    "explanation": "User Access Administrator permite gerenciar o acesso a recursos Azure. Virtual Machine Contributor administra VMs, mas não concede, por si só, a gestão de atribuições RBAC.",
    "reference": "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#user-access-administrator"
  },
  {
    "id": 10,
    "domain": 0,
    "concept": "Conformidade de políticas",
    "prompt": "Você deseja garantir que novos recursos possuam uma tag obrigatória, mas também precisa visualizar o estado de conformidade no Azure Policy. Qual recurso fornece essa avaliação centralizada?",
    "options": [
      "Compliance do Azure Policy",
      "Azure Bastion",
      "Network Watcher",
      "Azure Files"
    ],
    "answer": 0,
    "explanation": "A área Compliance do Azure Policy consolida o estado de conformidade das atribuições. A visualização não substitui uma política que aplique a regra de tags.",
    "reference": "https://learn.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data"
  },
  {
    "id": 11,
    "domain": 1,
    "concept": "Limite de stored access policies",
    "prompt": "Um container de blobs já possui quatro stored access policies. Quantas outras podem ser criadas antes de atingir o limite por container?",
    "options": [
      "Nenhuma",
      "Uma",
      "Quatro",
      "Cinco"
    ],
    "answer": 1,
    "explanation": "O limite é de cinco stored access policies por container. Com quatro existentes, resta uma. Esse mecanismo se aplica a service SAS; user delegation SAS e account SAS não usam essas políticas.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview"
  },
  {
    "id": 12,
    "domain": 1,
    "concept": "Hierarchical Namespace",
    "prompt": "Uma aplicação precisa trabalhar com diretórios reais em Blob Storage, incluindo operações de diretório mais próximas de um sistema de arquivos. Qual recurso da conta de armazenamento deve estar habilitado?",
    "options": [
      "Soft delete",
      "Hierarchical Namespace",
      "RA-GRS",
      "Static website"
    ],
    "answer": 1,
    "explanation": "Hierarchical Namespace organiza os blobs em diretórios e permite operações de namespace, como renomear diretórios. Soft delete trata recuperação; redundância trata cópias dos dados.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-namespace"
  },
  {
    "id": 13,
    "domain": 1,
    "concept": "Transferências com AzCopy",
    "prompt": "Você precisa copiar grande quantidade de dados para uma conta de armazenamento Azure usando uma ferramenta de linha de comando otimizada para transferências de Storage. Qual ferramenta é a mais indicada?",
    "options": [
      "AzCopy",
      "kubectl",
      "Bicep",
      "Azure Bastion"
    ],
    "answer": 0,
    "explanation": "AzCopy é voltado a transferências de dados de Azure Storage pela linha de comando. Bicep descreve infraestrutura e kubectl administra workloads Kubernetes.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10"
  },
  {
    "id": 14,
    "domain": 1,
    "concept": "Acesso temporário com SAS",
    "prompt": "Um cliente precisa ler blobs temporariamente, sem receber a chave da conta de armazenamento. Qual mecanismo permite delimitar o recurso, as permissões e a validade desse acesso?",
    "options": [
      "Shared Access Signature (SAS)",
      "Chave primária da conta",
      "Resource lock ReadOnly",
      "Private Endpoint sem autorização de dados"
    ],
    "answer": 0,
    "explanation": "Uma SAS restringe os recursos, as operações e o intervalo de validade do acesso. Para Blob Storage, uma user delegation SAS usa credenciais Microsoft Entra em vez da chave da conta.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview"
  },
  {
    "id": 15,
    "domain": 1,
    "concept": "Encryption scopes",
    "prompt": "Uma empresa precisa controlar a criptografia de blobs usando uma chave específica para um subconjunto de dados em uma conta compatível. Qual recurso permite separar esse limite de criptografia?",
    "options": [
      "Encryption scope",
      "Action group",
      "Route table",
      "Recovery plan"
    ],
    "answer": 0,
    "explanation": "Encryption scopes permitem estabelecer limites de criptografia para subconjuntos de blobs na mesma conta. O escopo pode usar uma chave gerenciada pela Microsoft ou pelo cliente.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview"
  },
  {
    "id": 16,
    "domain": 1,
    "concept": "Compartilhamentos SMB",
    "prompt": "Você precisa armazenar arquivos acessíveis por SMB a partir de várias máquinas virtuais. Qual serviço de armazenamento é o mais apropriado?",
    "options": [
      "Azure Files",
      "Azure Queue Storage",
      "Azure Table Storage",
      "Azure DNS"
    ],
    "answer": 0,
    "explanation": "Azure Files oferece compartilhamentos de arquivos gerenciados, acessíveis por SMB ou NFS conforme a configuração. Queue e Table Storage têm modelos de dados diferentes.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction"
  },
  {
    "id": 17,
    "domain": 1,
    "concept": "Camadas de acesso",
    "prompt": "Uma aplicação grava blobs que são acessados frequentemente e não deve sofrer cobrança de recuperação típica de camadas de arquivamento. Qual camada é a escolha mais adequada?",
    "options": [
      "Hot",
      "Archive",
      "Offline",
      "Frozen"
    ],
    "answer": 0,
    "explanation": "Hot é adequada para acesso frequente. Camadas mais frias favorecem armazenamento menos acessado, com diferenças no custo de acesso; Archive exige reidratação antes da leitura.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview"
  },
  {
    "id": 18,
    "domain": 1,
    "concept": "Retenção imutável",
    "prompt": "Você precisa impedir alterações e exclusões de determinados blobs por um período definido para atender a requisitos de retenção. Qual capacidade é relevante?",
    "options": [
      "Immutable Blob Storage",
      "Azure Bastion",
      "Application Security Group",
      "VNet peering"
    ],
    "answer": 0,
    "explanation": "Uma política de retenção temporal de Immutable Blob Storage preserva dados no modelo WORM. Para retenção com proteção contra remoção da política, configure e bloqueie a política conforme o requisito.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview"
  },
  {
    "id": 19,
    "domain": 1,
    "concept": "Redundância geográfica",
    "prompt": "Uma conta de armazenamento precisa manter cópias dos dados em uma região secundária para aumentar a resiliência regional. Qual família de redundância atende a esse objetivo?",
    "options": [
      "LRS",
      "ZRS somente",
      "GRS/RA-GRS",
      "Ephemeral storage"
    ],
    "answer": 2,
    "explanation": "GRS replica dados para uma região secundária. RA-GRS acrescenta leitura nessa região. LRS fica no datacenter primário e ZRS distribui cópias entre zonas da região primária.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy"
  },
  {
    "id": 20,
    "domain": 1,
    "concept": "SAS com leitura e expiração",
    "prompt": "Você precisa conceder acesso somente de leitura a um blob por duas horas, sem alterar RBAC do usuário. Qual mecanismo é mais apropriado?",
    "options": [
      "SAS com permissão de leitura e expiração",
      "Owner na assinatura",
      "CanNotDelete",
      "Private DNS Zone Contributor"
    ],
    "answer": 0,
    "explanation": "Uma SAS de leitura com expiração de duas horas concede o acesso delimitado sem atribuir Owner. O token deve limitar também o recurso e usar HTTPS.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview"
  },
  {
    "id": 21,
    "domain": 2,
    "concept": "Discos efêmeros e ADE",
    "prompt": "Ao revisar uma VM existente com disco de sistema operacional efêmero, uma equipe propõe habilitar Azure Disk Encryption (ADE). Qual restrição precisa ser considerada?",
    "options": [
      "ADE não é suportado para esse tipo de disco",
      "ADE funciona após criar um NSG",
      "ADE exige habilitar Archive no disco",
      "ADE é habilitado automaticamente pelo Bastion"
    ],
    "answer": 0,
    "explanation": "Azure Disk Encryption não é suportado para discos de SO efêmeros. A Microsoft prevê a retirada do ADE em 15/09/2028 e recomenda encryption at host para novas VMs.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks"
  },
  {
    "id": 22,
    "domain": 2,
    "concept": "Volumes dinâmicos e ADE",
    "prompt": "Uma VM Windows existente utiliza volumes dinâmicos. Antes de aplicar Azure Disk Encryption (ADE), qual conclusão corresponde às restrições documentadas?",
    "options": [
      "Volumes dinâmicos não são suportados pelo ADE",
      "Volumes dinâmicos são obrigatórios para ADE",
      "ADE depende apenas de atribuir Reader",
      "Qualquer volume é suportado se a VM tiver IP público"
    ],
    "answer": 0,
    "explanation": "Volumes dinâmicos constam nas restrições do ADE para Windows. O ADE tem retirada prevista para 15/09/2028; novos projetos devem avaliar encryption at host.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/disk-encryption-windows"
  },
  {
    "id": 23,
    "domain": 2,
    "concept": "Availability Zones",
    "prompt": "Você precisa distribuir instâncias de VMs por datacenters fisicamente separados dentro da mesma região Azure. Qual recurso deve ser considerado?",
    "options": [
      "Availability Zones",
      "Stored access policies",
      "Management locks",
      "Private DNS records"
    ],
    "answer": 0,
    "explanation": "Availability Zones separam instâncias entre grupos de datacenters fisicamente distintos na mesma região. A aplicação também precisa de configuração apropriada de balanceamento e recuperação.",
    "reference": "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview"
  },
  {
    "id": 24,
    "domain": 2,
    "concept": "Plataforma de aplicações web",
    "prompt": "Uma aplicação web precisa executar em uma plataforma gerenciada, com suporte nativo a TLS e sem administrar diretamente o sistema operacional das VMs. Qual serviço se encaixa melhor?",
    "options": [
      "Azure App Service",
      "Azure Route Table",
      "Azure Files",
      "Network Watcher"
    ],
    "answer": 0,
    "explanation": "App Service executa aplicações web em uma plataforma gerenciada, sem exigir administração direta do SO das VMs subjacentes. Azure Files fornece compartilhamentos, não hospedagem de aplicações web.",
    "reference": "https://learn.microsoft.com/en-us/azure/app-service/overview"
  },
  {
    "id": 25,
    "domain": 2,
    "concept": "Certificado TLS com chave privada",
    "prompt": "Um certificado será usado em um binding TLS de um Web App. Qual formato é normalmente adequado para importar uma chave privada e a cadeia do certificado?",
    "options": [
      "PFX/PKCS#12",
      "CSV",
      "VHD",
      "JSON sem chave privada"
    ],
    "answer": 0,
    "explanation": "Um arquivo PFX/PKCS#12 protegido por senha pode conter a chave privada e a cadeia do certificado. Um certificado público sem chave privada não atende a esse envio para binding TLS.",
    "reference": "https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-certificate"
  },
  {
    "id": 26,
    "domain": 2,
    "concept": "Escalabilidade de VMs",
    "prompt": "Uma aplicação precisa aumentar e reduzir automaticamente o número de VMs idênticas de acordo com a demanda. Qual serviço é mais apropriado?",
    "options": [
      "Virtual Machine Scale Sets",
      "Azure Private DNS",
      "Recovery Services vault",
      "Azure Policy initiative"
    ],
    "answer": 0,
    "explanation": "VM Scale Sets administra grupos de VMs e pode usar autoscale para ajustar a quantidade de instâncias conforme métricas ou agendas. Private DNS resolve nomes, não escala computação.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview"
  },
  {
    "id": 27,
    "domain": 2,
    "concept": "Execução de containers",
    "prompt": "Uma equipe quer executar um container group isolado diretamente no Azure, sem gerenciar Kubernetes nem criar um ambiente do Container Apps. Qual serviço se encaixa no cenário?",
    "options": [
      "Azure Container Instances",
      "Azure Kubernetes Service",
      "Azure Container Registry",
      "Azure Container Apps"
    ],
    "answer": 0,
    "explanation": "Azure Container Instances oferece execução direta de containers sem administrar um cluster. Azure Container Apps também executa containers, mas o cenário pede um container group sem esse ambiente de aplicações.",
    "reference": "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview"
  },
  {
    "id": 28,
    "domain": 2,
    "concept": "Escalabilidade de aplicações em containers",
    "prompt": "Uma aplicação em containers precisa de revisões e escala orientada a eventos em uma plataforma gerenciada. Qual serviço é mais adequado?",
    "options": [
      "Azure Container Apps",
      "Azure Container Registry",
      "Azure Container Instances sem ambiente de aplicações",
      "Azure Files"
    ],
    "answer": 0,
    "explanation": "Azure Container Apps oferece uma plataforma gerenciada para aplicações em containers, com revisões e regras de escala. Container Registry armazena imagens; não executa a aplicação.",
    "reference": "https://learn.microsoft.com/en-us/azure/container-apps/overview"
  },
  {
    "id": 29,
    "domain": 2,
    "concept": "Registro de imagens",
    "prompt": "Você precisa armazenar imagens privadas de containers e disponibilizá-las para serviços Azure. Qual recurso é destinado a essa finalidade?",
    "options": [
      "Azure Container Registry",
      "Recovery Services vault",
      "Log Analytics workspace",
      "Azure Bastion"
    ],
    "answer": 0,
    "explanation": "Azure Container Registry é um registro gerenciado para imagens de containers e outros artefatos. O serviço consumidor ainda precisa de autorização para baixar as imagens.",
    "reference": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-intro"
  },
  {
    "id": 30,
    "domain": 2,
    "concept": "Extensões de VM",
    "prompt": "Uma VM precisa executar uma tarefa de configuração após a implantação sem que o administrador faça login interativamente. Qual mecanismo do Azure é apropriado?",
    "options": [
      "VM Extension",
      "DNS TXT record",
      "Stored access policy",
      "Legal hold"
    ],
    "answer": 0,
    "explanation": "VM Extensions executam tarefas de configuração e automação. A Custom Script Extension é um exemplo para executar scripts após a implantação; um registro DNS não executa tarefas na VM.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/overview"
  },
  {
    "id": 31,
    "domain": 3,
    "concept": "Conectividade entre VNets",
    "prompt": "Duas VNets precisam trocar tráfego usando a rede backbone do Azure, sem necessidade de um gateway VPN entre elas. Qual recurso deve ser configurado?",
    "options": [
      "VNet peering",
      "Blob lifecycle management",
      "Azure Policy",
      "Recovery plan"
    ],
    "answer": 0,
    "explanation": "VNet peering conecta redes pela infraestrutura de backbone da Microsoft. Os espaços de endereçamento precisam ser compatíveis e NSGs e rotas ainda influenciam a conectividade.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview"
  },
  {
    "id": 32,
    "domain": 3,
    "concept": "Filtragem por NSG",
    "prompt": "Você precisa permitir tráfego TCP 443 para uma subnet e bloquear conexões não autorizadas. Qual recurso fornece regras de filtragem de tráfego em nível de subnet/NIC?",
    "options": [
      "Network Security Group (NSG)",
      "Resource lock",
      "Azure Files",
      "Management group"
    ],
    "answer": 0,
    "explanation": "NSGs filtram tráfego com regras de origem, destino, protocolo e porta em subnets ou NICs. É necessário definir prioridades e bloqueios coerentes, considerando também as regras padrão.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
  },
  {
    "id": 33,
    "domain": 3,
    "concept": "Acesso com Azure Bastion",
    "prompt": "Uma VM não deve possuir IP público, mas os administradores precisam acessá-la por RDP/SSH através do portal Azure. Qual serviço é indicado?",
    "options": [
      "Azure Bastion",
      "Azure Queue Storage",
      "Azure Policy",
      "Azure Backup"
    ],
    "answer": 0,
    "explanation": "Azure Bastion permite conexões RDP/SSH pelo portal ao IP privado da VM. A VM não precisa de IP público, mas a implantação do Bastion e as permissões de acesso devem ser configuradas.",
    "reference": "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview"
  },
  {
    "id": 34,
    "domain": 3,
    "concept": "Private Endpoint e acesso público",
    "prompt": "Uma aplicação precisa acessar Blob Storage por um IP privado na VNet. O acesso pelo endpoint público da conta também deve ser impedido. Qual solução atende aos dois requisitos?",
    "options": [
      "Private Endpoint para Blob, DNS apropriado e acesso público desabilitado na conta",
      "Private Endpoint sem mudar o acesso público",
      "Service Endpoint, mantendo o acesso público aberto",
      "Public Load Balancer na frente da conta"
    ],
    "answer": 0,
    "explanation": "Private Endpoint dá ao serviço um IP privado na VNet. Ele não desativa automaticamente o endpoint público: restrinja o acesso público e configure DNS para resolver o endereço privado.",
    "reference": "https://learn.microsoft.com/en-us/azure/storage/common/storage-private-endpoints"
  },
  {
    "id": 35,
    "domain": 3,
    "concept": "Roteamento para um appliance",
    "prompt": "Você precisa direcionar tráfego de uma subnet para um network virtual appliance antes de chegar ao destino. O que deve ser associado à subnet?",
    "options": [
      "Uma route table com rota definida pelo usuário",
      "Uma stored access policy",
      "Um backup policy",
      "Um encryption scope"
    ],
    "answer": 0,
    "explanation": "Uma UDR na route table pode usar o IP privado de um appliance como próximo salto Virtual appliance. A tabela deve estar associada à subnet e o encaminhamento precisa estar habilitado no appliance.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview"
  },
  {
    "id": 36,
    "domain": 3,
    "concept": "Vínculo de DNS privado",
    "prompt": "Uma VNet usa o DNS fornecido pelo Azure. Para que suas VMs resolvam os registros de uma zona DNS privada existente, o que deve ser criado?",
    "options": [
      "Virtual network link entre a zona e a VNet",
      "Peering com qualquer outra VNet",
      "Registro NS público delegando a zona privada",
      "Private Endpoint para cada VM"
    ],
    "answer": 0,
    "explanation": "Com o DNS fornecido pelo Azure, o virtual network link permite resolver a zona privada a partir da VNet. DNS personalizado exige também um caminho de resolução ou encaminhamento apropriado.",
    "reference": "https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links"
  },
  {
    "id": 37,
    "domain": 3,
    "concept": "Balanceamento em camada 4",
    "prompt": "Você precisa distribuir conexões TCP de entrada entre várias VMs no mesmo backend pool, em nível de camada 4. Qual serviço é adequado?",
    "options": [
      "Azure Load Balancer",
      "Azure Policy",
      "Azure Files",
      "Microsoft Entra ID"
    ],
    "answer": 0,
    "explanation": "Azure Load Balancer distribui fluxos TCP/UDP em camada 4. Application Gateway trabalha com requisições HTTP/HTTPS em camada 7; Traffic Manager usa DNS.",
    "reference": "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview"
  },
  {
    "id": 38,
    "domain": 3,
    "concept": "Diagnóstico de regras de rede",
    "prompt": "Você quer descobrir qual regra permite ou nega um fluxo TCP específico para uma VM. Qual ferramenta do Network Watcher é destinada a essa verificação?",
    "options": [
      "IP flow verify",
      "Connection monitor",
      "Packet capture",
      "Topology"
    ],
    "answer": 0,
    "explanation": "IP flow verify, do Network Watcher, avalia se um fluxo para uma VM seria permitido ou negado pelas regras aplicáveis e identifica a regra. Não realiza um teste completo da aplicação.",
    "reference": "https://learn.microsoft.com/en-us/azure/network-watcher/ip-flow-verify-overview"
  },
  {
    "id": 39,
    "domain": 3,
    "concept": "Tráfego encaminhado no peering",
    "prompt": "Uma NVA na VNet-Hub encaminha tráfego de outra rede para a VNet-App por peering. As UDRs e o IP forwarding estão configurados. Qual configuração do peering permite à VNet-App receber esse tráfego encaminhado da VNet-Hub?",
    "options": [
      "Allow forwarded traffic no peering da VNet-App com a VNet-Hub",
      "Allow gateway transit sem encaminhamento",
      "Use remote gateways como substituto das UDRs",
      "Desabilitar o acesso entre as redes virtuais"
    ],
    "answer": 0,
    "explanation": "Allow forwarded traffic autoriza receber pelo peering tráfego encaminhado que não se originou na VNet remota. Não cria rotas nem habilita IP forwarding no appliance.",
    "reference": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering"
  },
  {
    "id": 40,
    "domain": 3,
    "concept": "Resolução de nomes privados",
    "prompt": "Uma aplicação interna deve ter resolução DNS privada sem publicar registros na Internet. Qual serviço é apropriado?",
    "options": [
      "Azure Private DNS",
      "Public DNS zone obrigatoriamente",
      "Azure Backup",
      "Azure Cost Management"
    ],
    "answer": 0,
    "explanation": "Azure Private DNS hospeda zonas cujos registros não são resolvidos pela Internet. As VNets autorizadas precisam de vínculo e de uma configuração de resolução adequada.",
    "reference": "https://learn.microsoft.com/en-us/azure/dns/private-dns-privatednszone"
  },
  {
    "id": 41,
    "domain": 4,
    "concept": "Transformações em DCRs",
    "prompt": "Uma transformação padrão de ingestão em uma Data Collection Rule deve filtrar registros antes que sejam armazenados no Azure Monitor. Qual linguagem é usada nessa transformação?",
    "options": [
      "KQL",
      "T-SQL",
      "Bicep",
      "PowerShell DSC"
    ],
    "answer": 0,
    "explanation": "Transformações padrão de ingestão em DCRs usam KQL para filtrar ou transformar registros. Apenas os operadores suportados para transformações estão disponíveis, não todo o conjunto de KQL.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/data-collection-transformations"
  },
  {
    "id": 42,
    "domain": 4,
    "concept": "Log Analytics workspace",
    "prompt": "Você precisa centralizar consultas de logs provenientes de vários recursos Azure. Qual recurso é usado como repositório e mecanismo de consulta desses logs?",
    "options": [
      "Log Analytics workspace",
      "Azure Bastion",
      "Availability Set",
      "Private DNS zone"
    ],
    "answer": 0,
    "explanation": "Um Log Analytics workspace armazena logs e permite consultá-los com KQL. É preciso configurar a coleta e o envio; criar o workspace sozinho não ingere a telemetria.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview"
  },
  {
    "id": 43,
    "domain": 4,
    "concept": "Action groups",
    "prompt": "Um alerta do Azure Monitor deve enviar email e também disparar uma ação automatizada quando a condição ocorrer. O que agrupa os destinos e ações do alerta?",
    "options": [
      "Action group",
      "Resource lock",
      "Encryption scope",
      "Stored access policy"
    ],
    "answer": 0,
    "explanation": "Um action group agrupa notificações e ações reutilizáveis, como email e automação. A regra de alerta determina a condição e referencia esse grupo.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups"
  },
  {
    "id": 44,
    "domain": 4,
    "concept": "Cofre de backups",
    "prompt": "Você precisa proteger máquinas virtuais Azure usando o serviço de backup e políticas de retenção. Qual recurso é tradicionalmente associado ao gerenciamento desses backups?",
    "options": [
      "Recovery Services vault",
      "Network Security Group",
      "Private DNS zone",
      "Route table"
    ],
    "answer": 0,
    "explanation": "Recovery Services vault é usado para gerenciar backups de VMs Azure, com políticas e pontos de recuperação. Um backup vault atende outros cenários de backup; não é intercambiável para todos os workloads.",
    "reference": "https://learn.microsoft.com/en-us/azure/backup/backup-azure-recovery-services-vault-overview"
  },
  {
    "id": 45,
    "domain": 4,
    "concept": "Backup de Azure Files",
    "prompt": "Um file share do Azure deve ser protegido por Azure Backup com uma agenda suportada e retenção configurável. Qual workload está sendo protegido?",
    "options": [
      "Azure Files",
      "Azure DNS",
      "Azure Policy",
      "Azure Bastion"
    ],
    "answer": 0,
    "explanation": "Azure Files é o workload de compartilhamentos protegido nesse cenário. Azure Backup permite definir agenda e retenção de acordo com o tipo de proteção e os limites suportados.",
    "reference": "https://learn.microsoft.com/en-us/azure/backup/azure-file-share-backup-overview"
  },
  {
    "id": 46,
    "domain": 4,
    "concept": "Recuperação de desastre",
    "prompt": "Uma empresa precisa orquestrar failover de máquinas virtuais para outra região em um cenário de recuperação de desastre. Qual serviço deve ser considerado?",
    "options": [
      "Azure Site Recovery",
      "Azure Files",
      "Azure Policy",
      "Azure Private DNS apenas"
    ],
    "answer": 0,
    "explanation": "Azure Site Recovery replica workloads e permite failover para uma localização secundária. Backup atende restauração de dados; não substitui por si só a orquestração de continuidade.",
    "reference": "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview"
  },
  {
    "id": 47,
    "domain": 4,
    "concept": "Observabilidade com Azure Monitor",
    "prompt": "Você precisa coletar métricas e logs de recursos e criar alertas quando um limite for ultrapassado. Qual serviço fornece essa capacidade de observabilidade no Azure?",
    "options": [
      "Azure Monitor",
      "Azure Container Registry",
      "Azure Files",
      "Azure DNS"
    ],
    "answer": 0,
    "explanation": "Azure Monitor reúne capacidades para coletar e analisar telemetria e disparar alertas. Fontes de logs e métricas ainda precisam da configuração apropriada de coleta.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview"
  },
  {
    "id": 48,
    "domain": 4,
    "concept": "Consultas de logs em KQL",
    "prompt": "Uma equipe precisa consultar eventos e telemetria armazenados no Log Analytics usando uma linguagem de consulta própria do ecossistema Azure Monitor. Qual linguagem deve usar?",
    "options": [
      "KQL",
      "HTML",
      "Bicep",
      "BGP"
    ],
    "answer": 0,
    "explanation": "Kusto Query Language (KQL) é usada nas consultas de logs do Azure Monitor. Bicep descreve recursos de infraestrutura e não consulta logs.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-query-overview"
  },
  {
    "id": 49,
    "domain": 4,
    "concept": "Alertas de métricas",
    "prompt": "Você quer que uma regra de alerta seja disparada quando a CPU média de uma VM permanecer acima de um limite. Que tipo de dado é mais diretamente utilizado?",
    "options": [
      "Métrica",
      "Registro DNS TXT",
      "SAS",
      "Role assignment"
    ],
    "answer": 0,
    "explanation": "Uma regra de alerta de métrica pode comparar Percentage CPU usando agregação Average e uma janela de avaliação. DNS TXT e SAS não representam utilização de CPU.",
    "reference": "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types"
  },
  {
    "id": 50,
    "domain": 4,
    "concept": "Orquestração da recuperação",
    "prompt": "Uma aplicação crítica exige um plano de continuidade que defina a ordem de recuperação de máquinas durante um failover. Qual conceito do Site Recovery atende a essa necessidade?",
    "options": [
      "Recovery plan",
      "NSG flow log",
      "Encryption scope",
      "Management lock"
    ],
    "answer": 0,
    "explanation": "Recovery plans organizam máquinas em grupos e definem a sequência de recuperação no Site Recovery, com possibilidades de ações manuais e automação.",
    "reference": "https://learn.microsoft.com/en-us/azure/site-recovery/recovery-plan-overview"
  }
];
