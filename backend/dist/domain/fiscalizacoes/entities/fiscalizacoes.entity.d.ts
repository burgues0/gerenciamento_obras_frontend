import { Model } from 'sequelize-typescript';
import { Obras } from '../../obras/entities/obras.entity';
import { Relatorios } from 'src/domain/relatorios/entities/relatorios.entity';
import { ResponsavelTecnico } from 'src/domain/responsaveis-tecnicos/entities/responsavel-tecnico.entity';
import { FiscalizacaoStatus } from '../enums/fiscalizacoes-status.enum';
export declare class Fiscalizacoes extends Model<Fiscalizacoes> {
    id: number;
    titulo: string;
    descricao: string;
    data_inicio: Date;
    data_fim?: Date;
    status: FiscalizacaoStatus;
    obras: Obras[];
    relatorios: Relatorios[];
    responsavelTecnicoId: number;
    responsavelTecnico: ResponsavelTecnico;
}
