function HeroSection({ heroMetrics }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="hero-intro-line">
          <p className="eyebrow">Desenvolvedor focado em sistemas, APIs e automacao</p>
          <span className="hero-intro-chip">Disponivel para freelas e oportunidades</span>
        </div>
        <h1>Construo solucoes web com clareza tecnica e foco em entrega.</h1>
        <p className="hero-role">
          Atuo com desenvolvimento web, manutencao de sistemas, banco de dados,
          integracoes e automacao de processos.
        </p>
        <p className="hero-text">
          Portfolio organizado para mostrar projetos, experiencia pratica e a
          forma como transformo necessidade operacional em solucao funcional.
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
          <span className="panel-label">Leitura rapida</span>
          <div className="hero-proof-list" aria-label="Resumo tecnico">
            <div>
              <span>Experiencia pratica</span>
              <strong>Modulos, APIs, SQL, ETL e manutencao de sistemas</strong>
            </div>
            <div>
              <span>Foco atual</span>
              <strong>Projetos web, automacao e integracao entre sistemas</strong>
            </div>
            <div>
              <span>Estilo de entrega</span>
              <strong>Clareza, organizacao tecnica e resultado funcional</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
