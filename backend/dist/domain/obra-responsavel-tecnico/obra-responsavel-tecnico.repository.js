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
exports.ObraResponsavelTecnicoRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const obra_responsavel_tecnico_entity_1 = require("./entities/obra-responsavel-tecnico.entity");
let ObraResponsavelTecnicoRepository = class ObraResponsavelTecnicoRepository {
    obraRespTecnicoModel;
    constructor(obraRespTecnicoModel) {
        this.obraRespTecnicoModel = obraRespTecnicoModel;
    }
    async criarVinculo(responsavelTecnicoId, data) {
        const vinculo = await this.obraRespTecnicoModel.create({
            responsavelTecnicoId,
            obraId: data.obraId,
            data_inicio: new Date(data.dataInicio),
            data_fim: data.dataFim ? new Date(data.dataFim) : null,
            tipo_vinculo: data.tipoVinculo ?? 'RT Geral',
        });
        return vinculo;
    }
    async buscarVinculosPorResponsavel(responsavelTecnicoId) {
        return this.obraRespTecnicoModel.findAll({
            where: { responsavelTecnicoId },
            include: [{ association: 'obra' }],
        });
    }
    async buscarVinculo(responsavelTecnicoId, obraId) {
        return this.obraRespTecnicoModel.findOne({
            where: { responsavelTecnicoId, obraId },
            include: [
                { association: 'obra' },
                { association: 'responsavel' },
            ],
        });
    }
    async atualizarVinculo(responsavelTecnicoId, obraId, dadosAtualizacao) {
        const vinculo = await this.obraRespTecnicoModel.findOne({
            where: { responsavelTecnicoId, obraId },
        });
        if (!vinculo)
            return null;
        if (dadosAtualizacao.dataInicio !== undefined) {
            vinculo.data_inicio = new Date(dadosAtualizacao.dataInicio);
        }
        if (dadosAtualizacao.dataFim !== undefined) {
            vinculo.data_fim = dadosAtualizacao.dataFim ? new Date(dadosAtualizacao.dataFim) : undefined;
        }
        if (dadosAtualizacao.tipoVinculo !== undefined) {
            vinculo.tipo_vinculo = dadosAtualizacao.tipoVinculo;
        }
        await vinculo.save();
        return vinculo;
    }
    async removerVinculo(responsavelTecnicoId, obraId) {
        await this.obraRespTecnicoModel.destroy({
            where: { responsavelTecnicoId, obraId },
        });
    }
};
exports.ObraResponsavelTecnicoRepository = ObraResponsavelTecnicoRepository;
exports.ObraResponsavelTecnicoRepository = ObraResponsavelTecnicoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico)),
    __metadata("design:paramtypes", [Object])
], ObraResponsavelTecnicoRepository);
//# sourceMappingURL=obra-responsavel-tecnico.repository.js.map