import { DiarioDeObraRepository } from './diario-de-obra.repository';
import { CreateDiarioDeObraDto } from './dto/create-diario-de-obra.dto';
import { DiarioDeObra } from './entities/diario-de-obra.entity';
import { UpdateDiarioDeObraDto } from './dto/update-diario-de-obra.dto';
import { MaterialRepository } from '../materiais/materiais.repository';
export declare class DiarioDeObraService {
    private readonly diarioDeObraRepository;
    private readonly materiaisRepository;
    constructor(diarioDeObraRepository: DiarioDeObraRepository, materiaisRepository: MaterialRepository);
    create(dto: CreateDiarioDeObraDto): Promise<DiarioDeObra>;
    findAllByObra(obraId: number): Promise<DiarioDeObra[]>;
    findById(id: number, idObra: number): Promise<DiarioDeObra>;
    update(id: number, dto: UpdateDiarioDeObraDto, idObra: number): Promise<void>;
    remove(id: number, idObra: number): Promise<void>;
}
