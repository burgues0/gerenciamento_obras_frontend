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
exports.EtapasDaObraController = void 0;
const common_1 = require("@nestjs/common");
const etapas_da_obra_service_1 = require("./etapas-da-obra.service");
const create_etapas_da_obra_dto_1 = require("./dto/create-etapas-da-obra.dto");
const update_etapas_da_obra_dto_1 = require("./dto/update-etapas-da-obra.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const etapas_da_obra_entity_1 = require("./entities/etapas-da-obra.entity");
let EtapasDaObraController = class EtapasDaObraController {
    etapaObraService;
    constructor(etapaObraService) {
        this.etapaObraService = etapaObraService;
    }
    async create(idObra, dto) {
        try {
            return await this.etapaObraService.create({ ...dto, obraId: idObra });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao criar etapa da obra: ${error.message}`);
        }
    }
    async findAll(idObra) {
        try {
            return await this.etapaObraService.findAllByObra(idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao buscar etapas da obra: ${error.message}`);
        }
    }
    async findOne(idObra, etapaId) {
        try {
            return await this.etapaObraService.findById(etapaId, idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao buscar etapa da obra: ${error.message}`);
        }
    }
    async update(idObra, etapaId, dto) {
        try {
            await this.etapaObraService.update(etapaId, dto, idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao atualizar etapa da obra: ${error.message}`);
        }
    }
    async remove(idObra, etapaId) {
        try {
            await this.etapaObraService.remove(etapaId, idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao remover etapa da obra: ${error.message}`);
        }
    }
};
exports.EtapasDaObraController = EtapasDaObraController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar nova etapa da obra', description: 'Registra uma nova etapa para a obra especificada' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Etapa criada com sucesso', type: etapas_da_obra_entity_1.EtapasDaObra }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos ou erro na criação' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_etapas_da_obra_dto_1.CreateEtapasDaObraDto]),
    __metadata("design:returntype", Promise)
], EtapasDaObraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar etapas da obra', description: 'Retorna todas as etapas associadas à obra especificada' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de etapas retornada com sucesso', type: [etapas_da_obra_entity_1.EtapasDaObra] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro ao buscar etapas' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EtapasDaObraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':etapaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter etapa específica', description: 'Retorna uma etapa da obra específica pelo seu ID' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Etapa retornada com sucesso', type: etapas_da_obra_entity_1.EtapasDaObra }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Etapa não encontrada' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('etapaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EtapasDaObraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':etapaId'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar etapa da obra', description: 'Atualiza os dados de uma etapa existente' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Etapa atualizada com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos ou erro na atualização' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Etapa não encontrada' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('etapaId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_etapas_da_obra_dto_1.UpdateEtapasDaObraDto]),
    __metadata("design:returntype", Promise)
], EtapasDaObraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':etapaId'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ summary: 'Remover etapa da obra', description: 'Remove permanentemente uma etapa da obra' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Etapa removida com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Etapa não encontrada' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('etapaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EtapasDaObraController.prototype, "remove", null);
exports.EtapasDaObraController = EtapasDaObraController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Etapas da Obra'),
    (0, common_1.Controller)('obras/:idObra/etapas'),
    __metadata("design:paramtypes", [etapas_da_obra_service_1.EtapasDaObraService])
], EtapasDaObraController);
//# sourceMappingURL=etapas-da-obra.controller.js.map