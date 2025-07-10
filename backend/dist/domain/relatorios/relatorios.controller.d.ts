import { Relatorios } from "./entities/relatorios.entity";
import { RelatoriosService } from "./relatorios.service";
import { CreateRelatoriosDto } from "./dto/create-relatorios.dto";
import { UpdateRelatoriosDto } from "./dto/update-relatorios.dto";
export declare class RelatoriosController {
    private readonly relatoriosService;
    constructor(relatoriosService: RelatoriosService);
    findAll(): Promise<Relatorios[]>;
    findOne(id: number): Promise<Relatorios>;
    findByFiscalizacao(fiscalizacaoId: number): Promise<Relatorios[]>;
    create(fiscalizacaoId: number, dto: CreateRelatoriosDto): Promise<Relatorios>;
    update(id: number, dto: UpdateRelatoriosDto): Promise<Relatorios>;
    delete(id: number): Promise<void>;
    deleteByFiscalizacao(fiscalizacaoId: number): Promise<void>;
}
