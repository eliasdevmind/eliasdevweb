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
    role: 'Front-end + Back-end + pagamentos',
    summary:
      'Estrutura de e-commerce com autenticacao, catalogo, painel administrativo, uploads e fluxo de pagamento.',
    problem:
      'Necessidade de centralizar jornada de compra, cadastro de produtos e operacao em um fluxo unico e confiavel.',
    result:
      'Case completo para demonstrar arquitetura full stack, integracao com pagamentos e organizacao de produto.',
    impact:
      'Organiza a operacao comercial em uma estrutura unica, com fluxo de compra, autenticacao e administracao integrados.',
    status: 'Estrutura validada',
    scope: 'Checkout, catalogo, autenticacao e painel',
    verification: [
      'Fluxo principal de compra mapeado',
      'Arquitetura separada entre front, API e dados',
      'Integracao de pagamento prevista no fluxo real',
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
    role: 'Desktop app + API integration',
    summary:
      'Aplicativo desktop com interface em PySide6, listagem paginada, detalhes ricos e carregamento de dados de API.',
    problem:
      'Criar uma experiencia local responsiva com consumo de dados externos e fluxo claro de navegacao.',
    result:
      'Demonstra dominio em Python, interface grafica e integracao assíncrona para aplicacoes desktop.',
    impact:
      'Entrega navegacao clara, leitura de dados externos e experiencia local consistente para uso continuo.',
    status: 'Interface validada',
    scope: 'Desktop UI, API publica e navegacao',
    verification: [
      'Listagem e detalhamento de registros separados',
      'Interface responsiva em ambiente desktop',
      'Consumo de API com carregamento organizado',
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
    role: 'Automacao operacional + dados',
    summary:
      'Fluxos para reduzir tarefas repetitivas, integrar dados e apoiar operacao com mais controle e velocidade.',
    problem:
      'Processos manuais, retrabalho e dependencia de execucao operacional constante.',
    result:
      'Automacoes e rotinas tecnicas que aumentam previsibilidade, organizacao e capacidade operacional.',
    impact:
      'Reduz dependencia de tarefas manuais e melhora consistencia em processos internos e tratamento de dados.',
    status: 'Processo validado',
    scope: 'Automacao, integracao e tratamento de dados',
    verification: [
      'Fluxos repetitivos transformados em rotina tecnica',
      'Integracoes desenhadas para reduzir retrabalho',
      'Foco em previsibilidade e controle operacional',
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
