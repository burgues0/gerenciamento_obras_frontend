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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalizacoesRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const fiscalizacoes_entity_1 = require("./entities/fiscalizacoes.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const responsavel_tecnico_entity_1 = require("../responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const obras_fiscalizacoes_entity_1 = require("../obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
let FiscalizacoesRepository = class FiscalizacoesRepository {
    fiscalizacoesModel;
    constructor(fiscalizacoesModel) {
        this.fiscalizacoesModel = fiscalizacoesModel;
    }
    async findAll() {
        return this.fiscalizacoesModel.findAll();
    }
    async findOne(id) {
        return await this.fiscalizacoesModel.findOne({
            where: { id },
        });
    }
    async findDetalhes(id) {
        return await this.fiscalizacoesModel.findOne({
            where: { id },
            include: [obras_entity_1.Obras, responsavel_tecnico_entity_1.ResponsavelTecnico],
        });
    }
    async findAllByStatus(status) {
        return await this.fiscalizacoesModel.findAll({ where: { status } });
    }
    async findRecentes() {
        return await this.fiscalizacoesModel.findAll({
            order: [['data_inicio', 'DESC']],
            limit: 10,
        });
    }
    async findByObraId(obraId) {
        return await this.fiscalizacoesModel.findAll({
            include: [{
                    where: { id: obraId },
                    model: obras_entity_1.Obras,
                }],
        });
    }
    async create(dto) {
        const fiscalizacao = await this.fiscalizacoesModel.create(dto);
        const { obraIds } = dto;
        for (const obraId of obraIds) {
            const obra = await obras_entity_1.Obras.findByPk(obraId);
            if (!obra)
                throw new common_1.NotFoundException(`Obra com ID ${obraId} não encontrada.`);
            await obra.$add('fiscalizacoes', fiscalizacao);
        }
        return fiscalizacao;
    }
    async update(id, dto) {
        const fiscalizacao = await this.fiscalizacoesModel.findByPk(id);
        if (!fiscalizacao)
            throw new common_1.NotFoundException(`Fiscalização com ID ${id} não encontrada`);
        await fiscalizacao.update(dto);
        return fiscalizacao;
    }
    async patch(id, dto) {
        const fiscalizacao = await this.fiscalizacoesModel.findByPk(id);
        if (!fiscalizacao)
            throw new common_1.NotFoundException(`Fiscalização com ID ${id} não encontrada.`);
        await fiscalizacao.update(dto);
        return fiscalizacao;
    }
    async delete(id) {
        const fiscalizacao = await this.fiscalizacoesModel.findByPk(id);
        if (!fiscalizacao)
            throw new common_1.NotFoundException(`Fiscalização com ID ${id} não encontrada`);
        await fiscalizacao.destroy();
    }
    async deleteAllByObraId(obraId) {
        const fiscalizacoes = await this.fiscalizacoesModel.findAll({
            include: [{ model: obras_entity_1.Obras, where: { id: obraId } }]
        });
        if (fiscalizacoes.length === 0) {
            throw new common_1.NotFoundException(`Nenhuma fiscalização encontrada para a obra com ID ${obraId}.`);
        }
        await Promise.all(fiscalizacoes.map(async (fiscalizacao) => {
            await obras_fiscalizacoes_entity_1.ObrasFiscalizacoes.destroy({
                where: { obraId, fiscalizacaoId: fiscalizacao.id }
            });
        }));
    }
};
exports.FiscalizacoesRepository = FiscalizacoesRepository;
exports.FiscalizacoesRepository = FiscalizacoesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(fiscalizacoes_entity_1.Fiscalizacoes)),
    __metadata("design:paramtypes", [Object])
], FiscalizacoesRepository);
//# sourceMappingURL=fiscalizacoes.repository.js.map