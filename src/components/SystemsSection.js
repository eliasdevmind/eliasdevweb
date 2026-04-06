function SystemsSection({ differentials, stackItems }) {
  return (
    <section className="systems-section" id="experience">
      <div className="section-heading narrow">
        <p className="eyebrow">Experiencia / Diferenciais</p>
        <h2>Base tecnica com disciplina operacional e evolucao continua.</h2>
      </div>

      <div className="experience-layout">
        <div className="experience-list">
          {differentials.map((item) => (
            <article className="surface-card system-card" key={item.index}>
              <span className="system-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <aside className="surface-card experience-sidecard">
          <span className="panel-label">Execution deck</span>
          <p>
            Atuacao voltada a manutencao de sistemas, criacao de modulos, APIs,
            SQL, ETL, integracoes e automacoes com leitura clara do contexto.
          </p>
          <div className="hero-stackline">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default SystemsSection;
