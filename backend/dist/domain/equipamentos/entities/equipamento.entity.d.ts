import { Model } from 'sequelize-typescript';
import { Fornecedores } from '../../fornecedores/entities/fornecedores.entity';
import { Obras } from 'src/domain/obras/entities/obras.entity';
export declare class Equipamentos extends Model<Equipamentos> {
    id: number;
    nome: string;
    tipo: string;
    marca?: string;
    modelo?: string;
    numeroDeSerie: string;
    estado?: string;
    fornecedorId?: number;
    fornecedor?: Fornecedores;
    obras?: Obras[];
}
