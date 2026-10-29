export interface Horario{
    dias: string;
    horas: string;
}

export interface Loja{
    id: number;
    nome: string;
    endereco: string;
    telefone: string;
    horarios: Horario[];
    foto?: string;
}