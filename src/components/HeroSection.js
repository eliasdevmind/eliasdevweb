import { useState } from 'react';

const PROFILE_PHOTO_PATH = '/profile-photo.png';

function HeroSection() {
  const [hasPhotoError, setHasPhotoError] = useState(false);

  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">TI &amp; Desenvolvedor</p>
        <h1>React no front, sistemas solidos no back e entrega com identidade.</h1>
        <p className="hero-text">
          Elias Araujo desenvolve experiencias web, sistemas internos e
          automacoes com visual marcante, clareza tecnica e foco no que precisa
          funcionar em producao.
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
        <article className="console-panel hero-photo-panel">
          <div className="hero-photo-header">
            <span className="panel-label">Visual identity</span>
            <span className="hero-photo-chip">Code. Build. Evolve.</span>
          </div>

          <div className="hero-photo-stage">
            <span className="hero-photo-glow" aria-hidden="true" />
            <span className="hero-photo-grid" aria-hidden="true" />

            {hasPhotoError ? (
              <div className="hero-photo-fallback" aria-label="Foto de Elias Araujo">
                <span>EA</span>
              </div>
            ) : (
              <img
                className="hero-photo"
                src={PROFILE_PHOTO_PATH}
                alt="Foto de Elias Araujo"
                onError={() => setHasPhotoError(true)}
              />
            )}
          </div>

          <div className="hero-photo-notes" aria-label="Resumo profissional">
            <span>Stack: React, Node.js, PHP, Python</span>
            <span>Foco: produto, performance e automacao</span>
            <span>Estilo: dark, contraste forte e acentos em verde</span>
          </div>
        </article>

        <article className="console-panel hero-aside">
          <span className="panel-label">Overview</span>
          <p className="hero-aside-intro">
            Desenvolvimento com PHP, Node.js, React, Angular e Python para
            produtos que pedem execucao limpa, estrutura confiavel e presenca
            visual mais forte.
          </p>

          <div className="hero-aside-rows">
            <div className="hero-aside-row">
              <span>Entregas</span>
              <strong>Portfolios, produtos web, sistemas internos e automacoes</strong>
            </div>
            <div className="hero-aside-row">
              <span>Base tecnica</span>
              <strong>React, APIs, regras de negocio, integracoes e dados</strong>
            </div>
            <div className="hero-aside-row">
              <span>Direcao</span>
              <strong>Paleta autoral, contraste forte e foco em uso real</strong>
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
