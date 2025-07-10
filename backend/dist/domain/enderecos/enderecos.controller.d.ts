import { EnderecosService } from './enderecos.service';
import { Endereco } from './entities/endereco.entity';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecosGlobalController {
    private readonly enderecosService;
    constructor(enderecosService: EnderecosService);
    findAll(): Promise<Endereco[]>;
}
export declare class ObrasEnderecosController {
    private readonly enderecosService;
    constructor(enderecosService: EnderecosService);
    create(id: number, endereco: CreateEnderecoDto): Promise<Endereco | null>;
    findOne(id: number): Promise<Endereco | null>;
    update(id: number, endereco: UpdateEnderecoDto): Promise<void>;
}
