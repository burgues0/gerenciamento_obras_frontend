import { Model } from 'sequelize-typescript';
import { Obras } from 'src/domain/obras/entities/obras.entity';
export declare enum EtapaStatus {
    NAO_INICIADA = "Nao iniciada",
    EM_ANDAMENTO = "Em andamento",
    CONCLUIDA = "Conclu\u00EDda",
    ATRASADA = "Atrasada"
}
export declare class EtapasDaObra extends Model<EtapasDaObra> {
    id: number;
    nome: string;
    descricao?: string;
    dataInicioPrevista: Date;
    dataFimPrevista: Date;
    dataInicioReal?: Date;
    dataFimReal?: Date;
    status: EtapaStatus;
    obraId: number;
    obra?: Obras;
}
