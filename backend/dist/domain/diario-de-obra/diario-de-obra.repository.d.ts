import { DiarioDeObra } from './entities/diario-de-obra.entity';
import { CreateDiarioDeObraDto } from './dto/create-diario-de-obra.dto';
import { UpdateDiarioDeObraDto } from './dto/update-diario-de-obra.dto';
import { Obras } from '../obras/entities/obras.entity';
export declare class DiarioDeObraRepository {
    private readonly diarioDeObraModel;
    private readonly obraModel;
    constructor(diarioDeObraModel: typeof DiarioDeObra, obraModel: typeof Obras);
    create(data: CreateDiarioDeObraDto): Promise<DiarioDeObra>;
    checkObraExists(obraId: number): Promise<boolean>;
    findAllByObra(obraId: number): Promise<DiarioDeObra[]>;
    findById(id: number): Promise<DiarioDeObra | null>;
    update(id: number, data: UpdateDiarioDeObraDto): Promise<[number, DiarioDeObra[]]>;
    remove(id: number): Promise<number>;
}
