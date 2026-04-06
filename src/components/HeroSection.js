function HeroSection({ heroMetrics }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Desenvolvedor / TI / Automacao / Solucoes Web</p>
        <h1>Elias Araujo</h1>
        <p className="hero-role">
          Construo interfaces, sistemas e automacoes com visual forte, estrutura
          limpa e foco em resultado real.
        </p>
        <p className="hero-text">
          Portfólio com identidade dark, leitura premium e direcao inspirada em
          terminal, estrategia e execucao disciplinada.
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
            <span className="panel-label">Mindset</span>
            <ul>
              <li>Execucao orientada a produto</li>
              <li>Organizacao, disciplina e clareza</li>
              <li>Automacao para ganhar escala</li>
            </ul>
          </div>
        </div>

        <div className="hero-terminal-card">
          <span className="panel-label">Terminal feed</span>
          <div className="terminal-lines" aria-label="Resumo tecnico">
            <span>{'>'} stack = [JavaScript, TypeScript, React, Node.js, Python, SQL]</span>
            <span>{'>'} foco = interfaces, APIs, automacao, integracoes</span>
            <span>{'>'} estrategia = clareza + consistencia + resultado</span>
            <span>{'>'} status = build(produto).ship()</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
