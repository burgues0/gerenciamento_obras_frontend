import { Model } from 'sequelize-typescript';
import { Obras } from '../../obras/entities/obras.entity';
import { Fiscalizacoes } from '../../fiscalizacoes/entities/fiscalizacoes.entity';
export declare class ObrasFiscalizacoes extends Model<ObrasFiscalizacoes> {
    obraId: number;
    obra: Obras;
    fiscalizacaoId: number;
    fiscalizacao: Fiscalizacoes;
}
