import { EtapasDaObra } from './entities/etapas-da-obra.entity';
import { CreateEtapasDaObraDto } from './dto/create-etapas-da-obra.dto';
import { UpdateEtapasDaObraDto } from './dto/update-etapas-da-obra.dto';
import { Obras } from '../obras/entities/obras.entity';
export declare class EtapasDaObraRepository {
    private readonly etapaObraModel;
    private readonly obraModel;
    constructor(etapaObraModel: typeof EtapasDaObra, obraModel: typeof Obras);
    create(data: CreateEtapasDaObraDto): Promise<EtapasDaObra>;
    checkObraExists(obraId: number): Promise<boolean>;
    findAllByObra(obraId: number): Promise<EtapasDaObra[]>;
    findById(id: number): Promise<EtapasDaObra | null>;
    update(id: number, data: UpdateEtapasDaObraDto): Promise<[number, EtapasDaObra[]]>;
    remove(id: number): Promise<number>;
}
