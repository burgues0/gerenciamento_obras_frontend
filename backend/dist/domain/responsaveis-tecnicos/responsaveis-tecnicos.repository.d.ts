import { ResponsavelTecnico } from "./entities/responsavel-tecnico.entity";
import { CreateResponsavelTecnicoDto } from './dto/create-responsavel-tecnico.dto';
import { UpdateResponsavelTecnicoDto } from './dto/update-responsavel-tecnico.dto';
export declare class ResponsaveisTecnicosRepository {
    private readonly responsavelTecnicoModel;
    constructor(responsavelTecnicoModel: typeof ResponsavelTecnico);
    findAll(): Promise<ResponsavelTecnico[]>;
    findById(id: number): Promise<ResponsavelTecnico | null>;
    findByCPF(cpf: string): Promise<ResponsavelTecnico | null>;
    create(data: CreateResponsavelTecnicoDto & {
        obrasIds?: number[];
    }): Promise<ResponsavelTecnico>;
    update(id: number, data: UpdateResponsavelTecnicoDto & {
        obrasIds?: number[];
    }): Promise<ResponsavelTecnico | null>;
    delete(id: number): Promise<boolean>;
}
