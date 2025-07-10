"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsaveisTecnicosService = void 0;
const common_1 = require("@nestjs/common");
const responsaveis_tecnicos_repository_1 = require("./responsaveis-tecnicos.repository");
const document_validator_service_1 = require("../shared/document-validator.service");
const obra_responsavel_tecnico_repository_1 = require("../obra-responsavel-tecnico/obra-responsavel-tecnico.repository");
const obras_repository_1 = require("../obras/obras.repository");
const tipo_vinculo_obra_enum_1 = require("../obra-responsavel-tecnico/enums/tipo-vinculo-obra.enum");
let ResponsaveisTecnicosService = class ResponsaveisTecnicosService {
    responsaveisTecnicosRepository;
    obrasRepository;
    obrasResponsavelTecnicoRepository;
    documentValidatorService;
    constructor(responsaveisTecnicosRepository, obrasRepository, obrasResponsavelTecnicoRepository, documentValidatorService) {
        this.responsaveisTecnicosRepository = responsaveisTecnicosRepository;
        this.obrasRepository = obrasRepository;
        this.obrasResponsavelTecnicoRepository = obrasResponsavelTecnicoRepository;
        this.documentValidatorService = documentValidatorService;
    }
    async findAll() {
        return this.responsaveisTecnicosRepository.findAll();
    }
    async findOne(id) {
        this.validarId(id);
        const responsavel = await this.obterResponsavelPorId(id);
        return responsavel;
    }
    async create(input) {
        this.validarDadosObrigatoriosParaCriacaoRT(input);
        this.validarFormatoCPF(input.cpf);
        this.validarCPF(input.cpf);
        await this.verificarCPFUnico(input.cpf);
        return this.responsaveisTecnicosRepository.create(input);
    }
    async update(id, input) {
        this.validarId(id);
        if (Object.keys(input).length === 0) {
            throw new common_1.BadRequestException('Nenhum dado fornecido para atualização');
        }
        const allowedProperties = ['nome', 'cpf', 'registro_profissional', 'especialidade', 'ativo'];
        const invalidProperties = Object.keys(input).filter(prop => !allowedProperties.includes(prop));
        if (invalidProperties.length > 0) {
            throw new common_1.BadRequestException(`Propriedades inválidas para atualização: ${invalidProperties.join(', ')}. ` +
                `Apenas estas propriedades podem ser atualizadas: ${allowedProperties.join(', ')}`);
        }
        const responsavelExistente = await this.obterResponsavelPorId(id);
        if (!responsavelExistente) {
            throw new common_1.NotFoundException('Responsável técnico não encontrado');
        }
        const hasChanges = Object.keys(input).some(key => {
            const inputValue = input[key];
            const currentValue = responsavelExistente[key];
            return inputValue !== undefined && inputValue !== currentValue;
        });
        if (!hasChanges) {
            throw new common_1.BadRequestException('Nenhuma alteração fornecida em relação aos dados atuais');
        }
        if (input.nome !== undefined) {
            if (input.nome === responsavelExistente.nome) {
                throw new common_1.BadRequestException('O nome fornecido é igual ao atual');
            }
            if (!input.nome.trim()) {
                throw new common_1.BadRequestException('Nome não pode ser vazio');
            }
        }
        if (input.cpf !== undefined) {
            if (input.cpf === responsavelExistente.cpf) {
                throw new common_1.BadRequestException('O CPF fornecido é igual ao atual');
            }
            this.validarFormatoCPF(input.cpf);
            this.validarCPF(input.cpf);
            await this.verificarCPFUnico(input.cpf, id);
        }
        if (input.registro_profissional !== undefined) {
            if (input.registro_profissional === responsavelExistente.registro_profissional) {
                throw new common_1.BadRequestException('O registro profissional fornecido é igual ao atual');
            }
            if (!input.registro_profissional.trim()) {
                throw new common_1.BadRequestException('Registro profissional não pode ser vazio');
            }
        }
        if (input.especialidade !== undefined) {
            if (input.especialidade === responsavelExistente.especialidade) {
                throw new common_1.BadRequestException('A especialidade fornecida é igual à atual');
            }
            if (!input.especialidade.trim()) {
                throw new common_1.BadRequestException('Especialidade não pode ser vazia');
            }
        }
        return this.responsaveisTecnicosRepository.update(id, input);
    }
    async remove(id) {
        this.validarId(id);
        await this.obterResponsavelPorId(id);
        await this.verificarVinculosAtivos(id);
        return await this.responsaveisTecnicosRepository.delete(id);
    }
    async createVinculosObra(responsavelId, vinculosDto) {
        this.validarId(responsavelId);
        const responsavelExistente = await this.obterResponsavelPorId(responsavelId);
        const vinculosAtuais = await this.obrasResponsavelTecnicoRepository.buscarVinculosPorResponsavel(responsavelId);
        const obraIdsAtuais = new Set(vinculosAtuais.map(v => v.obraId));
        const obraIdsNovos = vinculosDto.map(v => v.obraId);
        const vinculosDuplicados = obraIdsNovos.filter(id => obraIdsAtuais.has(id));
        if (vinculosDuplicados.length > 0) {
            throw new common_1.ConflictException(`Vínculos já existem para as obras com IDs: ${vinculosDuplicados.join(', ')}`);
        }
        const resultados = [];
        for (const dto of vinculosDto) {
            const vinculo = await this.processarCriacaoVinculo(responsavelId, dto, vinculosAtuais);
            resultados.push(vinculo);
        }
        if (!responsavelExistente.ativo) {
            await this.responsaveisTecnicosRepository.update(responsavelId, { ativo: true });
        }
        return resultados;
    }
    async updateVinculoObra(responsavelId, obraId, updateDto) {
        this.validarId(responsavelId);
        this.validarId(obraId);
        await this.obterResponsavelPorId(responsavelId);
        await this.verificarExistenciaObra(obraId);
        if (Object.keys(updateDto).length === 0) {
            throw new common_1.BadRequestException('Nenhum dado fornecido para atualização');
        }
        const allowedProperties = ['dataInicio', 'dataFim', 'tipoVinculo'];
        const invalidProperties = Object.keys(updateDto).filter(prop => !allowedProperties.includes(prop));
        if (invalidProperties.length > 0) {
            throw new common_1.BadRequestException(`Propriedades inválidas para atualização: ${invalidProperties.join(', ')}. ` +
                `Apenas estas propriedades podem ser atualizadas: ${allowedProperties.join(', ')}`);
        }
        const vinculoExistente = await this.obterVinculoExistente(responsavelId, obraId);
        const hasChanges = Object.keys(updateDto).some(key => {
            const dtoValue = updateDto[key];
            const existingValue = vinculoExistente[key === 'tipoVinculo' ? 'tipo_vinculo' : key];
            return dtoValue !== undefined && dtoValue !== existingValue;
        });
        if (!hasChanges) {
            throw new common_1.BadRequestException('Nenhuma alteração fornecida em relação aos dados atuais');
        }
        const { novaDataInicio, novaDataFim } = this.processarDatasAtualizacao(updateDto.dataInicio, updateDto.dataFim, vinculoExistente);
        const tipoVinculoFinal = this.validarTipoVinculo(updateDto.tipoVinculo ?? vinculoExistente.tipo_vinculo);
        await this.verificarConflitosAtualizacao(responsavelId, obraId, novaDataInicio, novaDataFim, tipoVinculoFinal, vinculoExistente.id);
        return this.executarAtualizacao(responsavelId, obraId, novaDataInicio, novaDataFim, tipoVinculoFinal);
    }
    async findAllVinculosObra(responsavelId) {
        this.validarId(responsavelId);
        await this.obterResponsavelPorId(responsavelId);
        const vinculos = await this.obrasResponsavelTecnicoRepository.buscarVinculosPorResponsavel(responsavelId);
        if (!vinculos || vinculos.length === 0) {
            throw new common_1.NotFoundException(`Nenhum vínculo encontrado para o responsável técnico com ID ${responsavelId}.`);
        }
        return vinculos;
    }
    async findVinculoObra(responsavelId, obraId) {
        this.validarId(responsavelId);
        this.validarId(obraId);
        await this.obterResponsavelPorId(responsavelId);
        await this.verificarExistenciaObra(obraId);
        const vinculo = await this.obrasResponsavelTecnicoRepository.buscarVinculo(responsavelId, obraId);
        if (!vinculo) {
            throw new common_1.NotFoundException(`Vínculo entre responsável ${responsavelId} e obra ${obraId} não encontrado.`);
        }
        return vinculo;
    }
    async deleteVinculoObra(responsavelId, obraId) {
        this.validarId(responsavelId);
        this.validarId(obraId);
        await this.obterResponsavelPorId(responsavelId);
        await this.verificarExistenciaObra(obraId);
        await this.obterVinculoExistente(responsavelId, obraId);
        try {
            await this.obrasResponsavelTecnicoRepository.removerVinculo(responsavelId, obraId);
            const vinculosRestantes = await this.obrasResponsavelTecnicoRepository.buscarVinculosPorResponsavel(responsavelId);
            if (vinculosRestantes.length === 0) {
                await this.responsaveisTecnicosRepository.update(responsavelId, { ativo: false });
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao remover o vínculo. Por favor, tente novamente.');
        }
    }
    validarId(id) {
        if (!id || id <= 0) {
            throw new common_1.BadRequestException('ID inválido.');
        }
    }
    async obterResponsavelPorId(id) {
        const responsavel = await this.responsaveisTecnicosRepository.findById(id);
        if (!responsavel) {
            throw new common_1.NotFoundException(`Responsável técnico com id ${id} não encontrado.`);
        }
        return responsavel;
    }
    validarDadosObrigatoriosParaCriacaoRT(input) {
        const camposObrigatorios = [
            'nome', 'cpf', 'registro_profissional', 'especialidade'
        ];
        const camposFaltantes = camposObrigatorios.filter(campo => !input[campo]);
        if (camposFaltantes.length > 0) {
            throw new common_1.BadRequestException(`Campos obrigatórios faltando: ${camposFaltantes.join(', ')}`);
        }
    }
    validarFormatoCPF(cpf) {
        if (!this.documentValidatorService.validarCpfFormatado(cpf)) {
            throw new common_1.BadRequestException('CPF inválido. Formato esperado: xxx.xxx.xxx-xx');
        }
    }
    validarCPF(cpf) {
        if (!this.documentValidatorService.validarCpf(cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
    }
    async verificarCPFUnico(cpf, idExcluir) {
        const responsavelExistente = await this.responsaveisTecnicosRepository.findByCPF(cpf);
        if (responsavelExistente && responsavelExistente.id !== idExcluir) {
            throw new common_1.ConflictException('Já existe um responsável técnico cadastrado com este CPF.');
        }
    }
    async verificarVinculosAtivos(idResponsavel) {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const vinculos = await this.obrasResponsavelTecnicoRepository.buscarVinculosPorResponsavel(idResponsavel);
        const vinculosAtivos = vinculos.filter(vinculo => !vinculo.data_fim || new Date(vinculo.data_fim) >= hoje);
        if (vinculosAtivos.length > 0) {
            throw new common_1.ConflictException('Não é possível remover um responsável com vínculos ativos.');
        }
    }
    async processarCriacaoVinculo(responsavelId, dto, vinculosAtuais) {
        if (!dto) {
            throw new common_1.BadRequestException('Dados do vínculo não fornecidos.');
        }
        await this.verificarExistenciaObra(dto.obraId);
        const { dataInicio, dataFim } = this.processarEValidarDatas(dto.dataInicio, dto.dataFim);
        const tipoVinculo = this.validarTipoVinculo(dto.tipoVinculo);
        this.verificarVinculoAtivo(vinculosAtuais, dto.obraId, tipoVinculo);
        this.verificarConflitoDatas(vinculosAtuais, dto.obraId, tipoVinculo, dataInicio, dataFim);
        return this.criarNovoVinculo(responsavelId, dto, dataInicio, dataFim);
    }
    processarEValidarDatas(dataInicioStr, dataFimStr) {
        const dataInicio = new Date(dataInicioStr);
        if (isNaN(dataInicio.getTime())) {
            throw new common_1.BadRequestException('Data de início inválida.');
        }
        let dataFim = null;
        if (dataFimStr) {
            dataFim = new Date(dataFimStr);
            if (isNaN(dataFim.getTime())) {
                throw new common_1.BadRequestException('Data de fim inválida.');
            }
            if (dataInicio > dataFim) {
                throw new common_1.BadRequestException('Data fim não pode ser anterior à data início.');
            }
        }
        return { dataInicio, dataFim };
    }
    async verificarExistenciaObra(obraId) {
        const obra = await this.obrasRepository.findById(obraId);
        if (!obra) {
            throw new common_1.NotFoundException(`Obra com ID ${obraId} não encontrada.`);
        }
    }
    validarTipoVinculo(tipoVinculo) {
        if (!Object.values(tipo_vinculo_obra_enum_1.TipoVinculoObra).includes(tipoVinculo)) {
            throw new common_1.BadRequestException(`Tipo de vínculo inválido. Valores permitidos: ${Object.values(tipo_vinculo_obra_enum_1.TipoVinculoObra).join(', ')}`);
        }
        return tipoVinculo;
    }
    verificarVinculoAtivo(vinculosAtuais, obraId, tipoVinculo) {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const jaVinculado = vinculosAtuais.some(v => v.obra.id === obraId &&
            v.tipo_vinculo === tipoVinculo &&
            (!v.data_fim || new Date(v.data_fim) >= hoje));
        if (jaVinculado) {
            throw new common_1.BadRequestException(`Já existe um vínculo ativo do tipo ${tipoVinculo} com a obra ${obraId}.`);
        }
    }
    verificarConflitoDatas(vinculosAtuais, obraId, tipoVinculo, novaDataInicio, novaDataFim) {
        const conflito = vinculosAtuais.some(v => {
            const inicioExistente = v.data_inicio ? new Date(v.data_inicio) : null;
            const fimExistente = v.data_fim ? new Date(v.data_fim) : null;
            return (v.obra.id === obraId &&
                v.tipo_vinculo === tipoVinculo &&
                this.datasSobrepostas(novaDataInicio, novaDataFim, inicioExistente, fimExistente));
        });
        if (conflito) {
            throw new common_1.BadRequestException(`Existe sobreposição de datas com outro vínculo do tipo ${tipoVinculo} na obra ${obraId}.`);
        }
    }
    datasSobrepostas(inicioA, fimA, inicioB, fimB) {
        if (!inicioB)
            return false;
        const aInicio = inicioA.getTime();
        const aFim = fimA ? fimA.getTime() : Infinity;
        const bInicio = inicioB.getTime();
        const bFim = fimB ? fimB.getTime() : Infinity;
        return ((aInicio >= bInicio && aInicio <= bFim) ||
            (aFim >= bInicio && aFim <= bFim) ||
            (aInicio <= bInicio && aFim >= bFim));
    }
    async criarNovoVinculo(responsavelId, dto, dataInicio, dataFim) {
        const dadosCriacao = {
            ...dto,
            data_inicio: dataInicio.toISOString().split('T')[0],
            data_fim: dataFim ? dataFim.toISOString().split('T')[0] : undefined
        };
        return this.obrasResponsavelTecnicoRepository.criarVinculo(responsavelId, dadosCriacao);
    }
    processarDatasAtualizacao(dataInicioDto, dataFimDto, vinculoExistente) {
        const dataInicioStr = dataInicioDto ?? vinculoExistente.data_inicio;
        if (!dataInicioStr) {
            throw new common_1.BadRequestException('Data de início é obrigatória.');
        }
        const novaDataInicio = new Date(dataInicioStr);
        if (isNaN(novaDataInicio.getTime())) {
            throw new common_1.BadRequestException('Data de início inválida.');
        }
        let novaDataFim = null;
        if (dataFimDto !== undefined) {
            novaDataFim = dataFimDto ? new Date(dataFimDto) : null;
        }
        else if (vinculoExistente.data_fim) {
            novaDataFim = new Date(vinculoExistente.data_fim);
        }
        if (novaDataFim && isNaN(novaDataFim.getTime())) {
            throw new common_1.BadRequestException('Data de fim inválida.');
        }
        if (novaDataFim && novaDataInicio > novaDataFim) {
            throw new common_1.BadRequestException('Data fim não pode ser anterior à data início.');
        }
        return { novaDataInicio, novaDataFim };
    }
    async obterVinculoExistente(responsavelId, obraId) {
        const vinculo = await this.obrasResponsavelTecnicoRepository.buscarVinculo(responsavelId, obraId);
        if (!vinculo) {
            throw new common_1.NotFoundException(`Vínculo entre responsável ${responsavelId} e obra ${obraId} não encontrado.`);
        }
        return vinculo;
    }
    async verificarConflitosAtualizacao(responsavelId, obraId, novaDataInicio, novaDataFim, tipoVinculo, vinculoIdAtual) {
        const vinculosAtuais = await this.obrasResponsavelTecnicoRepository.buscarVinculosPorResponsavel(responsavelId);
        const conflito = vinculosAtuais.some(v => {
            if (v.id === vinculoIdAtual)
                return false;
            const inicioExistente = v.data_inicio ? new Date(v.data_inicio) : null;
            const fimExistente = v.data_fim ? new Date(v.data_fim) : null;
            return (v.obra.id === obraId &&
                v.tipo_vinculo === tipoVinculo &&
                this.datasSobrepostas(novaDataInicio, novaDataFim, inicioExistente, fimExistente));
        });
        if (conflito) {
            throw new common_1.BadRequestException('Existe sobreposição de datas com outro vínculo do mesmo tipo para esta obra.');
        }
    }
    async executarAtualizacao(responsavelId, obraId, dataInicio, dataFim, tipoVinculo) {
        const dadosAtualizacao = {
            dataInicio: dataInicio.toISOString().split('T')[0],
            dataFim: dataFim ? dataFim.toISOString().split('T')[0] : undefined,
            tipoVinculo: tipoVinculo
        };
        const resultado = await this.obrasResponsavelTecnicoRepository.atualizarVinculo(responsavelId, obraId, dadosAtualizacao);
        if (!resultado) {
            throw new Error('Falha ao atualizar vínculo');
        }
        return resultado;
    }
};
exports.ResponsaveisTecnicosService = ResponsaveisTecnicosService;
exports.ResponsaveisTecnicosService = ResponsaveisTecnicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [responsaveis_tecnicos_repository_1.ResponsaveisTecnicosRepository,
        obras_repository_1.ObrasRepository,
        obra_responsavel_tecnico_repository_1.ObraResponsavelTecnicoRepository,
        document_validator_service_1.DocumentValidatorService])
], ResponsaveisTecnicosService);
//# sourceMappingURL=responsaveis-tecnicos.service.js.map