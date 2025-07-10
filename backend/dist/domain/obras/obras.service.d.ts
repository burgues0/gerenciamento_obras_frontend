import { ObrasRepository } from './obras.repository';
import { Obras } from './entities/obras.entity';
import { CreateObraDto } from './dto/create-obra.dto';
import { UpdateObraDto } from './dto/update-obra.dto';
import { FornecedoresRepository } from '../fornecedores/fornecedores.repository';
import { EquipamentosRepository } from '../equipamentos/equipamentos.repository';
export declare class ObrasService {
    private readonly obrasRepo;
    private readonly fornecedoresRepository;
    private readonly equipamentosRepository;
    constructor(obrasRepo: ObrasRepository, fornecedoresRepository: FornecedoresRepository, equipamentosRepository: EquipamentosRepository);
    findAll(): Promise<Obras[]>;
    findOne(id: number): Promise<Obras | null>;
    create(data: CreateObraDto): Promise<Obras>;
    update(id: number, data: UpdateObraDto): Promise<Obras | null>;
    remove(id: number): Promise<boolean>;
}
