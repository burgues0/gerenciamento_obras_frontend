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
exports.DiarioDeObraController = void 0;
const common_1 = require("@nestjs/common");
const create_diario_de_obra_dto_1 = require("./dto/create-diario-de-obra.dto");
const diario_de_obra_service_1 = require("./diario-de-obra.service");
const update_diario_de_obra_dto_1 = require("./dto/update-diario-de-obra.dto");
const swagger_1 = require("@nestjs/swagger");
const diario_de_obra_entity_1 = require("./entities/diario-de-obra.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let DiarioDeObraController = class DiarioDeObraController {
    diarioDeObraService;
    constructor(diarioDeObraService) {
        this.diarioDeObraService = diarioDeObraService;
    }
    async create(idObra, dto) {
        try {
            return await this.diarioDeObraService.create({ ...dto, obraId: idObra });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao criar diário de obra: ${error.message}`);
        }
    }
    async findAll(idObra) {
        try {
            return await this.diarioDeObraService.findAllByObra(idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao buscar diários de obra: ${error.message}`);
        }
    }
    async findOne(idObra, diarioId) {
        try {
            return await this.diarioDeObraService.findById(diarioId, idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao buscar diário de obra: ${error.message}`);
        }
    }
    async update(idObra, diarioId, dto) {
        try {
            await this.diarioDeObraService.update(diarioId, dto, idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao atualizar diário de obra: ${error.message}`);
        }
    }
    async remove(idObra, diarioId) {
        try {
            return await this.diarioDeObraService.remove(diarioId, idObra);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao remover diário de obra: ${error.message}`);
        }
    }
};
exports.DiarioDeObraController = DiarioDeObraController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo diário de obra', description: 'Registra um novo diário de obra para a obra especificada' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Diário de obra criado com sucesso', type: diario_de_obra_entity_1.DiarioDeObra }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos ou erro na criação' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Obra não encontrada' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_diario_de_obra_dto_1.CreateDiarioDeObraDto]),
    __metadata("design:returntype", Promise)
], DiarioDeObraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar diários de obra', description: 'Retorna todos os diários de obra associados à obra especificada' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de diários de obra retornada com sucesso', type: [diario_de_obra_entity_1.DiarioDeObra] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro ao buscar diários' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiarioDeObraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':diarioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter diário específico', description: 'Retorna um diário de obra específico pelo seu ID' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Diário de obra retornado com sucesso', type: diario_de_obra_entity_1.DiarioDeObra }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Diário não encontrado' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('diarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DiarioDeObraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':diarioId'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar diário de obra', description: 'Atualiza os dados de um diário de obra existente' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Diário atualizado com sucesso', type: diario_de_obra_entity_1.DiarioDeObra }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos ou erro na atualização' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Diário não encontrado' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('diarioId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_diario_de_obra_dto_1.UpdateDiarioDeObraDto]),
    __metadata("design:returntype", Promise)
], DiarioDeObraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':diarioId'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ summary: 'Remover diário de obra', description: 'Remove permanentemente um diário de obra' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Diário removido com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Diário não encontrado' }),
    __param(0, (0, common_1.Param)('idObra', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('diarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DiarioDeObraController.prototype, "remove", null);
exports.DiarioDeObraController = DiarioDeObraController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Diarios de Obra'),
    (0, common_1.Controller)('obras/:idObra/diarios'),
    __metadata("design:paramtypes", [diario_de_obra_service_1.DiarioDeObraService])
], DiarioDeObraController);
//# sourceMappingURL=diario-de-obra.controller.js.map