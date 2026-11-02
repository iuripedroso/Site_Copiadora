import type { Loja } from "../types/Loja";
import "./StoreCard.css";

interface StoreCardProps {
  loja: Loja;
}

export default function StoreCard({ loja }: StoreCardProps) {
  const linkRota = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loja.endereco)}`;

  return (
    <article className="card-loja">
      <div className="foto card-loja-foto">
        {loja.foto ? (
          <img src={loja.foto} alt={`Fachada da loja ${loja.nome}`} />
        ) : (
          <span>Foto da fachada - {loja.nome}</span>
        )}
      </div>
      <h3>{loja.nome}</h3>
      <p>{loja.endereco}</p>
      <a className="link-sublinhado" href={linkRota} target="_blank" rel="noopener noreferrer">
        Como chegar
      </a>
    </article>
  );
}