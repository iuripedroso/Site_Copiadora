import { Link } from "react-router-dom";
import { links } from "../data/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="rodape container">
                <div>
                    {/* <span className="rodape-logo">CopyLoc</span> */}
                    <p>Reprografia e serviços gráficos<br />em Guarapuava/PR</p>
                </div>

                <div>
                    <h4>Páginas</h4>
                    {links.map((l) => (
                        <Link key={l.to} to={l.to}>
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div>
                    <h4>Contato</h4>
                    <a href="tel:+554200000000">(42) 0000-0000</a>
                    <a href="https://wa.me/5542900000000" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                    <a href="mailto:contato@copyloc.com.br">contato@copyloc.com.br</a>
                    <a href="https://instagram.com/copyloc" target="_blank" rel="noopener noreferrer">
                        @copyloc
                    </a>
                </div>

                <div>
                    <h4>Horário</h4>
                    <p>Seg a sex: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    <span>© {new Date().getFullYear()} Copy Loc. Todos os direitos reservados.</span>
                    <span>Guarapuava · PR</span>
                </div>
            </div>
        </footer>
    );
}