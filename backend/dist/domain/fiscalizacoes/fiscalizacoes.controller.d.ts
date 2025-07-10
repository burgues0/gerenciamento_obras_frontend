import { Fiscalizacoes } from './entities/fiscalizacoes.entity';
import { FiscalizacoesService } from './fiscalizacoes.service';
import { CreateFiscalizacoesDto } from './dto/create-fiscalizacoes.dto';
import { UpdateFiscalizacoesDto } from './dto/update-fiscalizacoes.dto';
import { UpdateFiscalizacaoStatusDto } from './dto/update-fiscalizacoes-status.dto';
export declare class FiscalizacoesController {
    private readonly fiscalizacoesService;
    constructor(fiscalizacoesService: FiscalizacoesService);
    findAll(): Promise<Fiscalizacoes[]>;
    findRecentes(): Promise<Fiscalizacoes[]>;
    findOne(id: number): Promise<Fiscalizacoes>;
    findByStatus(status: string): Promise<Fiscalizacoes[]>;
    findDetalhes(id: number): Promise<Fiscalizacoes | null>;
    findByObraId(obraId: number): Promise<Fiscalizacoes[]>;
    create(dto: CreateFiscalizacoesDto): Promise<Fiscalizacoes>;
    update(id: number, dto: UpdateFiscalizacoesDto): Promise<Fiscalizacoes>;
    patchStatus(id: number, updateStatusDto: UpdateFiscalizacaoStatusDto): Promise<Fiscalizacoes>;
    delete(id: number): Promise<void>;
    deleteAllByObraId(obraId: number): Promise<void>;
}
