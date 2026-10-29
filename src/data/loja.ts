import type { Loja } from "../types/Loja";

export const lojas: Loja[] = [
  {
    id: 1,
    nome: "Santa Cruz",
    endereco: "Rua Prof. Becker, 3290 – Santa Cruz, Guarapuava/PR",
    telefone: "(42) 99915-1033",
    horarios: [
      { dias: "Seg a sex", horas: "9h30–12h · 14h–21h30" },
      { dias: "Sábado", horas: "9h–12h" },
    ],
  },
  {
    id: 2,
    nome: "Cartuchos & Cia",
    endereco: "Rua Saldanha Marinho, 1049 – Guarapuava/PR",
    telefone: "(42) 3623-7345",
    horarios: [
      { dias: "Seg a sex", horas: "8h30–18h30" },
      { dias: "Sábado", horas: "9h–13h" },
    ],
  },
];