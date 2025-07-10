import { FornecedoresService } from './fornecedores.service';
import { Fornecedores } from './entities/fornecedores.entity';
import { CreateFornecedoresDto } from './dto/create-fornecedores.dto';
import { UpdateFornecedoresDto } from './dto/update-fornecedores.dto';
export declare class FornecedoresController {
    private readonly fornecedoresService;
    constructor(fornecedoresService: FornecedoresService);
    findAll(): Promise<Fornecedores[]>;
    findOne(id: number): Promise<Fornecedores | null>;
    create(data: CreateFornecedoresDto): Promise<Fornecedores>;
    update(id: number, data: Partial<UpdateFornecedoresDto>): Promise<Fornecedores | null>;
    updateActive(id: number, ativo: boolean): Promise<Fornecedores | null>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
export declare class ObrasController {
    private readonly fornecedoresService;
    constructor(fornecedoresService: FornecedoresService);
    findSuppliersByObra(id: number): Promise<Fornecedores[]>;
}
