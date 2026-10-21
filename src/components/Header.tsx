import { NavLink } from "react-router-dom";
import "./Header.css";
import { links } from "../data/link.ts";


export default function Header() {
    return (
        <header>
            <div className="aviso">
                Mande seu arquivo pelo WhatsApp e retire na loja · Duas unidades em Guarapuava
            </div>
            <div className="barra container">
                <nav>
                    {links.map((l) => (
                    <NavLink key={l.to} to={l.to} end>
                        {l.label}
                    </NavLink>
                    ))}
                </nav>
                <span className="logo">CopyLoc</span>

                <a 
                className="btn-whats"
                href="https://wa.me/554299151033"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Fale no WhatsApp
                </a>

            </div>
        </header>
    );
}