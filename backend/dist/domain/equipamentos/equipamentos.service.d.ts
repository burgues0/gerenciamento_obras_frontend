import { EquipamentosRepository } from './equipamentos.repository';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { Equipamentos } from './entities/equipamento.entity';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { Obras } from '../obras/entities/obras.entity';
import { Fornecedores } from '../fornecedores/entities/fornecedores.entity';
export declare class EquipamentosService {
    private readonly equipamentosRepository;
    private readonly obrasRepository;
    private readonly fornecedoresRepository;
    constructor(equipamentosRepository: EquipamentosRepository, obrasRepository: typeof Obras, fornecedoresRepository: typeof Fornecedores);
    findAll(): Promise<Equipamentos[]>;
    findOne(id: number): Promise<Equipamentos | null>;
    create(data: CreateEquipamentoDto): Promise<Equipamentos>;
    update(id: number, data: Partial<UpdateEquipamentoDto>): Promise<void>;
    updateObras(id: number, obrasIds: number[]): Promise<void>;
    delete(id: number): Promise<void>;
    getEquipamentosByObraId(obraId: number): Promise<Equipamentos[]>;
}
