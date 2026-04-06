function SystemsSection({ capabilities, stackItems }) {
  return (
    <section className="systems-section" id="systems">
      <div className="section-heading narrow">
        <p className="eyebrow">Full stack capabilities</p>
        <h2>Atuacao.</h2>
        <p className="section-intro">
          Desenvolvimento orientado a produto, operacao e ganhos reais no uso.
        </p>
      </div>

      <div className="systems-rail">
        <div className="systems-list">
          {capabilities.map((item) => (
            <article className="system-row" key={item.index}>
              <span className="system-index">{item.index}</span>
              <div className="system-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="systems-note">
          <span className="panel-label">Stack</span>
          <p>Base principal para produtos, sistemas internos, integracoes e automacoes.</p>
          <div className="hero-stackline">
            {stackItems.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default SystemsSection;
