import { EquipamentosService } from './equipamentos.service';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { Equipamentos } from './entities/equipamento.entity';
export declare class EquipamentosController {
    private readonly equipamentosService;
    constructor(equipamentosService: EquipamentosService);
    findAll(): Promise<Equipamentos[]>;
    findOne(id: number): Promise<Equipamentos | null>;
    create(equipamentos: CreateEquipamentoDto): Promise<Equipamentos>;
    update(id: number, data: Partial<UpdateEquipamentoDto>): Promise<void>;
    updateObras(id: number, obras: number[]): Promise<void>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
export declare class ObrasEquipamentoController {
    private readonly equipamentosService;
    constructor(equipamentosService: EquipamentosService);
    findEquipamentosByObra(id: number): Promise<Equipamentos[]>;
}
