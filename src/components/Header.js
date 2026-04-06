function Header() {
  return (
    <header className="topbar">
      <a className="brandmark" href="#home">
        Elias Araujo
      </a>

      <nav className="topnav" aria-label="Navegacao principal">
        <a href="#projects">Projetos</a>
        <a href="#systems">Expertise</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className="status-chip">
        <span className="status-led" />
        <span>Disponivel para novos projetos</span>
      </div>
    </header>
  );
}

export default Header;
