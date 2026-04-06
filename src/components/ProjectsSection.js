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
  function renderLinkIcon(kind) {
    if (kind === 'repo') {
      return (
        <svg
          aria-hidden="true"
          className="project-link-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.477 2 2 6.589 2 12.252c0 4.53 2.865 8.372 6.839 9.728.5.094.682-.22.682-.49 0-.24-.009-.876-.014-1.719-2.782.617-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.636.069-.624.069-.624 1.004.072 1.532 1.06 1.532 1.06.892 1.566 2.341 1.114 2.91.852.091-.662.349-1.114.635-1.37-2.221-.258-4.555-1.14-4.555-5.073 0-1.12.39-2.036 1.03-2.754-.103-.259-.447-1.3.098-2.71 0 0 .84-.276 2.75 1.052A9.36 9.36 0 0 1 12 6.82c.85.004 1.705.117 2.504.343 1.909-1.328 2.747-1.052 2.747-1.052.547 1.41.203 2.451.1 2.71.64.718 1.028 1.634 1.028 2.754 0 3.943-2.338 4.812-4.566 5.065.359.318.678.946.678 1.907 0 1.377-.012 2.487-.012 2.826 0 .272.18.588.688.488C19.138 20.62 22 16.78 22 12.252 22 6.59 17.523 2 12 2Z" />
        </svg>
      );
    }

    return (
      <svg
        aria-hidden="true"
        className="project-link-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 5h5v5" />
        <path d="M10 14 19 5" />
        <path d="M19 14v4a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
      </svg>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Project archive</p>
        <h2>Projetos selecionados.</h2>
        <p className="section-intro">
          Trabalhos com foco em estrutura, clareza de leitura e aplicacao real.
        </p>
      </div>

      <div className="projects-layout">
        <div className="projects-shell">
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

          <div className="project-list">
            {filteredProjects.map((project) => {
              const isActive = project.id === activeProject.id;

              return (
                <button
                  key={project.id}
                  className={`project-row${isActive ? ' is-active' : ''}`}
                  type="button"
                  onMouseEnter={() => onProjectChange(project)}
                  onFocus={() => onProjectChange(project)}
                >
                  <span className="project-number">{project.number}</span>
                  <span className="project-main">
                    <strong>{project.title}</strong>
                    <span>{project.role}</span>
                  </span>
                  <span className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <article
          className={`project-preview preview-${activeProject.theme}`}
          onMouseMove={onPreviewMove}
          onMouseLeave={onPreviewLeave}
          style={{
            '--cursor-x': previewPosition.x,
            '--cursor-y': previewPosition.y,
          }}
        >
          <div className="preview-topline">
            <span>{activeProject.category}</span>
            <span>{activeProject.year}</span>
          </div>

          <h3>{activeProject.title}</h3>
          <p className="preview-text">{activeProject.summary}</p>
          <p className="preview-outcome">{activeProject.outcome}</p>

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
                  {renderLinkIcon(link.kind)}
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}

          <div className="preview-board" aria-hidden="true">
            <span className="board-grid" />
            <span className="board-track board-track-a" />
            <span className="board-track board-track-b" />
            <span className="board-node board-node-a" />
            <span className="board-node board-node-b" />
            <span className="board-signal" />
          </div>

          <ul className="stack-cloud" aria-label={`Stack de ${activeProject.title}`}>
            {activeProject.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSection;
