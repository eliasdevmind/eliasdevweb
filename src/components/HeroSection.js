function HeroSection({ heroMetrics }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="hero-intro-line">
          <p className="eyebrow">Desenvolvimento web, sistemas, banco de dados e automacao</p>
          <span className="hero-intro-chip">Disponivel para projetos e oportunidades</span>
        </div>
        <h1>Desenvolvimento de solucoes web com clareza tecnica e foco em resultado.</h1>
        <p className="hero-role">
          Atuacao em desenvolvimento web, manutencao de sistemas, banco de dados,
          integracoes e automacao de processos.
        </p>
        <p className="hero-text">
          Portfolio profissional voltado a apresentar experiencia pratica,
          projetos desenvolvidos e a capacidade de transformar demandas reais em
          solucoes funcionais e bem estruturadas.
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
          <div className="hero-proof-list" aria-label="Resumo tecnico">
            <div>
              <span>Experiencia tecnica</span>
              <strong>Desenvolvimento de modulos, APIs, SQL, ETL e manutencao de sistemas</strong>
            </div>
            <div>
              <span>Areas de atuacao</span>
              <strong>Projetos web, automacao de processos e integracao entre sistemas</strong>
            </div>
            <div>
              <span>Direcao de trabalho</span>
              <strong>Organizacao tecnica, clareza estrutural e entrega funcional</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
