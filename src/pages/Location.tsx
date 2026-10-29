import StoreDetails from "../components/StoreDetails";
import { lojas } from "../data/loja";
import "./Location.css";

export default function Location() {
  return (
    <section className="pagina-localizacao container">
      <div className="pagina-titulo">
        <span className="sobretitulo">Localização</span>
        <h1>Nossas lojas</h1>
        <p>Duas unidades em Guarapuava para atender você.</p>
      </div>

      <div className="lista-lojas">
        {lojas.map((loja, i) => (
          <StoreDetails
            key={loja.id}
            loja={loja}
            numero={i + 1}
            invertido={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}