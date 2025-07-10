import { EtapasDaObraRepository } from './etapas-da-obra.repository';
import { CreateEtapasDaObraDto } from './dto/create-etapas-da-obra.dto';
import { EtapasDaObra } from './entities/etapas-da-obra.entity';
import { UpdateEtapasDaObraDto } from './dto/update-etapas-da-obra.dto';
export declare class EtapasDaObraService {
    private readonly etapaObraRepository;
    constructor(etapaObraRepository: EtapasDaObraRepository);
    create(dto: CreateEtapasDaObraDto): Promise<EtapasDaObra>;
    findAllByObra(obraId: number): Promise<EtapasDaObra[]>;
    findById(id: number, obraId: number): Promise<EtapasDaObra>;
    update(id: number, dto: UpdateEtapasDaObraDto, idObra: number): Promise<EtapasDaObra>;
    remove(id: number, idObra: any): Promise<void>;
}
