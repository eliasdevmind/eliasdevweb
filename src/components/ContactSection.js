function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contato</p>
        <h2>Projetos, melhorias de produto e solucoes web com mais identidade.</h2>
        <p className="contact-text">
          Se voce procura alguem para desenvolver, ajustar, integrar ou
          automatizar com visual forte e execucao organizada, este portfolio foi
          feito para abrir essa conversa.
        </p>
      </div>

      <div className="contact-grid">
        <a
          className="surface-card contact-card"
          href="https://github.com/eliasdevmind"
          target="_blank"
          rel="noreferrer"
        >
          <span className="panel-label">GitHub</span>
          <strong>github.com/eliasdevmind</strong>
        </a>

        <a
          className="surface-card contact-card"
          href="https://www.linkedin.com/in/eliasdevmind"
          target="_blank"
          rel="noreferrer"
        >
          <span className="panel-label">LinkedIn</span>
          <strong>linkedin.com/in/eliasdevmind</strong>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
