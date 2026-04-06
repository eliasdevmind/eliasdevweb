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

          <div className="portrait-overlay-card">
            <span className="panel-label">Resumo profissional</span>
            <strong>Desenvolvimento com base em produto, dados e operacao.</strong>
            <p>
              Experiencia com PHP, Python, SQL, APIs, ETL, manutencao de sistemas
              e automacao de rotinas para ganhar previsibilidade e escala.
            </p>
          </div>
        </div>

        <div className="surface-card hero-proof-card">
          <span className="panel-label">Foco de atuacao</span>
          <div className="hero-proof-list" aria-label="Resumo tecnico">
            <div>
              <span>Back-end e sistemas</span>
              <strong>Modulos, APIs, SQL, ETL e manutencao evolutiva</strong>
            </div>
            <div>
              <span>Projetos web</span>
              <strong>Interfaces, areas administrativas e fluxos de produto</strong>
            </div>
            <div>
              <span>Automacao</span>
              <strong>Integracoes e rotinas para reduzir trabalho manual</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
