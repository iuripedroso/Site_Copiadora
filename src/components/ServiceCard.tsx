import { Link } from "react-router-dom";
import type { Servico } from "../types/Servico";
import "./ServiceCard.css";

interface ServiceCardProps {
  servico: Servico;
}

export default function ServiceCard({ servico }: ServiceCardProps) {
  return (
    <article className="card-servico">
      <div className="foto card-servico-foto">
        {servico.foto ? (
          <img src={servico.foto} alt={servico.titulo} />
        ) : (
          <span>Foto - {servico.titulo}</span>
        )}
      </div>
      <h3>{servico.titulo}</h3>
      <p>{servico.descricao}</p>
      <Link to="/produtos" className="link-sublinhado">
        Saiba mais
      </Link>
    </article>
  );
}