import { EnderecoRepository } from './endereco.repository';
import { ObrasRepository } from '../obras/obras.repository';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecosService {
    private readonly enderecoRepository;
    private readonly obrasRepository;
    constructor(enderecoRepository: EnderecoRepository, obrasRepository: ObrasRepository);
    create(id: number, endereco: CreateEnderecoDto): Promise<import("./entities/endereco.entity").Endereco | null>;
    findOne(id: number): Promise<import("./entities/endereco.entity").Endereco | null>;
    update(id: number, enderecoInput: UpdateEnderecoDto): Promise<void>;
    findAll(): Promise<import("./entities/endereco.entity").Endereco[]>;
}
