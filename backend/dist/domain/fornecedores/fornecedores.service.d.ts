import { FornecedoresRepository } from './fornecedores.repository';
import { Fornecedores } from './entities/fornecedores.entity';
import { CreateFornecedoresDto } from './dto/create-fornecedores.dto';
import { UpdateFornecedoresDto } from './dto/update-fornecedores.dto';
import { ObrasRepository } from '../obras/obras.repository';
export declare class FornecedoresService {
    private readonly fornecedoresRepo;
    private readonly obrasRepository;
    constructor(fornecedoresRepo: FornecedoresRepository, obrasRepository: ObrasRepository);
    findAll(): Promise<Fornecedores[]>;
    findOne(id: number): Promise<Fornecedores | null>;
    create(data: CreateFornecedoresDto): Promise<Fornecedores>;
    update(id: number, data: Partial<UpdateFornecedoresDto>): Promise<Fornecedores | null>;
    updateActive(id: number, ativo: boolean): Promise<Fornecedores | null>;
    remove(id: number): Promise<boolean>;
    findSuppliersByObra(obraId: number): Promise<Fornecedores[]>;
}
