import { Model } from 'sequelize-typescript';
import { Obras } from 'src/domain/obras/entities/obras.entity';
export declare class ResponsavelTecnico extends Model {
    readonly id: number;
    nome: string;
    cpf: string;
    registro_profissional: string;
    especialidade: string;
    ativo: boolean;
    obras?: Obras[];
}
