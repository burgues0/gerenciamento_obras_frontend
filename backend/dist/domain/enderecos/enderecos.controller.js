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
exports.ObrasEnderecosController = exports.EnderecosGlobalController = void 0;
const common_1 = require("@nestjs/common");
const enderecos_service_1 = require("./enderecos.service");
const endereco_entity_1 = require("./entities/endereco.entity");
const create_endereco_dto_1 = require("./dto/create-endereco.dto");
const update_endereco_dto_1 = require("./dto/update-endereco.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let EnderecosGlobalController = class EnderecosGlobalController {
    enderecosService;
    constructor(enderecosService) {
        this.enderecosService = enderecosService;
    }
    async findAll() {
        try {
            return await this.enderecosService.findAll();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar endereços: ' + error.message);
        }
    }
};
exports.EnderecosGlobalController = EnderecosGlobalController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os endereços cadastrados' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de endereços retornada com sucesso.', type: [endereco_entity_1.Endereco] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro ao listar endereços.', }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnderecosGlobalController.prototype, "findAll", null);
exports.EnderecosGlobalController = EnderecosGlobalController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Enderecos'),
    (0, common_1.Controller)('enderecos'),
    __metadata("design:paramtypes", [enderecos_service_1.EnderecosService])
], EnderecosGlobalController);
let ObrasEnderecosController = class ObrasEnderecosController {
    enderecosService;
    constructor(enderecosService) {
        this.enderecosService = enderecosService;
    }
    async create(id, endereco) {
        try {
            return await this.enderecosService.create(id, endereco);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao criar endereço da obra: ' + error.message);
        }
    }
    async findOne(id) {
        try {
            return await this.enderecosService.findOne(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao buscar endereço da obra: ' + error.message);
        }
    }
    async update(id, endereco) {
        try {
            await this.enderecosService.update(id, endereco);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar endereço da obra: ' + error.message);
        }
    }
};
exports.ObrasEnderecosController = ObrasEnderecosController;
__decorate([
    (0, common_1.Post)(':id/endereco'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo endereço para uma obra' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Endereço criado com sucesso.', type: endereco_entity_1.Endereco }),
    (0, swagger_1.ApiBody)({ type: create_endereco_dto_1.CreateEnderecoDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_endereco_dto_1.CreateEnderecoDto]),
    __metadata("design:returntype", Promise)
], ObrasEnderecosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/endereco'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar o endereço de uma obra' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Endereço encontrado.', type: endereco_entity_1.Endereco }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Endereço não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ObrasEnderecosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/endereco'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar o endereço de uma obra' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Endereço atualizado com sucesso.', type: endereco_entity_1.Endereco }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Endereço não encontrado.' }),
    (0, swagger_1.ApiBody)({ type: update_endereco_dto_1.UpdateEnderecoDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_endereco_dto_1.UpdateEnderecoDto]),
    __metadata("design:returntype", Promise)
], ObrasEnderecosController.prototype, "update", null);
exports.ObrasEnderecosController = ObrasEnderecosController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Enderecos'),
    (0, common_1.Controller)('obras'),
    __metadata("design:paramtypes", [enderecos_service_1.EnderecosService])
], ObrasEnderecosController);
//# sourceMappingURL=enderecos.controller.js.map