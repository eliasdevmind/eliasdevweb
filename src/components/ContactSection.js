function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Contato</h2>
        <p className="contact-text">
          Projetos, melhorias de produto, sistemas internos e automacoes.
        </p>
      </div>

      <div className="contact-shell">
        <div className="contact-meta">
          <a
            className="contact-link"
            href="https://github.com/eliasdevmind"
            target="_blank"
            rel="noreferrer"
          >
            github.com/eliasdevmind
          </a>
          <a
            className="contact-link secondary"
            href="https://www.linkedin.com/in/eliasdevmind"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/eliasdevmind
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
