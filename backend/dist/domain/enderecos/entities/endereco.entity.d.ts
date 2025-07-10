import { Model } from 'sequelize-typescript';
import { Obras } from 'src/domain/obras/entities/obras.entity';
export declare class Endereco extends Model<Endereco> {
    id: number;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    obra?: Obras;
}
