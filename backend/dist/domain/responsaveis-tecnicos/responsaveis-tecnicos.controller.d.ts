import { ResponsaveisTecnicosService } from './responsaveis-tecnicos.service';
import { ResponsavelTecnico } from './entities/responsavel-tecnico.entity';
import { CreateResponsavelTecnicoDto } from './dto/create-responsavel-tecnico.dto';
import { UpdateResponsavelTecnicoDto } from './dto/update-responsavel-tecnico.dto';
import { CreateVinculoObraDto } from '../obra-responsavel-tecnico/dto/create-obra-responsavel-tecnico.dto';
import { ObraResponsavelTecnico } from '../obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity';
import { UpdateVinculoObraDto } from '../obra-responsavel-tecnico/dto/update-obra-responsavel-tecnico.dto';
export declare class ResponsaveisTecnicosController {
    private readonly responsavelTecnicoService;
    constructor(responsavelTecnicoService: ResponsaveisTecnicosService);
    findAll(): Promise<ResponsavelTecnico[]>;
    findOne(id: number): Promise<ResponsavelTecnico>;
    create(dto: CreateResponsavelTecnicoDto): Promise<ResponsavelTecnico>;
    update(id: number, dto: UpdateResponsavelTecnicoDto): Promise<void>;
    remove(id: number): Promise<void>;
    addObras(id: number, vinculosDto: CreateVinculoObraDto[]): Promise<ObraResponsavelTecnico[]>;
    updateVinculoObra(responsavelId: number, obraId: number, dto: UpdateVinculoObraDto): Promise<void>;
    findAllVinculoObras(id: number): Promise<ObraResponsavelTecnico[]>;
    findVinculoObra(responsavelId: number, obraId: number): Promise<ObraResponsavelTecnico>;
    deleteVinculoObra(responsavelId: number, obraId: number): Promise<void>;
}
