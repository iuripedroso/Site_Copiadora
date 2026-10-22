import ProductCard from "../components/ProductCard";
import { produtos } from "../data/produtos";
import "./Products.css";

export default function Products() {
  return (
    <section className="pagina-produtos container">
      <div className="pagina-titulo">
        <span className="sobretitulo">Catálogo</span>
        <h1>Produtos e serviços</h1>
        <p>Confira o que oferecemos e peça pelo WhatsApp.</p>
      </div>

      <div className="grade-produtos">
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </section>
  );
}