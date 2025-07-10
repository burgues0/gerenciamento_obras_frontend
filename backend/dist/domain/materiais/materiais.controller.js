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
exports.MateriaisController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const materiais_service_1 = require("./materiais.service");
const create_material_dto_1 = require("./dto/create-material.dto");
const update_material_dto_1 = require("./dto/update-material.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let MateriaisController = class MateriaisController {
    materiaisService;
    constructor(materiaisService) {
        this.materiaisService = materiaisService;
    }
    async create(dto) {
        return this.materiaisService.create(dto);
    }
    async findAll() {
        return this.materiaisService.findAll();
    }
    async findOne(id) {
        return this.materiaisService.findOne(id);
    }
    async update(id, dto) {
        await this.materiaisService.update(id, dto);
    }
    async remove(id) {
        await this.materiaisService.remove(id);
    }
};
exports.MateriaisController = MateriaisController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo material' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Material criado com sucesso.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos ou incompletos.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Material com este nome/código já existe.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_material_dto_1.CreateMaterialDto]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os materiais' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de materiais retornada com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter um material por ID' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Material encontrado com sucesso.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Material não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um material existente' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Material atualizado com sucesso.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos ou nenhuma alteração fornecida.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Material não encontrado.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Novo nome/código já está em uso.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_material_dto_1.UpdateMaterialDto]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um material' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Material removido com sucesso.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Material não encontrado.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Material está vinculado a obras e não pode ser removido.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "remove", null);
exports.MateriaisController = MateriaisController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Materiais'),
    (0, common_1.Controller)('materiais'),
    __metadata("design:paramtypes", [materiais_service_1.MateriaisService])
], MateriaisController);
//# sourceMappingURL=materiais.controller.js.map