import { Fiscalizacoes } from "./entities/fiscalizacoes.entity";
import { CreateFiscalizacoesDto } from './dto/create-fiscalizacoes.dto';
import { UpdateFiscalizacoesDto } from './dto/update-fiscalizacoes.dto';
export declare class FiscalizacoesRepository {
    private readonly fiscalizacoesModel;
    constructor(fiscalizacoesModel: typeof Fiscalizacoes);
    findAll(): Promise<Fiscalizacoes[]>;
    findOne(id: number): Promise<Fiscalizacoes | null>;
    findDetalhes(id: number): Promise<Fiscalizacoes | null>;
    findAllByStatus(status: string): Promise<Fiscalizacoes[]>;
    findRecentes(): Promise<Fiscalizacoes[]>;
    findByObraId(obraId: number): Promise<Fiscalizacoes[]>;
    create(dto: CreateFiscalizacoesDto): Promise<Fiscalizacoes>;
    update(id: number, dto: UpdateFiscalizacoesDto): Promise<Fiscalizacoes>;
    patch(id: number, dto: Partial<UpdateFiscalizacoesDto>): Promise<Fiscalizacoes>;
    delete(id: number): Promise<void>;
    deleteAllByObraId(obraId: number): Promise<void>;
}
