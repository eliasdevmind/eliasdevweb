export const categories = ['Todos', 'Full stack', 'Automacao'];

export const projects = [
  {
    id: 'erp-commerce',
    number: '01',
    title: 'E-commerce',
    category: 'Full stack',
    year: '2026',
    role: 'Vue.js + Node.js + MySQL',
    summary:
      'Projeto de e-commerce com frontend em Vue.js 3 e backend em Node.js, cobrindo autenticacao, catalogo, uploads e integracao de pagamento.',
    outcome:
      'Case incluido no portfolio para demonstrar estrutura completa de comercio digital com fluxo real de aplicacao.',
    stack: [
      'Vue.js 3',
      'Node.js',
      'MySQL',
      'JWT',
      'Mercado Pago SDK',
      'Express.js',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/eliasdevmind/e-comerce.git',
        kind: 'repo',
      },
    ],
    theme: 'crimson',
  },
  {
    id: 'pc-rik-mory',
    number: '02',
    title: 'PC-RIK---MORY',
    category: 'Automacao',
    year: '2025',
    role: 'Python + PySide6 + integracao com API',
    summary:
      'Aplicativo desktop para navegar personagens de Rick and Morty, com interface em PySide6, paginacao, detalhes individuais e consumo da API publica da serie.',
    outcome:
      'Mostra dominio em software desktop com Python, interface grafica responsiva e carregamento assincrono de dados e imagens.',
    stack: [
      'Python',
      'PySide6',
      'Requests',
      'Qt Signals/Slots',
      'Threading',
      'Rick and Morty API',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/eliasdevmind/PC-RIK---MORY.git',
        kind: 'repo',
      },
    ],
    theme: 'signal',
  },
];

export const capabilities = [
  {
    index: '01',
    title: 'Produtos e interfaces',
    text: 'Entrega full stack para interfaces mais claras, fluxos melhores e experiencias que ajudam o produto a comunicar valor.',
  },
  {
    index: '02',
    title: 'Sistemas e integracoes',
    text: 'Projetos full stack com PHP e Node.js para regras de negocio, APIs, autenticacao e integracoes que sustentam a operacao.',
  },
  {
    index: '03',
    title: 'Automacao e escala',
    text: 'Automacao full stack com Python para reduzir tarefas repetitivas, ganhar previsibilidade e ampliar capacidade operacional.',
  },
];

export const stackItems = [
  'React',
  'Angular',
  'PHP',
  'Node.js',
  'Python',
  'UX',
  'APIs',
  'Automacao',
  'Git',
];
