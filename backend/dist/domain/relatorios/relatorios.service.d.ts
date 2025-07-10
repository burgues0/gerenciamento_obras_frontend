import { RelatoriosRepository } from "./relatorios.repository";
import { CreateRelatoriosDto } from "./dto/create-relatorios.dto";
import { UpdateRelatoriosDto } from "./dto/update-relatorios.dto";
import { Relatorios } from "./entities/relatorios.entity";
export declare class RelatoriosService {
    private readonly relatoriosRepository;
    constructor(relatoriosRepository: RelatoriosRepository);
    findAll(): Promise<Relatorios[]>;
    findOne(id: number): Promise<Relatorios>;
    findByFiscalizacao(fiscalizacaoId: number): Promise<Relatorios[]>;
    create(fiscalizacaoId: number, dto: CreateRelatoriosDto): Promise<Relatorios>;
    update(id: number, dto: UpdateRelatoriosDto): Promise<Relatorios>;
    delete(id: number): Promise<void>;
    deleteByFiscalizacao(fiscalizacaoId: number): Promise<void>;
}
