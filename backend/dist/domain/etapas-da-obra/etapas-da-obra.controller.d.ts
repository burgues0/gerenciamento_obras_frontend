import { EtapasDaObraService } from './etapas-da-obra.service';
import { CreateEtapasDaObraDto } from './dto/create-etapas-da-obra.dto';
import { UpdateEtapasDaObraDto } from './dto/update-etapas-da-obra.dto';
import { EtapasDaObra } from './entities/etapas-da-obra.entity';
export declare class EtapasDaObraController {
    private readonly etapaObraService;
    constructor(etapaObraService: EtapasDaObraService);
    create(idObra: number, dto: CreateEtapasDaObraDto): Promise<EtapasDaObra>;
    findAll(idObra: number): Promise<EtapasDaObra[]>;
    findOne(idObra: number, etapaId: number): Promise<EtapasDaObra>;
    update(idObra: number, etapaId: number, dto: UpdateEtapasDaObraDto): Promise<void>;
    remove(idObra: number, etapaId: number): Promise<void>;
}
