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
exports.ObrasController = void 0;
const common_1 = require("@nestjs/common");
const obras_service_1 = require("./obras.service");
const obras_entity_1 = require("./entities/obras.entity");
const create_obra_dto_1 = require("./dto/create-obra.dto");
const update_obra_dto_1 = require("./dto/update-obra.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ObrasController = class ObrasController {
    obrasService;
    constructor(obrasService) {
        this.obrasService = obrasService;
    }
    async findAll() {
        try {
            return await this.obrasService.findAll();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar obras: ' + error.message);
        }
    }
    async findOne(id) {
        try {
            return await this.obrasService.findOne(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao buscar obra: ' + error.message);
        }
    }
    async create(data) {
        try {
            return await this.obrasService.create(data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao criar obra: ' + error.message);
        }
    }
    async update(id, data) {
        try {
            return await this.obrasService.update(id, data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar obra: ' + error.message);
        }
    }
    async remove(id) {
        try {
            await this.obrasService.remove(id);
            return { message: `Obra com id ${id} removida com sucesso.` };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao remover obra: ' + error.message);
        }
    }
};
exports.ObrasController = ObrasController;
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as obras' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de obras retornada com sucesso.', type: [obras_entity_1.Obras] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ObrasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma obra por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obra encontrada.', type: obras_entity_1.Obras }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Obra não encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ObrasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova obra' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Obra criada com sucesso.', type: obras_entity_1.Obras }),
    (0, swagger_1.ApiBody)({ type: create_obra_dto_1.CreateObraDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_obra_dto_1.CreateObraDto]),
    __metadata("design:returntype", Promise)
], ObrasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma obra existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obra atualizada com sucesso.', type: obras_entity_1.Obras }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Obra não encontrada.' }),
    (0, swagger_1.ApiBody)({ type: update_obra_dto_1.UpdateObraDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_obra_dto_1.UpdateObraDto]),
    __metadata("design:returntype", Promise)
], ObrasController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma obra por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obra removida com sucesso.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Obra não encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ObrasController.prototype, "remove", null);
exports.ObrasController = ObrasController = __decorate([
    (0, swagger_1.ApiTags)('Obras'),
    (0, common_1.Controller)('obras'),
    __metadata("design:paramtypes", [obras_service_1.ObrasService])
], ObrasController);
//# sourceMappingURL=obras.controller.js.map