export declare const materiaisDeObra: string[];
export declare const etapasPredefinidas: {
    nome: string;
    descricao: string;
}[];
export declare const atividadesEObservacoes: {
    atividade: string;
    observacao: string;
}[];
export declare const complementosObra: (string | null)[];
export declare const equipamentosInfo: {
    nome: string;
    tipo: string;
    marca: string;
}[];
export declare const opcoesDeFiscalizacao: {
    titulo: string;
    descricao: string;
    relatorioTitulo: string;
    relatorioConteudo: string;
}[];
export declare const dominiosEmail: string[];
export declare const prefixosComerciais: string[];
export declare const nucleosTecnicos: string[];
export declare const sobrenomesComuns: string[];
export declare const sufixosComerciais: string[];
export declare const templatesDeMaterial: {
    nome: string;
    unidade: string;
    fabricantes: string[];
    descricao: string;
}[];
export declare const gerarTemplatesDescricaoObra: (nomeDaObra: string, cidade: string) => string[];
