import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import StoreCard from "../components/StoreCard";
import { servicos } from "../data/servico";
import { lojas } from "../data/loja";
import "./Home.css";

export default function Home() {
  const numeros = [
    { valor: String(lojas.length), rotulo: "lojas na cidade" },
    { valor: "+00", rotulo: "anos de atendimento" },
    { valor: "P&B e cor", rotulo: "impressões" },
  ];

  return (
    <>
      <section className="destaque">
        <div className="destaque-conteudo container">
          <h1>
            Impressões, cópias
            <br />
            e materiais gráficos.
          </h1>
          <p>Atendimento rápido para estudantes, professores e empresas em Guarapuava.</p>
          <div className="destaque-botoes">
            <Link to="/produtos" className="btn btn-claro">
              Ver produtos
            </Link>
            <Link to="/localizacao" className="btn btn-contorno-claro">
              Como chegar
            </Link>
          </div>
        </div>
      </section>

      <section className="introducao container">
        <span className="sobretitulo">Sobre a CopyLoc</span>
        <h2>
          Da apostila da faculdade ao cartão de visita da sua empresa, a gente imprime com cuidado.
        </h2>
        <p>
          Texto sobre a história da loja, há quanto tempo atende a cidade e o que a diferencia.
          Troque este texto pelas informações reais da empresa.
        </p>
      </section>

      {/* Nosso jeito */}
      <section className="nosso-jeito">
        
        <div className="foto">
        
          <img src="/fotos/01.jfif"></img>
        
        </div>

        <div className="nosso-jeito-texto">
          <span className="sobretitulo">Nosso jeito</span>
          <h2>
            Rapidez, qualidade e
            <br />
            atendimento próximo.
          </h2>
          <p>
            Descreva aqui como é o atendimento da loja, o tipo de cliente que vocês recebem e o
            que torna a CopyLoc diferente das outras copiadoras.
          </p>
          <div className="numeros">
            {numeros.map((n) => (
              <div key={n.rotulo}>
                <strong>{n.valor}</strong>
                <span>{n.rotulo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="servicos container">
        <div className="secao-titulo">
          <span className="sobretitulo">O que fazemos</span>
          <h2>Nossos serviços</h2>
        </div>
        <div className="grade-servicos">
          {servicos.map((s) => (
            <ServiceCard key={s.id} servico={s} />
          ))}
        </div>
      </section>

      <section className="lojas-home container">
        <div className="secao-titulo">
          <span className="sobretitulo">Onde estamos</span>
          <h2>Visite uma de nossas lojas</h2>
        </div>
        <div className="grade-lojas">
          {lojas.map((loja) => (
            <StoreCard key={loja.id} loja={loja} />
          ))}
        </div>
      </section>

      <section className="chamada">
        <h2>Precisa imprimir algo hoje?</h2>
        <p>Mande seu arquivo pelo WhatsApp e retire na loja.</p>
        <a
          className="btn btn-claro"
          href="https://wa.me/5542900000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale no WhatsApp
        </a>
      </section>
    </>
  );
}