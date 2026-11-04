import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data/link";
import "./Header.css";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header>
      <div className="aviso">
        Mande seu arquivo pelo WhatsApp e retire na loja · Duas unidades em Guarapuava
      </div>
      <div className="barra container">
        <button
          className="menu-botao"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <nav className={menuAberto ? "aberto" : ""}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={() => setMenuAberto(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <span className="logo">Copyloc</span>

        <a
          className="btn-whats"
          href="https://wa.me/5542900000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale no WhatsApp
        </a>
      </div>
    </header>
  );
}