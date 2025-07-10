import { ObraResponsavelTecnico } from './entities/obra-responsavel-tecnico.entity';
import { CreateVinculoObraDto } from './dto/create-obra-responsavel-tecnico.dto';
import { UpdateVinculoObraDto } from './dto/update-obra-responsavel-tecnico.dto';
export declare class ObraResponsavelTecnicoRepository {
    private readonly obraRespTecnicoModel;
    constructor(obraRespTecnicoModel: typeof ObraResponsavelTecnico);
    criarVinculo(responsavelTecnicoId: number, data: CreateVinculoObraDto): Promise<ObraResponsavelTecnico>;
    buscarVinculosPorResponsavel(responsavelTecnicoId: number): Promise<ObraResponsavelTecnico[]>;
    buscarVinculo(responsavelTecnicoId: number, obraId: number): Promise<ObraResponsavelTecnico | null>;
    atualizarVinculo(responsavelTecnicoId: number, obraId: number, dadosAtualizacao: UpdateVinculoObraDto): Promise<ObraResponsavelTecnico | null>;
    removerVinculo(responsavelTecnicoId: number, obraId: number): Promise<void>;
}
