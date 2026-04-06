import { useState } from 'react';

function AboutSection({ aboutPoints, coreAreas, workExperience }) {
  const [activeTab, setActiveTab] = useState('perfil');

  return (
    <section className="about-section" id="about">
      <div className="section-heading narrow">
        <p className="eyebrow">Sobre mim</p>
        <h2>Perfil profissional, experiencia e forma de atuacao apresentados de maneira clara e objetiva.</h2>
      </div>

      <div className="tab-bar about-tab-bar" role="tablist" aria-label="Informacoes sobre Elias">
        <button
          className={`tab-pill${activeTab === 'perfil' ? ' is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={activeTab === 'perfil'}
          onClick={() => setActiveTab('perfil')}
        >
          Perfil
        </button>
        <button
          className={`tab-pill${activeTab === 'experiencia' ? ' is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={activeTab === 'experiencia'}
          onClick={() => setActiveTab('experiencia')}
        >
          Experiencia
        </button>
        <button
          className={`tab-pill${activeTab === 'atuacao' ? ' is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={activeTab === 'atuacao'}
          onClick={() => setActiveTab('atuacao')}
        >
          Como trabalho
        </button>
      </div>

      <div className="about-layout">
        <article className="surface-card about-card">
          {activeTab === 'perfil' ? (
            aboutPoints.map((item) => <p key={item}>{item}</p>)
          ) : null}

          {activeTab === 'experiencia' ? (
            <div className="about-experience-list">
              {workExperience.map((item) => (
                <article className="about-experience-item" key={item.id}>
                  <span className="panel-label">{item.period}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === 'atuacao' ? (
            <div className="about-method-list">
              <div className="about-method-item">
                <span className="panel-label">Leitura do contexto</span>
                <p>Entendimento do sistema, da operacao e do problema antes de propor ajustes ou novas entregas.</p>
              </div>
              <div className="about-method-item">
                <span className="panel-label">Execucao objetiva</span>
                <p>Implementacao com foco em estrutura limpa, clareza de fluxo e impacto real no uso do sistema.</p>
              </div>
              <div className="about-method-item">
                <span className="panel-label">Evolucao continua</span>
                <p>Melhorias incrementais, manutencao disciplinada e automacao quando isso realmente reduz atrito operacional.</p>
              </div>
            </div>
          ) : null}
        </article>

        <aside className="surface-card about-sidecard">
          <span className="panel-label">Areas de atuacao</span>
          <div className="about-keypoints">
            {coreAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutSection;
