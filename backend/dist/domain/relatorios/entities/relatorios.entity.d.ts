import { Model } from 'sequelize-typescript';
import { Fiscalizacoes } from '../../fiscalizacoes/entities/fiscalizacoes.entity';
export declare class Relatorios extends Model<Relatorios> {
    id: number;
    titulo: string;
    conteudo: string;
    dataCriacao: Date;
    fiscalizacaoId: number;
    fiscalizacao: Fiscalizacoes;
}
