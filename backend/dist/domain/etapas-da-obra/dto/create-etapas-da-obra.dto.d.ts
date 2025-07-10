import { EtapaStatus } from '../entities/etapas-da-obra.entity';
export declare class CreateEtapasDaObraDto {
    nome: string;
    descricao?: string;
    dataInicioPrevista: string;
    dataFimPrevista: string;
    dataInicioReal?: string;
    dataFimReal?: string;
    status?: EtapaStatus;
    obraId: number;
}
