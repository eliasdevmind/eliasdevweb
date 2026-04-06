export const categories = ['Todos', 'Web', 'Automacao', 'Sistemas'];

export const heroMetrics = [
  { label: 'Foco', value: 'Web, automacao e sistemas' },
  { label: 'Base', value: 'React, Node.js, Python, SQL, PHP' },
  { label: 'Direcao', value: 'Clareza, disciplina e entrega' },
];

export const aboutPoints = [
  'Atuacao em desenvolvimento web, APIs, automacao e manutencao de sistemas com foco em estrutura limpa e uso real.',
  'Experiencia com integracoes, banco de dados, rotinas operacionais e uso de IA para acelerar produtividade sem perder controle tecnico.',
  'Perfil orientado a organizacao, evolucao continua e solucao objetiva de problemas para produto, operacao e negocio.',
];

export const coreAreas = [
  'Desenvolvimento web',
  'Automacao',
  'APIs',
  'Banco de dados',
  'Integracoes',
  'IA para produtividade',
];

export const workExperience = [
  {
    id: 'web-solutions',
    period: 'Projetos web',
    title: 'Interfaces, modulos e fluxos de produto',
    text: 'Desenvolvimento de interfaces, areas administrativas, autenticacao, formularios e jornadas com foco em clareza e uso real.',
  },
  {
    id: 'systems-maintenance',
    period: 'Sustentacao',
    title: 'Manutencao e evolucao de sistemas',
    text: 'Leitura de base existente, correcoes pontuais, ajustes em regras de negocio e melhoria progressiva sem perder estabilidade.',
  },
  {
    id: 'automation-data',
    period: 'Operacao',
    title: 'Automacao, dados e integracoes',
    text: 'Rotinas para reduzir tarefas manuais, integrar fontes de dados e dar mais previsibilidade a processos internos.',
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
      'Projeto de e-commerce com catalogo, autenticacao, painel administrativo e fluxo de checkout integrado.',
    problem:
      'A operacao precisava reunir catalogo, gestao de produtos e jornada de compra em um fluxo unico e consistente.',
    result:
      'Foi estruturada uma base full stack com navegacao de compra, autenticacao e organizacao administrativa do produto.',
    impact:
      'O projeto consolida a operacao comercial em uma unica estrutura, facilitando manutencao, escala e clareza do fluxo.',
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
      'Aplicacao desktop em PySide6 com listagem paginada, tela de detalhes e consumo organizado de API externa.',
    problem:
      'O objetivo era construir uma experiencia local fluida para consulta de dados externos, sem travar a navegacao.',
    result:
      'Foi entregue uma interface desktop clara, com carregamento estruturado e separacao entre listagem e detalhamento.',
    impact:
      'O resultado e uma aplicacao mais estavel para uso recorrente, com leitura simples e melhor experiencia de consulta.',
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
      'Conjunto de rotinas para reduzir tarefas manuais, integrar dados e dar mais previsibilidade a operacoes internas.',
    problem:
      'A operacao dependia de execucao manual recorrente, com retrabalho e baixa previsibilidade entre etapas.',
    result:
      'Foram estruturadas automacoes e rotinas tecnicas para organizar fluxos, padronizar dados e reduzir dependencia manual.',
    impact:
      'O ganho principal esta na consistencia operacional, com menos repeticao manual e mais controle sobre os processos.',
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
