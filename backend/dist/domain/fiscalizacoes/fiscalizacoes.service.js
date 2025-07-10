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
exports.FiscalizacoesService = void 0;
const common_1 = require("@nestjs/common");
const fiscalizacoes_repository_1 = require("./fiscalizacoes.repository");
const obras_entity_1 = require("../obras/entities/obras.entity");
const responsavel_tecnico_entity_1 = require("../responsaveis-tecnicos/entities/responsavel-tecnico.entity");
let FiscalizacoesService = class FiscalizacoesService {
    fiscalizacoesRepository;
    constructor(fiscalizacoesRepository) {
        this.fiscalizacoesRepository = fiscalizacoesRepository;
    }
    async findAll() {
        return this.fiscalizacoesRepository.findAll();
    }
    async findOne(id) {
        return this.fiscalizacoesRepository.findOne(id);
    }
    async findDetalhes(id) {
        return await this.fiscalizacoesRepository.findDetalhes(id);
    }
    async findAllByStatus(status) {
        const fiscalizacoes = this.fiscalizacoesRepository.findAllByStatus(status);
        if ((await fiscalizacoes).length === 0)
            throw new common_1.NotFoundException(`Não há fiscalizações com o status ${status}`);
        return fiscalizacoes;
    }
    async findRecentes() {
        return await this.fiscalizacoesRepository.findRecentes();
    }
    async findByObraId(obraId) {
        return this.fiscalizacoesRepository.findByObraId(obraId);
    }
    async create(dto) {
        const { data_inicio, data_fim, responsavelTecnicoId, obraIds } = dto;
        const hoje = new Date();
        const dataInicio = new Date(data_inicio);
        const dataFim = data_fim ? new Date(data_fim) : null;
        const responsavel = await responsavel_tecnico_entity_1.ResponsavelTecnico.findByPk(responsavelTecnicoId);
        if (!responsavel || !responsavel.ativo)
            throw new common_1.BadRequestException(`Responsável técnico ID ${responsavelTecnicoId} inválido ou inativo.`);
        if (dataInicio > hoje)
            throw new common_1.BadRequestException('A fiscalização não pode ter uma data futura.');
        if (dataFim && dataFim < dataInicio)
            throw new common_1.BadRequestException('A data de fim não pode ser anterior ao início da fiscalização.');
        for (const obraId of obraIds) {
            const obra = await obras_entity_1.Obras.findByPk(obraId);
            if (!obra)
                throw new common_1.NotFoundException(`Obra com ID ${obraId} não encontrada.`);
            if (obra.status === 'Concluída')
                throw new common_1.BadRequestException('Não é possível adicionar fiscalização a uma obra concluída.');
        }
        return this.fiscalizacoesRepository.create(dto);
    }
    async update(id, dto) {
        if (dto.responsavelTecnicoId) {
            const responsavel = await responsavel_tecnico_entity_1.ResponsavelTecnico.findByPk(dto.responsavelTecnicoId);
            if (!responsavel || !responsavel.ativo)
                throw new common_1.BadRequestException(`Responsável técnico ID ${dto.responsavelTecnicoId} inválido ou inativo.`);
        }
        const fiscalizacaoExistente = await this.fiscalizacoesRepository.findOne(id);
        if (!fiscalizacaoExistente)
            throw new common_1.NotFoundException(`Fiscalização com ID ${id} não encontrada para atualização.`);
        const dataInicioValidate = dto.data_inicio || fiscalizacaoExistente.data_inicio;
        const dataFimValidate = dto.data_fim || fiscalizacaoExistente.data_fim;
        if (dataInicioValidate && dataFimValidate && dataFimValidate < dataInicioValidate)
            throw new common_1.BadRequestException('A data de fim não pode ser menor que a data de início.');
        if (dto.obraIds && dto.obraIds.length > 0) {
            const obrasExistentes = await obras_entity_1.Obras.findAll({ where: { id: dto.obraIds } });
            if (obrasExistentes.length !== dto.obraIds.length) {
                const foundIds = new Set(obrasExistentes.map(obra => obra.id));
                const missingIds = dto.obraIds.filter(id => !foundIds.has(id));
                throw new common_1.BadRequestException(`As seguintes Obras com IDs não foram encontradas: ${missingIds.join(', ')}.`);
            }
            const fiscalizacaoAtualizada = await this.fiscalizacoesRepository.update(id, dto);
            await fiscalizacaoAtualizada.$set('obras', obrasExistentes);
            return fiscalizacaoAtualizada;
        }
        else if (dto.obraIds && dto.obraIds.length === 0) {
            const fiscalizacaoAtualizada = await this.fiscalizacoesRepository.update(id, dto);
            await fiscalizacaoAtualizada.$set('obras', []);
            return fiscalizacaoAtualizada;
        }
        return this.fiscalizacoesRepository.update(id, dto);
    }
    async patchStatus(id, status) {
        const fiscalizacao = await this.fiscalizacoesRepository.findOne(id);
        if (!fiscalizacao)
            throw new common_1.NotFoundException(`Fiscalização com ID ${id} não encontrada.`);
        const updateStatus = { status: status };
        return this.fiscalizacoesRepository.patch(id, updateStatus);
    }
    async delete(id) {
        return this.fiscalizacoesRepository.delete(id);
    }
    async deleteAllByObraId(obraId) {
        return await this.fiscalizacoesRepository.deleteAllByObraId(obraId);
    }
};
exports.FiscalizacoesService = FiscalizacoesService;
exports.FiscalizacoesService = FiscalizacoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fiscalizacoes_repository_1.FiscalizacoesRepository])
], FiscalizacoesService);
//# sourceMappingURL=fiscalizacoes.service.js.map