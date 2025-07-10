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
exports.ObrasController = exports.FornecedoresController = void 0;
const common_1 = require("@nestjs/common");
const fornecedores_service_1 = require("./fornecedores.service");
const fornecedores_entity_1 = require("./entities/fornecedores.entity");
const create_fornecedores_dto_1 = require("./dto/create-fornecedores.dto");
const update_fornecedores_dto_1 = require("./dto/update-fornecedores.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const ParseIntPipeCustom = new common_1.ParseIntPipe({
    exceptionFactory: () => new common_1.BadRequestException('O parâmetro id deve ser um número válido'),
});
let FornecedoresController = class FornecedoresController {
    fornecedoresService;
    constructor(fornecedoresService) {
        this.fornecedoresService = fornecedoresService;
    }
    async findAll() {
        try {
            return await this.fornecedoresService.findAll();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar fornecedores: ' + error.message);
        }
    }
    async findOne(id) {
        try {
            return await this.fornecedoresService.findOne(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao buscar fornecedor: ' + error.message);
        }
    }
    async create(data) {
        try {
            return await this.fornecedoresService.create(data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao criar fornecedor: ' + error.message);
        }
    }
    async update(id, data) {
        try {
            return await this.fornecedoresService.update(id, data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar fornecedor: ' + error.message);
        }
    }
    async updateActive(id, ativo) {
        try {
            return await this.fornecedoresService.updateActive(id, ativo);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar o campo ativo do fornecedor: ' + error.message);
        }
    }
    async remove(id) {
        try {
            await this.fornecedoresService.remove(id);
            return { message: `Fornecedor com id ${id} removido com sucesso.` };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao remover fornecedor: ' + error.message);
        }
    }
};
exports.FornecedoresController = FornecedoresController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os fornecedores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de fornecedores retornada com sucesso.', type: [fornecedores_entity_1.Fornecedores] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar fornecedor por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fornecedor encontrado.', type: fornecedores_entity_1.Fornecedores }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fornecedor não encontrado.' }),
    __param(0, (0, common_1.Param)('id', ParseIntPipeCustom)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo fornecedor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Fornecedor criado com sucesso.', type: fornecedores_entity_1.Fornecedores }),
    (0, swagger_1.ApiBody)({ type: create_fornecedores_dto_1.CreateFornecedoresDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fornecedores_dto_1.CreateFornecedoresDto]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar fornecedor existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fornecedor atualizado com sucesso.', type: fornecedores_entity_1.Fornecedores }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fornecedor não encontrado.' }),
    (0, swagger_1.ApiBody)({ type: update_fornecedores_dto_1.UpdateFornecedoresDto }),
    __param(0, (0, common_1.Param)('id', ParseIntPipeCustom)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar parcialmente o campo ativo do fornecedor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Campo ativo atualizado com sucesso.', type: fornecedores_entity_1.Fornecedores }),
    __param(0, (0, common_1.Param)('id', ParseIntPipeCustom)),
    __param(1, (0, common_1.Body)('ativo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "updateActive", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover fornecedor por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fornecedor removido com sucesso.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fornecedor não encontrado.' }),
    __param(0, (0, common_1.Param)('id', ParseIntPipeCustom)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "remove", null);
exports.FornecedoresController = FornecedoresController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Fornecedores'),
    (0, common_1.Controller)('fornecedores'),
    __metadata("design:paramtypes", [fornecedores_service_1.FornecedoresService])
], FornecedoresController);
let ObrasController = class ObrasController {
    fornecedoresService;
    constructor(fornecedoresService) {
        this.fornecedoresService = fornecedoresService;
    }
    async findSuppliersByObra(id) {
        try {
            return await this.fornecedoresService.findSuppliersByObra(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao visualizar fornecedores da obra: ' + error.message);
        }
    }
};
exports.ObrasController = ObrasController;
__decorate([
    (0, common_1.Get)(':id/fornecedores'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar fornecedores vinculados a uma obra pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fornecedores listados com sucesso.' }),
    __param(0, (0, common_1.Param)('id', ParseIntPipeCustom)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ObrasController.prototype, "findSuppliersByObra", null);
exports.ObrasController = ObrasController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Fornecedores'),
    (0, common_1.Controller)('obras'),
    __metadata("design:paramtypes", [fornecedores_service_1.FornecedoresService])
], ObrasController);
//# sourceMappingURL=fornecedores.controller.js.map