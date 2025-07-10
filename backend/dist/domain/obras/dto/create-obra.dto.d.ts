export declare class CreateObraDto {
    nome: string;
    descricao: string;
    status: string;
    data_inicio: Date;
    data_conclusao?: Date;
    orcamento_total: number;
    gastos_atualizados?: number;
    percentual_concluido?: number;
    latitude?: number;
    longitude?: number;
    fornecedoresId?: number[];
    equipamentosId?: number[];
}
