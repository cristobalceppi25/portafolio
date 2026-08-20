import { useEffect, useState } from "react";

export function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={scrolled ? "header headerScrolled" : "header"}>
      <div className="headerSection">
        <a href="/" className="headerLogo">Cristóbal Ceppi</a>
        <nav className={`headerMenu ${menuOpen ? "menuOpen" : ""}`}>

          <a href="#aboutMe" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experiencia
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Habilidades
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  )
}
