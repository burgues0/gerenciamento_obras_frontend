import { FiscalizacaoStatus } from '../enums/fiscalizacoes-status.enum';
export declare class CreateFiscalizacoesDto {
    titulo: string;
    descricao: string;
    data_inicio: Date;
    data_fim?: Date;
    status: FiscalizacaoStatus;
    responsavelTecnicoId: number;
    obraIds: number[];
}
