import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { produtos } from "../data/produtos";
import { nomesCategorias } from "../types/Produto";
import type { Categoria } from "../types/Produto";
import "./Products.css";

type Filtro = Categoria | "todos";

const categorias = Object.keys(nomesCategorias) as Categoria[];

function normalizar(texto: string): string {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Products() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((p) => {
    const passaCategoria = filtro === "todos" || p.categoria === filtro;
    const passaBusca = normalizar(p.nome).includes(normalizar(busca));
    return passaCategoria && passaBusca;
  });

  return (
    <section className="pagina-produtos container">
      <div className="pagina-titulo">
        <span className="sobretitulo">Catálogo</span>
        <h1>Produtos e serviços</h1>
        <p>Confira o que oferecemos e peça pelo WhatsApp.</p>
      </div>

      <div className="barra-filtros">
        <div className="filtros">
          <button
            className={filtro === "todos" ? "ativo" : ""}
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>
          {categorias.map((c) => (
            <button
              key={c}
              className={filtro === c ? "ativo" : ""}
              onClick={() => setFiltro(c)}
            >
              {nomesCategorias[c]}
            </button>
          ))}
        </div>

        <input
          type="search"
          className="busca"
          placeholder="Buscar produto"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {produtosFiltrados.length > 0 ? (
        <div className="grade-produtos">
          {produtosFiltrados.map((p) => (
            <ProductCard key={p.id} produto={p} />
          ))}
        </div>
      ) : (
        <p className="sem-resultados">Nenhum produto encontrado.</p>
      )}
    </section>
  );
}