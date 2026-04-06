export const categories = ['Todos', 'Web', 'Automacao', 'Sistemas'];

export const heroMetrics = [
  { label: 'Foco', value: 'Web, automacao e sistemas' },
  { label: 'Base', value: 'React, Node.js, Python, SQL, PHP' },
  { label: 'Direcao', value: 'Clareza, disciplina e entrega' },
];

export const aboutPoints = [
  'Profissional com atuacao voltada a desenvolvimento web, manutencao de sistemas e construcao de solucoes com foco em clareza tecnica, usabilidade e evolucao continua.',
  'Possui experiencia pratica com PHP, Python, SQL, APIs, ETL e integracoes, incluindo criacao de modulos, manutencao de sistemas legados e automacao de processos.',
  'Na atuacao como assistente de TI, desenvolveu rotina consistente em banco de dados, consultas SQL, relatorios em Excel e Power BI e apoio a operacao por meio de automacoes e leitura de indicadores.',
  'Tambem realiza trabalhos como freelancer de programacao, entregando projetos sob demanda com foco em organizacao, estabilidade e resultado funcional.',
];

export const coreAreas = [
  'Desenvolvimento web',
  'Automacao',
  'APIs',
  'Banco de dados',
  'Integracoes',
  'Manutencao de sistemas',
];

export const workExperience = [
  {
    id: 'instituto-azimuth',
    period: 'Instituto Azimuth',
    title: 'Estagio em desenvolvimento',
    text: 'Atuacao em desenvolvimento com criacao de modulos, manutencao de sistemas legados em PHP, desenvolvimento de APIs, scripts SQL, processos de ETL e integracoes com sistemas externos.',
  },
  {
    id: 'assistente-ti',
    period: 'Assistente de TI',
    title: 'Banco de dados, relatorios e automacao de processos',
    text: 'Atuacao com ERP, consultas SQL, controle e leitura de dados, elaboracao de relatorios em Excel e Power BI e automacoes voltadas ao suporte da rotina operacional e acompanhamento de indicadores.',
  },
  {
    id: 'freelancer-dev',
    period: 'Freelancer',
    title: 'Projetos de programacao e solucoes sob demanda',
    text: 'Desenvolvimento de projetos web, APIs, automacoes e ajustes em sistemas com foco em atender demandas reais de produto, operacao e negocio com clareza e objetividade.',
  },
  {
    id: 'backend-structure',
    period: 'Base tecnica',
    title: 'Desenvolvimento com foco em sistemas e integracoes',
    text: 'Base tecnica em logica de negocio, APIs, banco de dados, integracoes e evolucao de sistemas, com foco em estabilidade, clareza estrutural e valor pratico.',
  },
];

export const stackGroups = [
  {
    title: 'Front-end',
    note: 'Interfaces com leitura forte, responsividade e identidade visual consistente.',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'],
  },
  {
    title: 'Back-end',
    note: 'APIs, regras de negocio, autenticacao, modulos internos e sustentacao de operacao.',
    items: ['Node.js', 'PHP', 'Laravel', 'REST APIs', 'SQL'],
  },
  {
    title: 'Automacao & Dados',
    note: 'Processos repetitivos, ETL, integracoes e fluxos para ganhar previsibilidade.',
    items: ['Python', 'ETL', 'Integracoes', 'Automacao', 'IA aplicada'],
  },
];

