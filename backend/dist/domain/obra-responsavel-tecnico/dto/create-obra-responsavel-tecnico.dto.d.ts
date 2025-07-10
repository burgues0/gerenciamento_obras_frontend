import { TipoVinculoObra } from '../enums/tipo-vinculo-obra.enum';
export declare class CreateVinculoObraDto {
    obraId: number;
    dataInicio: string;
    dataFim?: string;
    tipoVinculo?: TipoVinculoObra;
}
