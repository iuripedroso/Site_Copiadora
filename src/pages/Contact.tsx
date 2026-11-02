import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { lojas } from "../data/loja";
import "./Contact.css";

const WHATSAPP = "5542999151033";

const canais = [
    { rotulo: "WhatsApp", valor: "(42) 99915-1033", link: `https://wa.me/${WHATSAPP}`, externo: true },
    { rotulo: "Telefone", valor: "(42) 3623-7345", link: "tel:+554236237345", externo: false },
    { rotulo: "E-mail", valor: "cartuchosecia@hotmail.com", link: "mailto:cartuchosecia@hotmail.com", externo: false },
    { rotulo: "Instagram", valor: "@copy.loc", link: "https://instagram.com/copy.loc", externo: true },
];

const copyloc = lojas.find((loja) => loja.id === 1);

interface Formulario {
    nome: string;
    telefone: string;
    email: string;
    assunto: string;
    mensagem: string;
}

type Erros = Partial<Record<keyof Formulario, string>>;

const formularioVazio: Formulario = { nome: "", telefone: "", email: "", assunto: "", mensagem: "" };

function validar(f: Formulario): Erros {
    const erros: Erros = {};
    if (!f.nome.trim()) erros.nome = "Informe seu nome.";
    if (f.email && !f.email.includes("@")) erros.email = "E-mail inválido.";
    if (!f.mensagem.trim()) erros.mensagem = "Escreva sua mensagem.";
    return erros;
}

export default function Contact() {
    const [form, setForm] = useState<Formulario>(formularioVazio);
    const [erros, setErros] = useState<Erros>({});

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const novosErros = validar(form);
        setErros(novosErros);
        if (Object.keys(novosErros).length > 0) return;

        const texto = [
            `Olá! Meu nome é ${form.nome}.`,
            form.assunto && `Assunto: ${form.assunto}`,
            form.mensagem,
            form.telefone && `Telefone: ${form.telefone}`,
            form.email && `E-mail: ${form.email}`,
        ]
            .filter(Boolean)
            .join("\n");

        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank");
        setForm(formularioVazio);
    }

    return (
        <>
            <section className="pagina-contato container">
                <div className="pagina-titulo">
                    <span className="sobretitulo">Contato</span>
                    <h1>Fale com a gente</h1>
                    <p>Tire dúvidas, peça orçamentos ou envie sugestões.</p>
                </div>

                <div className="contato-grade">
                    <form className="formulario" onSubmit={handleSubmit} noValidate>
                        <h2>Envie uma mensagem</h2>

                        <div className="linha-dupla">
                            <div className="campo">
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" name="nome" type="text" placeholder="Seu nome"
                                    value={form.nome} onChange={handleChange} />
                                {erros.nome && <span className="erro">{erros.nome}</span>}
                            </div>

                            <div className="campo">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" name="telefone" type="tel" placeholder="(42) 90000-0000"
                                    value={form.telefone} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" name="email" type="email" placeholder="seuemail@exemplo.com"
                                value={form.email} onChange={handleChange} />
                            {erros.email && <span className="erro">{erros.email}</span>}
                        </div>

                        <div className="campo">
                            <label htmlFor="assunto">Assunto</label>
                            <input id="assunto" name="assunto" type="text" placeholder="Orçamento, dúvida, sugestão..."
                                value={form.assunto} onChange={handleChange} />
                        </div>

                        <div className="campo campo-mensagem">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem"
                                value={form.mensagem} onChange={handleChange} />
                            {erros.mensagem && <span className="erro">{erros.mensagem}</span>}
                        </div>

                        <button type="submit" className="btn btn-contorno-claro-2">
                            Enviar mensagem
                        </button>
                    </form>

                    <aside className="canais">
                        <h2>Outros canais</h2>

                        <ul className="lista-canais">
                            {canais.map((c) => (
                                <li key={c.rotulo}>
                                    <a
                                        href={c.link}
                                        target={c.externo ? "_blank" : undefined}
                                        rel={c.externo ? "noopener noreferrer" : undefined}
                                    >
                                        <span className="canal-rotulo">{c.rotulo}</span>
                                        <span className="canal-valor">{c.valor}</span>
                                        <span className="canal-seta" aria-hidden="true">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="contato-horario">
                            <span className="sobretitulo">Horário de atendimento</span>
                            {copyloc?.horarios.map((h) => (
                                <p key={h.dias}>
                                    {h.dias}: {h.horas}
                                </p>
                            ))}
                        </div>

                        <a className="btn btn-escuro" href={`https://wa.me/${WHATSAPP}`}
                            target="_blank" rel="noopener noreferrer">
                            Chamar no WhatsApp
                        </a>
                    </aside>
                </div>
            </section>


        </>
    );
}