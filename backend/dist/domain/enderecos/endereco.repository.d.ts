import { Endereco } from './entities/endereco.entity';
import { Obras } from '../obras/entities/obras.entity';
export declare class EnderecoRepository {
    private readonly enderecoModel;
    private readonly obraModel;
    constructor(enderecoModel: typeof Endereco, obraModel: typeof Obras);
    findAll(): Promise<Endereco[]>;
    create(obraId: number, enderecoData: Partial<Endereco>): Promise<Endereco | null>;
    findById(id: number): Promise<Endereco | null>;
    findEnderecoByObraId(obraId: number): Promise<Endereco | null>;
    update(obraId: number, enderecoData: Partial<Endereco>): Promise<void>;
}
