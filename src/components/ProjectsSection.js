import { useEffect, useState } from 'react';

function ProjectsSection({
  categories,
  activeCategory,
  onCategoryChange,
  stackFilters,
  activeStack,
  onStackChange,
  filteredProjects,
  activeProject,
  onProjectChange,
  onPreviewMove,
  onPreviewLeave,
  previewPosition,
}) {
  const [activeDetailTab, setActiveDetailTab] = useState('overview');

  useEffect(() => {
    setActiveDetailTab('overview');
  }, [activeProject?.id]);

  if (!activeProject) {
    return null;
  }

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projetos</p>
        <h2>Projetos apresentados com contexto, solucao aplicada e resultado de forma objetiva.</h2>
        <p>Selecione um projeto para entender rapidamente o desafio, a estrutura da entrega e o valor gerado.</p>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Filtrar projetos">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              className={`filter-pill${isActive ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="filter-bar filter-bar-secondary" role="tablist" aria-label="Filtrar por stack">
        {stackFilters.map((stack) => {
          const isActive = stack === activeStack;

          return (
            <button
              key={stack}
              className={`filter-pill filter-pill-stack${isActive ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onStackChange(stack)}
            >
              {stack}
            </button>
          );
        })}
      </div>

      <div className="projects-layout">
        <article
          className="surface-card project-preview"
          onMouseMove={onPreviewMove}
          onMouseLeave={onPreviewLeave}
          style={{
            '--cursor-x': previewPosition.x,
            '--cursor-y': previewPosition.y,
          }}
        >
          <div key={activeProject.id} className="project-preview-stage">
            <div className="preview-topline">
              <span>{activeProject.badge}</span>
              <span>{activeProject.year}</span>
            </div>

            <h3>{activeProject.title}</h3>
            <p className="project-preview-role">{activeProject.role}</p>

            <div className="project-status-row">
              <span className="project-status-pill">{activeProject.status}</span>
              <span className="project-scope">{activeProject.scope}</span>
            </div>

            <div className="tab-bar project-detail-tabs" role="tablist" aria-label="Detalhes do projeto">
              <button
                className={`tab-pill${activeDetailTab === 'overview' ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeDetailTab === 'overview'}
                onClick={() => setActiveDetailTab('overview')}
              >
                Visao geral
              </button>
              <button
                className={`tab-pill${activeDetailTab === 'execution' ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeDetailTab === 'execution'}
                onClick={() => setActiveDetailTab('execution')}
              >
                Execucao
              </button>
              <button
                className={`tab-pill${activeDetailTab === 'validation' ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeDetailTab === 'validation'}
                onClick={() => setActiveDetailTab('validation')}
              >
                Validacao
              </button>
            </div>

            {activeDetailTab === 'overview' ? (
              <div className="project-detail-panel">
                <p className="preview-text">{activeProject.summary}</p>
                <div className={`project-preview-visual is-${activeProject.mock.accent}`}>
                  <div className="project-preview-visual-top">
                    <span>Visao do projeto</span>
                    <span>{activeProject.mock.title}</span>
                  </div>
                  <div className="project-preview-metrics">
                    {activeProject.mock.metrics.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-preview-visual-grid">
                    {activeProject.mock.panels.map((panel) => (
                      <div className="project-preview-panel" key={panel.label}>
                        <span>{panel.label}</span>
                        <strong>{panel.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {activeDetailTab === 'execution' ? (
              <div className="project-detail-panel">
                <div className="project-facts-grid">
                  <div className="project-preview-block project-fact-card">
                    <span className="project-block-label">O que precisava ser resolvido</span>
                    <p>{activeProject.problem}</p>
                  </div>

                  <div className="project-preview-block project-fact-card">
                    <span className="project-block-label">O que foi entregue</span>
                    <p>{activeProject.result}</p>
                  </div>

                  <div className="project-preview-block project-fact-card project-fact-card-wide">
                    <span className="project-block-label">Resultado na pratica</span>
                    <p>{activeProject.impact}</p>
                  </div>
                </div>
              </div>
            ) : null}

            {activeDetailTab === 'validation' ? (
              <div className="project-detail-panel">
                <div className="project-preview-block project-verification-block">
                  <span className="project-block-label">Verificacao do case</span>
                  <ul className="project-verification-list">
                    {activeProject.verification.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <ul className="stack-cloud" aria-label={`Stack de ${activeProject.title}`}>
                  {activeProject.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {activeProject.links.length > 0 ? (
                  <div className="project-links">
                    {activeProject.links.map((link) => (
                      <a key={link.label} className="project-link" href={link.href} target="_blank" rel="noreferrer">
                        <span className="project-link-icon" aria-hidden="true">
                          {link.kind === 'live' ? '↗' : '↗'}
                        </span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </article>

        {filteredProjects.length > 0 ? (
          <div className="project-cards">
            {filteredProjects.map((project, index) => {
              const isActive = project.id === activeProject.id;

              return (
                <button
                  key={project.id}
                  className={`surface-card project-card${isActive ? ' is-active' : ''}`}
                  type="button"
                  style={{ '--stagger-order': index }}
                  onMouseEnter={() => onProjectChange(project)}
                  onFocus={() => onProjectChange(project)}
                  onClick={() => onProjectChange(project)}
                >
                  <div className="project-card-topline">
                    <span className="project-number">{project.number}</span>
                    <span className="project-badge">{project.badge}</span>
                  </div>
                  <strong>{project.title}</strong>
                  <p className="project-card-summary">{project.summary}</p>
                  <ul className="project-card-stack" aria-label={`Principais stacks de ${project.title}`}>
                    {project.stack.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-card-footer">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="surface-card project-empty-state">
            <span className="project-block-label">Sem resultados</span>
            <p>Nenhum projeto corresponde a esse filtro no momento. Tente outra stack ou volte para Todas.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
