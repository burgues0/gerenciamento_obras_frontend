import { CreateDiarioDeObraDto } from './dto/create-diario-de-obra.dto';
import { DiarioDeObraService } from './diario-de-obra.service';
import { UpdateDiarioDeObraDto } from './dto/update-diario-de-obra.dto';
import { DiarioDeObra } from './entities/diario-de-obra.entity';
export declare class DiarioDeObraController {
    private readonly diarioDeObraService;
    constructor(diarioDeObraService: DiarioDeObraService);
    create(idObra: number, dto: CreateDiarioDeObraDto): Promise<DiarioDeObra>;
    findAll(idObra: number): Promise<DiarioDeObra[]>;
    findOne(idObra: number, diarioId: number): Promise<DiarioDeObra>;
    update(idObra: number, diarioId: number, dto: UpdateDiarioDeObraDto): Promise<void>;
    remove(idObra: number, diarioId: number): Promise<void>;
}
