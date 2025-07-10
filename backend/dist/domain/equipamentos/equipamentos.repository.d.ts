import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { Equipamentos } from './entities/equipamento.entity';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { Obras } from '../obras/entities/obras.entity';
import { Fornecedores } from '../fornecedores/entities/fornecedores.entity';
export declare class EquipamentosRepository {
    private readonly equipamentosModel;
    private readonly obrasModel;
    private readonly fornecedoresModel;
    constructor(equipamentosModel: typeof Equipamentos, obrasModel: typeof Obras, fornecedoresModel: typeof Fornecedores);
    findAll(): Promise<Equipamentos[]>;
    findById(id: number): Promise<Equipamentos | null>;
    create(data: CreateEquipamentoDto): Promise<Equipamentos>;
    update(id: number, data: Partial<UpdateEquipamentoDto>): Promise<void>;
    updateObras(equipamento: Equipamentos, obras: Obras[]): Promise<void>;
    remove(id: number): Promise<void>;
    findByObraId(obraId: number): Promise<Equipamentos[]>;
    findOneByOptions(options: any): Promise<Equipamentos | null>;
}
