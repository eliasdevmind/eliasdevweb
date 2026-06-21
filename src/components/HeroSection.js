function HeroSection({ heroMetrics }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="hero-intro-line">
          <p className="eyebrow">Desenvolvimento web, sistemas, banco de dados e automação</p>
          <span className="hero-intro-chip">Disponível para projetos e oportunidades</span>
        </div>
        <h1>Desenvolvimento de soluções web com clareza técnica e foco em resultado.</h1>
        <p className="hero-role">
          Atuação em desenvolvimento web, manutenção de sistemas, banco de dados,
          integrações e automação de processos.
        </p>
        <p className="hero-text">
          Portfólio profissional voltado a apresentar experiência prática,
          projetos desenvolvidos e a capacidade de transformar demandas reais em
          soluções funcionais e bem estruturadas.
        </p>

        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            Ver projetos
          </a>
          <a className="secondary-link" href="#contact">
            Entrar em contato
          </a>
        </div>

        <div className="hero-metrics">
          {heroMetrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-portrait-shell">
          <div className="hero-portrait-frame">
            <span className="portrait-corner portrait-corner-tl" aria-hidden="true" />
            <span className="portrait-corner portrait-corner-tr" aria-hidden="true" />
            <span className="portrait-corner portrait-corner-bl" aria-hidden="true" />
            <span className="portrait-corner portrait-corner-br" aria-hidden="true" />
            <img
              className="hero-portrait"
              src="/profile-photo.png"
              alt="Foto de perfil de Elias Araujo"
            />
          </div>
        </div>

        <div className="surface-card hero-proof-card">
          <span className="panel-label">Resumo profissional</span>
          <div className="hero-proof-list" aria-label="Resumo técnico">
            <div>
              <span>Experiência técnica</span>
              <strong>Desenvolvimento de módulos, APIs, SQL, ETL e manutenção de sistemas</strong>
            </div>
            <div>
              <span>Áreas de atuação</span>
              <strong>Projetos web, automação de processos e integração entre sistemas</strong>
            </div>
            <div>
              <span>Direção de trabalho</span>
              <strong>Organização técnica, clareza estrutural e entrega funcional</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
