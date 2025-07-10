import { Model } from 'sequelize-typescript';
import { Endereco } from 'src/domain/enderecos/entities/endereco.entity';
import { Fornecedores } from 'src/domain/fornecedores/entities/fornecedores.entity';
import { Equipamentos } from 'src/domain/equipamentos/entities/equipamento.entity';
import { Fiscalizacoes } from 'src/domain/fiscalizacoes/entities/fiscalizacoes.entity';
import { ResponsavelTecnico } from 'src/domain/responsaveis-tecnicos/entities/responsavel-tecnico.entity';
export declare class Obras extends Model<Obras> {
    id: number;
    nome: string;
    descricao: string;
    status: string;
    data_inicio: Date;
    data_conclusao: Date | null;
    orcamento_total: number;
    gastos_atualizados: number;
    percentual_concluido: number;
    latitude: number | null;
    longitude: number | null;
    enderecoId: number | null;
    endereco: Endereco;
    fornecedores: Fornecedores[];
    equipamentos: Equipamentos[];
    responsaveisTecnicos: ResponsavelTecnico[];
    fiscalizacoes: Fiscalizacoes[];
}
