import { FiscalizacoesRepository } from './fiscalizacoes.repository';
import { CreateFiscalizacoesDto } from './dto/create-fiscalizacoes.dto';
import { UpdateFiscalizacoesDto } from './dto/update-fiscalizacoes.dto';
import { Fiscalizacoes } from './entities/fiscalizacoes.entity';
import { FiscalizacaoStatus } from './enums/fiscalizacoes-status.enum';
export declare class FiscalizacoesService {
    private readonly fiscalizacoesRepository;
    constructor(fiscalizacoesRepository: FiscalizacoesRepository);
    findAll(): Promise<Fiscalizacoes[]>;
    findOne(id: number): Promise<Fiscalizacoes | null>;
    findDetalhes(id: number): Promise<Fiscalizacoes | null>;
    findAllByStatus(status: string): Promise<Fiscalizacoes[]>;
    findRecentes(): Promise<Fiscalizacoes[]>;
    findByObraId(obraId: number): Promise<Fiscalizacoes[]>;
    create(dto: CreateFiscalizacoesDto): Promise<Fiscalizacoes>;
    update(id: number, dto: UpdateFiscalizacoesDto): Promise<Fiscalizacoes>;
    patchStatus(id: number, status: FiscalizacaoStatus): Promise<Fiscalizacoes>;
    delete(id: number): Promise<void>;
    deleteAllByObraId(obraId: number): Promise<void>;
}
