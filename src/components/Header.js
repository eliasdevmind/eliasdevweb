function Header() {
  return (
    <header className="topbar">
      <a className="brandmark" href="#home">
        <span className="brandmark-accent">EA</span>
        <span className="brandmark-name">Elias Araujo</span>
      </a>

      <nav className="topnav" aria-label="Navegacao principal">
        <a href="#about">Sobre</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projetos</a>
        <a href="#experience">Diferenciais</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className="status-chip">
        <span className="status-led" />
        <span>Disponivel para projetos</span>
      </div>
    </header>
  );
}

export default Header;
