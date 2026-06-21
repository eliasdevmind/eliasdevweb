export const categories = ['Todos', 'Web', 'Automação', 'Sistemas'];

export const heroMetrics = [
  { label: 'Foco', value: 'Web, automação e sistemas' },
  { label: 'Base', value: 'React, Node.js, Python, SQL, PHP' },
  { label: 'Direção', value: 'Clareza, disciplina e entrega' },
];

export const aboutPoints = [
  'Profissional com atuação voltada a desenvolvimento web, manutenção de sistemas e construção de soluções com foco em clareza técnica, usabilidade e evolução contínua.',
  'Possui experiência prática com PHP, Python, SQL, APIs, ETL e integrações, incluindo criação de módulos, manutenção de sistemas legados e automação de processos.',
  'Na atuação como assistente de TI, desenvolveu rotina consistente em banco de dados, consultas SQL, relatórios em Excel e Power BI e apoio à operação por meio de automações e leitura de indicadores.',
  'Também realiza trabalhos como freelancer de programação, entregando projetos sob demanda com foco em organização, estabilidade e resultado funcional.',
];

export const coreAreas = [
  'Desenvolvimento web',
  'Automação',
  'APIs',
  'Banco de dados',
  'Integrações',
  'Manutenção de sistemas',
];

export const workExperience = [
  {
    id: 'instituto-azimuth',
    period: 'Instituto Azimuth',
    title: 'Estágio em desenvolvimento',
    text: 'Atuação em desenvolvimento com criação de módulos, manutenção de sistemas legados em PHP, desenvolvimento de APIs, scripts SQL, processos de ETL e integrações com sistemas externos.',
  },
  {
    id: 'assistente-ti',
    period: 'Assistente de TI',
    title: 'Banco de dados, relatórios e automação de processos',
    text: 'Atuação com ERP, consultas SQL, controle e leitura de dados, elaboração de relatórios em Excel e Power BI e automações voltadas ao suporte da rotina operacional e acompanhamento de indicadores.',
  },
  {
    id: 'freelancer-dev',
    period: 'Freelancer',
    title: 'Projetos de programação e soluções sob demanda',
    text: 'Desenvolvimento de projetos web, APIs, automações e ajustes em sistemas com foco em atender demandas reais de produto, operação e negócio com clareza e objetividade.',
  },
  {
    id: 'backend-structure',
    period: 'Base técnica',
    title: 'Desenvolvimento com foco em sistemas e integrações',
    text: 'Base técnica em lógica de negócio, APIs, banco de dados, integrações e evolução de sistemas, com foco em estabilidade, clareza estrutural e valor prático.',
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
    note: 'APIs, regras de negócio, autenticação, módulos internos e sustentação de operação.',
    items: ['Node.js', 'PHP', 'Laravel', 'REST APIs', 'SQL'],
  },
  {
    title: 'Automação & Dados',
    note: 'Processos repetitivos, ETL, integrações e fluxos para ganhar previsibilidade.',
    items: ['Python', 'ETL', 'Integrações', 'Automação', 'IA aplicada'],
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
      'Desenvolvimento de uma plataforma de e-commerce com catálogo, autenticação, painel administrativo e fluxo de checkout integrado.',
    problem:
      'A operação demandava a centralização do catálogo, da gestão de produtos e da jornada de compra em um fluxo único e consistente.',
    result:
      'Foi estruturada uma base full stack com navegação de compra, autenticação e organização administrativa da operação.',
    impact:
      'A solução consolida a operação comercial em uma única estrutura, favorecendo manutenção, escalabilidade e clareza de processo.',
    status: 'Estrutura validada',
    scope: 'Catálogo, autenticação, checkout e área administrativa',
    verification: [
      'Fluxo principal de compra definido de ponta a ponta',
      'Separação entre interface, API e camada de dados',
      'Estrutura pronta para integração com pagamento real',
    ],
    stack: ['Vue.js', 'Node.js', 'MySQL', 'JWT', 'Express', 'Mercado Pago'],
    mock: {
      eyebrow: 'checkout + admin',
      title: 'commerce-suite',
      accent: 'commerce',
      metrics: ['Catálogo', 'Auth', 'Pagamento'],
      panels: [
        { label: 'Vitrine', value: '12 coleções' },
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
    category: 'Automação',
    year: '2025',
    role: 'Aplicação desktop com integração de API',
    summary:
      'Desenvolvimento de aplicação desktop em PySide6 com listagem paginada, tela de detalhes e consumo estruturado de API externa.',
    problem:
      'Havia a necessidade de oferecer uma experiência local fluida para consulta de dados externos, sem comprometer a navegação.',
    result:
      'Foi entregue uma interface desktop com carregamento estruturado e separação clara entre listagem e detalhamento.',
    impact:
      'O resultado é uma aplicação mais estável para uso recorrente, com melhor experiência de consulta e leitura de informações.',
    status: 'Interface validada',
    scope: 'Interface desktop, consumo de API e fluxo de navegação',
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
        { label: 'Carga', value: 'não bloqueante' },
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
    title: 'Rotinas Internas e Automação',
    category: 'Sistemas',
    year: '2026',
    role: 'Automação operacional com integração de dados',
    summary:
      'Desenvolvimento de rotinas para reduzir tarefas manuais, integrar dados e ampliar a previsibilidade de operações internas.',
    problem:
      'A operação dependia de execução manual recorrente, com retrabalho e baixa previsibilidade entre as etapas do processo.',
    result:
      'Foram estruturadas automações e rotinas técnicas para organizar fluxos, padronizar dados e reduzir a dependência de execução manual.',
    impact:
      'O principal ganho está na consistência operacional, com menos repetição manual e maior controle sobre os processos.',
    status: 'Processo validado',
    scope: 'Automação de rotinas, integrações e tratamento de dados',
    verification: [
      'Fluxos repetitivos convertidos em rotina técnica',
      'Integrações desenhadas para reduzir retrabalho',
      'Estrutura voltada à previsibilidade e controle operacional',
    ],
    stack: ['Python', 'SQL', 'ETL', 'Integrações', 'APIs', 'Automação'],
    mock: {
      eyebrow: 'ops engine',
      title: 'internal-flow',
      accent: 'systems',
      metrics: ['ETL', 'Integrações', 'Alertas'],
      panels: [
        { label: 'Filas', value: 'job orchestration' },
        { label: 'Dados', value: 'normalização' },
        { label: 'Saída', value: 'controle operacional' },
      ],
    },
    links: [],
    badge: 'Operação e dados',
  },
];

export const differentials = [
  {
    index: '01',
    title: 'Manutenção e evolução de sistemas',
    text: 'Leitura de base existente, ajuste de módulos, correções pontuais e melhoria progressiva sem perder estabilidade.',
  },
  {
    index: '02',
    title: 'APIs, SQL e integrações',
    text: 'Construção e manutenção de regras de negócio, consultas, integrações entre sistemas e estrutura de dados confiável.',
  },
  {
    index: '03',
    title: 'Automação com disciplina operacional',
    text: 'Automações para reduzir repetição, organizar fluxo de trabalho e ampliar produtividade com critério técnico.',
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
  'Automação',
];