export const projects = [
  {
    id: 'ecommerce-platform',
    number: '01',
    title: 'Plataforma E-commerce',
    category: 'Web',
    year: '2026',
    role: 'Full stack com checkout e painel administrativo',
    summary:
      'Desenvolvimento de uma plataforma de e-commerce com catalogo, autenticacao, painel administrativo e fluxo de checkout integrado.',
    problem:
      'A operacao demandava a centralizacao do catalogo, da gestao de produtos e da jornada de compra em um fluxo unico e consistente.',
    result:
      'Foi estruturada uma base full stack com navegacao de compra, autenticacao e organizacao administrativa da operacao.',
    impact:
      'A solucao consolida a operacao comercial em uma unica estrutura, favorecendo manutencao, escalabilidade e clareza de processo.',
    status: 'Estrutura validada',
    scope: 'Catalogo, autenticacao, checkout e area administrativa',
    verification: [
      'Fluxo principal de compra definido de ponta a ponta',
      'Separacao entre interface, API e camada de dados',
      'Estrutura pronta para integracao com pagamento real',
    ],
    stack: ['Vue.js', 'Node.js', 'MySQL', 'JWT', 'Express', 'Mercado Pago'],
    mock: {
      eyebrow: 'checkout + admin',
      title: 'commerce-suite',
      accent: 'commerce',
      metrics: ['Catalogo', 'Auth', 'Pagamento'],
      panels: [
        { label: 'Vitrine', value: '12 colecoes' },
        { label: 'Pedidos', value: 'tempo real' },
        { label: 'Painel', value: 'estoque + upload' },
      ],
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/eliasdevmind/e-comerce.git',
        kind: 'repo',
      },
    ],
    badge: 'Produto web',
  },
  {
    id: 'pc-rik-mory',
    number: '02',
    title: 'PC-RIK---MORY',
    category: 'Automacao',
    year: '2025',
    role: 'Aplicacao desktop com integracao de API',
    summary:
      'Desenvolvimento de aplicacao desktop em PySide6 com listagem paginada, tela de detalhes e consumo estruturado de API externa.',
    problem:
      'Havia a necessidade de oferecer uma experiencia local fluida para consulta de dados externos, sem comprometer a navegacao.',
    result:
      'Foi entregue uma interface desktop com carregamento estruturado e separacao clara entre listagem e detalhamento.',
    impact:
      'O resultado e uma aplicacao mais estavel para uso recorrente, com melhor experiencia de consulta e leitura de informacoes.',
    status: 'Interface validada',
    scope: 'Interface desktop, consumo de API e fluxo de navegacao',
    verification: [
      'Listagem e detalhamento separados em telas bem definidas',
      'Interface responsiva no contexto desktop',
      'Consumo de API tratado de forma organizada',
    ],
    stack: ['Python', 'PySide6', 'API REST', 'Requests', 'Threading', 'Qt'],
    mock: {
      eyebrow: 'desktop app',
      title: 'api-browser',
      accent: 'desktop',
      metrics: ['Lista', 'Detalhe', 'Threads'],
      panels: [
        { label: 'Grid', value: 'paginado' },
        { label: 'Painel', value: 'rich detail' },
        { label: 'Carga', value: 'nao bloqueante' },
      ],
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/eliasdevmind/PC-RIK---MORY.git',
        kind: 'repo',
      },
    ],
    badge: 'Software desktop',
  },
  {
    id: 'internal-automation',
    number: '03',
    title: 'Rotinas Internas e Automacao',
    category: 'Sistemas',
    year: '2026',
    role: 'Automacao operacional com integracao de dados',
    summary:
      'Desenvolvimento de rotinas para reduzir tarefas manuais, integrar dados e ampliar a previsibilidade de operacoes internas.',
    problem:
      'A operacao dependia de execucao manual recorrente, com retrabalho e baixa previsibilidade entre as etapas do processo.',
    result:
      'Foram estruturadas automacoes e rotinas tecnicas para organizar fluxos, padronizar dados e reduzir a dependencia de execucao manual.',
    impact:
      'O principal ganho esta na consistencia operacional, com menos repeticao manual e maior controle sobre os processos.',
    status: 'Processo validado',
    scope: 'Automacao de rotinas, integracoes e tratamento de dados',
    verification: [
      'Fluxos repetitivos convertidos em rotina tecnica',
      'Integracoes desenhadas para reduzir retrabalho',
      'Estrutura voltada a previsibilidade e controle operacional',
    ],
    stack: ['Python', 'SQL', 'ETL', 'Integracoes', 'APIs', 'Automacao'],
    mock: {
      eyebrow: 'ops engine',
      title: 'internal-flow',
      accent: 'systems',
      metrics: ['ETL', 'Integracoes', 'Alertas'],
      panels: [
        { label: 'Filas', value: 'job orchestration' },
        { label: 'Dados', value: 'normalizacao' },
        { label: 'Saida', value: 'controle operacional' },
      ],
    },
    links: [],
    badge: 'Operacao e dados',
  },
];

export const differentials = [
  {
    index: '01',
    title: 'Manutencao e evolucao de sistemas',
    text: 'Leitura de base existente, ajuste de modulos, correcoes pontuais e melhoria progressiva sem perder estabilidade.',
  },
  {
    index: '02',
    title: 'APIs, SQL e integracoes',
    text: 'Construcao e manutencao de regras de negocio, consultas, integracoes entre sistemas e estrutura de dados confiavel.',
  },
  {
    index: '03',
    title: 'Automacao com disciplina operacional',
    text: 'Automacoes para reduzir repeticao, organizar fluxo de trabalho e ampliar produtividade com criterio tecnico.',
  },
];

export const stackItems = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'PHP',
  'Laravel',
  'APIs',
  'Automacao',
];
