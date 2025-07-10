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
exports.ObrasEquipamentoController = exports.EquipamentosController = void 0;
const common_1 = require("@nestjs/common");
const equipamentos_service_1 = require("./equipamentos.service");
const create_equipamento_dto_1 = require("./dto/create-equipamento.dto");
const equipamento_entity_1 = require("./entities/equipamento.entity");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let EquipamentosController = class EquipamentosController {
    equipamentosService;
    constructor(equipamentosService) {
        this.equipamentosService = equipamentosService;
    }
    async findAll() {
        try {
            return await this.equipamentosService.findAll();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar equipamentos: ' + error.message);
        }
    }
    async findOne(id) {
        try {
            return await this.equipamentosService.findOne(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao buscar equipamento: ' + error.message);
        }
    }
    async create(equipamentos) {
        try {
            return await this.equipamentosService.create(equipamentos);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao criar equipamento: ' + error.message);
        }
    }
    async update(id, data) {
        try {
            await this.equipamentosService.update(id, data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar equipamento: ' + error.message);
        }
    }
    async updateObras(id, obras) {
        try {
            await this.equipamentosService.updateObras(id, obras);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar obras do equipamento: ' + error.message);
        }
    }
    async remove(id) {
        try {
            await this.equipamentosService.delete(id);
            return { message: 'Equipamento removido com sucesso.' };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao remover equipamento: ' + error.message);
        }
    }
};
exports.EquipamentosController = EquipamentosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os equipamentos' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de equipamentos retornada com sucesso.', type: [equipamento_entity_1.Equipamentos] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar equipamento por ID' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Equipamento encontrado.', type: equipamento_entity_1.Equipamentos }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Equipamento não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo equipamento' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Equipamento criado com sucesso.', type: equipamento_entity_1.Equipamentos }),
    (0, swagger_1.ApiBody)({ type: create_equipamento_dto_1.CreateEquipamentoDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equipamento_dto_1.CreateEquipamentoDto]),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um equipamento existente' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Equipamento atualizado com sucesso.', type: equipamento_entity_1.Equipamentos }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Equipamento não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar as obras associadas a um equipamento' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Obras do equipamento atualizadas com sucesso.', type: equipamento_entity_1.Equipamentos }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Equipamento não encontrado.' }),
    (0, swagger_1.ApiBody)({ schema: { type: 'object', properties: { obras: { type: 'array', items: { type: 'number' } } } } }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('obras')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "updateObras", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover equipamento por ID' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Equipamento removido com sucesso.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Equipamento não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "remove", null);
exports.EquipamentosController = EquipamentosController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Equipamentos'),
    (0, common_1.Controller)('equipamentos'),
    __metadata("design:paramtypes", [equipamentos_service_1.EquipamentosService])
], EquipamentosController);
let ObrasEquipamentoController = class ObrasEquipamentoController {
    equipamentosService;
    constructor(equipamentosService) {
        this.equipamentosService = equipamentosService;
    }
    async findEquipamentosByObra(id) {
        try {
            return await this.equipamentosService.getEquipamentosByObraId(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao visualizar equipamentos da obra: ' + error.message);
        }
    }
};
exports.ObrasEquipamentoController = ObrasEquipamentoController;
__decorate([
    (0, common_1.Get)(':id/equipamentos'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar equipamentos de uma obra pelo ID da obra' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Equipamentos da obra retornados com sucesso.', type: [equipamento_entity_1.Equipamentos] }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ObrasEquipamentoController.prototype, "findEquipamentosByObra", null);
exports.ObrasEquipamentoController = ObrasEquipamentoController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Equipamentos'),
    (0, common_1.Controller)('obras'),
    __metadata("design:paramtypes", [equipamentos_service_1.EquipamentosService])
], ObrasEquipamentoController);
//# sourceMappingURL=equipamentos.controller.js.map