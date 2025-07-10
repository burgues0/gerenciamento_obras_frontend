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
exports.RelatoriosRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const relatorios_entity_1 = require("./entities/relatorios.entity");
let RelatoriosRepository = class RelatoriosRepository {
    relatoriosModel;
    constructor(relatoriosModel) {
        this.relatoriosModel = relatoriosModel;
    }
    async findAll() {
        return this.relatoriosModel.findAll();
    }
    async findOne(id) {
        return await this.relatoriosModel.findOne({
            where: { id },
        });
    }
    async findByFiscalizacao(fiscalizacaoId) {
        return await this.relatoriosModel.findAll({
            where: { fiscalizacaoId },
        });
    }
    async create(fiscalizacaoId, dto) {
        return await this.relatoriosModel.create({ ...dto, fiscalizacaoId });
    }
    async update(id, dto) {
        const relatorio = await this.relatoriosModel.findByPk(id);
        if (!relatorio)
            throw new common_1.NotFoundException(`Relatório com ID ${id} não encontrado.`);
        await relatorio.update(dto);
        return relatorio;
    }
    async delete(id) {
        const relatorio = await this.relatoriosModel.findByPk(id);
        if (!relatorio)
            throw new common_1.NotFoundException(`Relatório com ID ${id} não encontrado.`);
        await relatorio.destroy();
    }
    async deleteByFiscalizacao(fiscalizacaoId) {
        await this.relatoriosModel.destroy({ where: { fiscalizacaoId } });
    }
};
exports.RelatoriosRepository = RelatoriosRepository;
exports.RelatoriosRepository = RelatoriosRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(relatorios_entity_1.Relatorios)),
    __metadata("design:paramtypes", [Object])
], RelatoriosRepository);
//# sourceMappingURL=relatorios.repository.js.map