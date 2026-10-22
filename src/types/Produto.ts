export type Categoria = "impressao" | "encadernacao" | "materiais-graficos" | "plastificacao";

export interface Produto {
    id: number;
    nome: string;
    categoria: Categoria;
    descricao: string;
    preco: number | null;
    foto?: string;
}

export const nomesCategorias: Record<Categoria, string> = {
    "impressao": "Impressão",
    "encadernacao": "Encadernação",
    "materiais-graficos": "Materiais gráficos",
    "plastificacao": "Plastificação",
};