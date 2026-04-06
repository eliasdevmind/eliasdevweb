function StackSection({ stackGroups }) {
  return (
    <section className="stack-section" id="stack">
      <div className="section-heading">
        <p className="eyebrow">Stack</p>
        <h2>Tecnologia aplicada com leitura clara e estrutura forte.</h2>
      </div>

      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article className="surface-card stack-card" key={group.title}>
            <span className="panel-label">{group.title}</span>
            <p>{group.note}</p>
            <div className="stack-badges">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StackSection;
