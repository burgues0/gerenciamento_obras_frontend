import { Model } from 'sequelize-typescript';
import { DiarioDeObra } from 'src/domain/diario-de-obra/entities/diario-de-obra.entity';
export declare class Material extends Model<Material> {
    readonly id: number;
    codigo: string;
    nome: string;
    unidadeMedida?: string;
    descricao?: string;
    precoUnitario: number;
    fabricante?: string;
    modelo?: string;
    diarios: DiarioDeObra[];
}
