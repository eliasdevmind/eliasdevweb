function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Full stack developer</p>
        <h1>Full stack para produtos, sistemas internos e automacao.</h1>
        <p className="hero-text">
          Elias Araujo desenvolve produtos digitais, sistemas internos e
          automacoes com foco em clareza, estabilidade e entrega bem resolvida.
        </p>

        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            Ver projetos
          </a>
          <a className="secondary-link" href="#contact">
            Falar sobre projeto
          </a>
        </div>
      </div>

      <div className="hero-console">
        <article className="console-panel hero-aside">
          <span className="panel-label">Overview</span>
          <p className="hero-aside-intro">
            Desenvolvimento com PHP, Node.js, React, Angular e Python para
            demandas que pedem boa execucao, estrutura confiavel e experiencia
            de uso consistente.
          </p>

          <div className="hero-aside-rows">
            <div className="hero-aside-row">
              <span>Entregas</span>
              <strong>Produtos digitais, sistemas internos e automacoes</strong>
            </div>
            <div className="hero-aside-row">
              <span>Base tecnica</span>
              <strong>Interfaces, APIs, regras de negocio e integracoes</strong>
            </div>
            <div className="hero-aside-row">
              <span>Direcao</span>
              <strong>Clareza visual, estabilidade e foco em uso real</strong>
            </div>
          </div>

          <div className="hero-stackline" aria-label="Tecnologias principais">
            <span>PHP</span>
            <span>Node.js</span>
            <span>React</span>
            <span>Angular</span>
            <span>Python</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HeroSection;
