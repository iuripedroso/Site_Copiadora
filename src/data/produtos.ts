import type { Produto } from "../types/Produto";

export const produtos: Produto[] = [
  { id: 1, nome: "Impressão P&B", categoria: "impressao", descricao: "Folha A4, frente ou frente e verso", preco: 0.25 },
  { id: 2, nome: "Impressão colorida", categoria: "impressao", descricao: "Folha A4 em alta qualidade", preco: 1.5 },
  { id: 3, nome: "Cópias", categoria: "impressao", descricao: "Documentos, apostilas e livros", preco: 0.2 },
  { id: 4, nome: "Encadernação espiral", categoria: "encadernacao", descricao: "Com capa transparente e contracapa", preco: 5 },
  { id: 5, nome: "Plastificação", categoria: "plastificacao", descricao: "Documentos, crachás e cardápios", preco: 3 },
  { id: 6, nome: "Cartão de visita", categoria: "materiais-graficos", descricao: "Diversos papéis e acabamentos", preco: null },
  { id: 7, nome: "Panfletos", categoria: "materiais-graficos", descricao: "Diversos tamanhos e quantidades", preco: null },
  { id: 8, nome: "Banners", categoria: "materiais-graficos", descricao: "Lona com acabamento para pendurar", preco: null },
];