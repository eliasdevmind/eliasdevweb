function ProjectsSection({
  categories,
  activeCategory,
  onCategoryChange,
  filteredProjects,
  activeProject,
  onProjectChange,
  onPreviewMove,
  onPreviewLeave,
  previewPosition,
}) {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projetos</p>
        <h2>Cases com leitura premium e foco no problema resolvido.</h2>
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
          <div className="preview-topline">
            <span>{activeProject.badge}</span>
            <span>{activeProject.year}</span>
          </div>

          <h3>{activeProject.title}</h3>
          <p className="preview-text">{activeProject.summary}</p>

          <div className="project-preview-block">
            <span className="project-block-label">Problema</span>
            <p>{activeProject.problem}</p>
          </div>

          <div className="project-preview-block">
            <span className="project-block-label">Resultado</span>
            <p>{activeProject.result}</p>
          </div>

          <ul className="stack-cloud" aria-label={`Stack de ${activeProject.title}`}>
            {activeProject.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {activeProject.links.length > 0 ? (
            <div className="project-links">
              {activeProject.links.map((link) => (
                <a
                  key={link.label}
                  className={`project-link${link.kind === 'live' ? ' is-live' : ''}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>

        <div className="project-cards">
          {filteredProjects.map((project) => {
            const isActive = project.id === activeProject.id;

            return (
              <button
                key={project.id}
                className={`surface-card project-card${isActive ? ' is-active' : ''}`}
                type="button"
                onMouseEnter={() => onProjectChange(project)}
                onFocus={() => onProjectChange(project)}
                onClick={() => onProjectChange(project)}
              >
                <div className="project-card-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-badge">{project.badge}</span>
                </div>
                <strong>{project.title}</strong>
                <span className="project-role">{project.role}</span>
                <p>{project.summary}</p>
                <div className="project-card-footer">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
