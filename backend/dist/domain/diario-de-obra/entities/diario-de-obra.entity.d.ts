import { Model } from 'sequelize-typescript';
import { Material } from 'src/domain/materiais/entities/material.entity';
import { Obras } from 'src/domain/obras/entities/obras.entity';
export declare class DiarioDeObra extends Model<DiarioDeObra> {
    data: string;
    clima?: string;
    atividadesExecutadas?: string;
    materiaisUtilizados: Material[];
    observacoes?: string;
    obraId: number;
    obra: Obras;
}
