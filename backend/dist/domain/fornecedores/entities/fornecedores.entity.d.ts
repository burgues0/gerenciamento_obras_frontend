import { Model } from 'sequelize-typescript';
import { Obras } from 'src/domain/obras/entities/obras.entity';
export declare class Fornecedores extends Model<Fornecedores> {
    id: number;
    nome: string;
    cnpj: string | null;
    email: string | null;
    telefone: string | null;
    endereco: string | null;
    ativo: boolean;
    obrasId: Obras[];
}
