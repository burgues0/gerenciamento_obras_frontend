import { Model } from 'sequelize-typescript';
import { Obras } from '../../obras/entities/obras.entity';
import { ResponsavelTecnico } from 'src/domain/responsaveis-tecnicos/entities/responsavel-tecnico.entity';
import { TipoVinculoObra } from '../enums/tipo-vinculo-obra.enum';
export declare class ObraResponsavelTecnico extends Model {
    obraId: number;
    responsavelTecnicoId: number;
    data_inicio?: Date;
    data_fim?: Date;
    tipo_vinculo: TipoVinculoObra;
    responsavel: ResponsavelTecnico;
    obra: Obras;
}
