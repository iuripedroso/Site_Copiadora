import type { Produto } from "../types/Produto";
import { nomesCategorias } from "../types/Produto";
import "./ProductCard.css";

interface ProductCardProps {
  produto: Produto;
}

function formatarPreco(preco: number | null): string {
  if (preco === null) return "Sob consulta";
  return `A partir de R$ ${preco.toFixed(2).replace(".", ",")}`;
}

export default function ProductCard({ produto }: ProductCardProps) {
  const mensagem = encodeURIComponent(`Olá! Gostaria de pedir: ${produto.nome}`);

  return (
    <article className="card-produto">
      <div className="card-foto">
        {produto.foto ? (
          <img src={produto.foto} alt={produto.nome} />
        ) : (
          <span>Foto do produto</span>
        )}
      </div>
      <span className="card-categoria">{nomesCategorias[produto.categoria]}</span>
      <h3>{produto.nome}</h3>
      <p className="card-descricao">{produto.descricao}</p>
      <p className="card-preco">{formatarPreco(produto.preco)}</p>
      <a
        className="card-link"
        href={`https://wa.me/5542900000000?text=${mensagem}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedir pelo WhatsApp
      </a>
    </article>
  );
}