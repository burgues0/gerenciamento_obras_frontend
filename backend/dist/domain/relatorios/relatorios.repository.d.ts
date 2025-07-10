import { Relatorios } from "./entities/relatorios.entity";
import { CreateRelatoriosDto } from "./dto/create-relatorios.dto";
import { UpdateRelatoriosDto } from "./dto/update-relatorios.dto";
export declare class RelatoriosRepository {
    private readonly relatoriosModel;
    constructor(relatoriosModel: typeof Relatorios);
    findAll(): Promise<Relatorios[]>;
    findOne(id: number): Promise<Relatorios | null>;
    findByFiscalizacao(fiscalizacaoId: number): Promise<Relatorios[]>;
    create(fiscalizacaoId: number, dto: CreateRelatoriosDto): Promise<Relatorios>;
    update(id: number, dto: UpdateRelatoriosDto): Promise<Relatorios>;
    delete(id: number): Promise<void>;
    deleteByFiscalizacao(fiscalizacaoId: number): Promise<void>;
}
