import type { Loja } from "../types/Loja";
import "./StoreDetails.css";

interface StoreDetailsProps {
  loja: Loja;
  numero: number;
  invertido?: boolean;
}

export default function StoreDetails({ loja, numero, invertido = false }: StoreDetailsProps) {
  const enderecoUrl = encodeURIComponent(loja.endereco);
  const linkMapa = `https://www.google.com/maps?q=${enderecoUrl}&output=embed`;
  const linkRota = `https://www.google.com/maps/dir/?api=1&destination=${enderecoUrl}`;
  const linkTelefone = `tel:+55${loja.telefone.replace(/\D/g, "")}`;

  return (
    <article className={invertido ? "loja invertida" : "loja"}>
      <div className="loja-foto">
        {loja.foto ? (
          <img src={loja.foto} alt={`Fachada da loja ${loja.nome}`} />
        ) : (
          <span>Foto da fachada</span>
        )}
      </div>

      <div className="loja-info">
        <span className="sobretitulo">Loja {numero}</span>
        <h2>{loja.nome}</h2>

        <dl className="loja-dados">
          <div>
            <dt>Endereço</dt>
            <dd>{loja.endereco}</dd>
          </div>
          <div>
            <dt>Telefone</dt>
            <dd>{loja.telefone}</dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>
              {loja.horarios.map((h) => (
                <span key={h.dias}>
                  {h.dias}: {h.horas}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="loja-botoes">
          <a className="btn btn-escuro" href={linkRota} target="_blank" rel="noopener noreferrer">
            Como chegar
          </a>
          <a className="btn btn-contorno" href={linkTelefone}>
            Ligar para a loja
          </a>
        </div>

        <iframe
          className="loja-mapa"
          src={linkMapa}
          title={`Mapa da loja ${loja.nome}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </article>
  );
}