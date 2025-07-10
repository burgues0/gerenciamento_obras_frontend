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
exports.RelatoriosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const relatorios_service_1 = require("./relatorios.service");
const create_relatorios_dto_1 = require("./dto/create-relatorios.dto");
const update_relatorios_dto_1 = require("./dto/update-relatorios.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let RelatoriosController = class RelatoriosController {
    relatoriosService;
    constructor(relatoriosService) {
        this.relatoriosService = relatoriosService;
    }
    async findAll() {
        try {
            return await this.relatoriosService.findAll();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar relatórios.');
        }
    }
    async findOne(id) {
        try {
            return await this.relatoriosService.findOne(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw new common_1.NotFoundException(`Relatorio com ID ${id} não encontrado.`);
            throw new common_1.BadRequestException(`Erro ao buscar relatório com ID ${id}.`);
        }
    }
    async findByFiscalizacao(fiscalizacaoId) {
        try {
            return await this.relatoriosService.findByFiscalizacao(fiscalizacaoId);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao listar relatórios da fiscalização com ID ${fiscalizacaoId}.`);
        }
    }
    async create(fiscalizacaoId, dto) {
        try {
            return await this.relatoriosService.create(fiscalizacaoId, dto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw new common_1.NotFoundException(`Fiscalização com ID ${fiscalizacaoId} não encontrada.`);
            throw new common_1.BadRequestException(`Erro ao criar relatório para fiscalização ID ${fiscalizacaoId}.`);
        }
    }
    async update(id, dto) {
        try {
            return await this.relatoriosService.update(id, dto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw new common_1.NotFoundException(`Relatorio com ID ${id} não encontrado.`);
            throw new common_1.BadRequestException(`Erro ao atualizar relatorio com ID ${id}.`);
        }
    }
    async delete(id) {
        try {
            await this.relatoriosService.delete(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao excluir relatório com ID ${id}.`);
        }
    }
    async deleteByFiscalizacao(fiscalizacaoId) {
        try {
            await this.relatoriosService.deleteByFiscalizacao(fiscalizacaoId);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao excluir relatórios da fiscalização ${fiscalizacaoId}.`);
        }
    }
};
exports.RelatoriosController = RelatoriosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todos os relatórios' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de relatórios retornada com sucesso' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca um relatório específico pelo ID' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Relatório encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relatório não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/fiscalizacoes/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Lista os relatórios de uma fiscalização específica' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de relatórios retornada com sucesso' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "findByFiscalizacao", null);
__decorate([
    (0, common_1.Post)('/fiscalizacoes/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo relatório para uma fiscalização' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Relatório criado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro na criação do relatório' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_relatorios_dto_1.CreateRelatoriosDto]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza um relatório pelo ID' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Relatório atualizado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relatório não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_relatorios_dto_1.UpdateRelatoriosDto]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Exclui um relatório pelo ID' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Relatório excluído com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relatório não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('/fiscalizacoes/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Exclui todos os relatórios de uma fiscalização' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Todos os relatórios excluídos com sucesso' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "deleteByFiscalizacao", null);
exports.RelatoriosController = RelatoriosController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Relatórios'),
    (0, common_1.Controller)('relatorios'),
    __metadata("design:paramtypes", [relatorios_service_1.RelatoriosService])
], RelatoriosController);
//# sourceMappingURL=relatorios.controller.js.map