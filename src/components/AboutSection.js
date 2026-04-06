function AboutSection({ aboutPoints }) {
  return (
    <section className="about-section" id="about">
      <div className="section-heading narrow">
        <p className="eyebrow">Sobre mim</p>
        <h2>Desenvolvimento com estrategia, disciplina e uso real.</h2>
      </div>

      <div className="about-layout">
        <article className="surface-card about-card">
          {aboutPoints.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>

        <aside className="surface-card about-sidecard">
          <span className="panel-label">Core areas</span>
          <div className="about-keypoints">
            <span>Desenvolvimento web</span>
            <span>Automacao</span>
            <span>APIs</span>
            <span>Banco de dados</span>
            <span>Integracoes</span>
            <span>IA para produtividade</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutSection;
