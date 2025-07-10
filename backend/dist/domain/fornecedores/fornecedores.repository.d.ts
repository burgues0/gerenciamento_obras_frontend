import { Fornecedores } from './entities/fornecedores.entity';
import { CreateFornecedoresDto } from './dto/create-fornecedores.dto';
import { UpdateFornecedoresDto } from './dto/update-fornecedores.dto';
import { Obras } from '../obras/entities/obras.entity';
import { Equipamentos } from '../equipamentos/entities/equipamento.entity';
import { ObrasFornecedores } from '../obra-fornecedor/entities/obras-fornecedores.entity';
export declare class FornecedoresRepository {
    private readonly fornecedoresModel;
    private readonly obrasModel;
    private readonly equipamentosModel;
    private readonly obraFornecedorModel;
    constructor(fornecedoresModel: typeof Fornecedores, obrasModel: typeof Obras, equipamentosModel: typeof Equipamentos, obraFornecedorModel: typeof ObrasFornecedores);
    findAll(): Promise<Fornecedores[]>;
    findById(id: number): Promise<Fornecedores | null>;
    create(data: CreateFornecedoresDto): Promise<Fornecedores>;
    update(id: number, data: Partial<UpdateFornecedoresDto>): Promise<Fornecedores | null>;
    updateActive(id: number, ativo: boolean): Promise<Fornecedores | null>;
    delete(id: number): Promise<boolean>;
    findSuppliersByObra(obraId: number): Promise<Fornecedores[] | null>;
    findOneByOptions(options: any): Promise<Fornecedores | null>;
}
