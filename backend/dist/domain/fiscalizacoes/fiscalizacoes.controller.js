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
exports.FiscalizacoesController = void 0;
const common_1 = require("@nestjs/common");
const fiscalizacoes_entity_1 = require("./entities/fiscalizacoes.entity");
const fiscalizacoes_service_1 = require("./fiscalizacoes.service");
const create_fiscalizacoes_dto_1 = require("./dto/create-fiscalizacoes.dto");
const update_fiscalizacoes_dto_1 = require("./dto/update-fiscalizacoes.dto");
const update_fiscalizacoes_status_dto_1 = require("./dto/update-fiscalizacoes-status.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let FiscalizacoesController = class FiscalizacoesController {
    fiscalizacoesService;
    constructor(fiscalizacoesService) {
        this.fiscalizacoesService = fiscalizacoesService;
    }
    async findAll() {
        try {
            return await this.fiscalizacoesService.findAll();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar fiscalizações.');
        }
    }
    async findRecentes() {
        try {
            return await this.fiscalizacoesService.findRecentes();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar fiscalizações recentes.');
        }
    }
    async findOne(id) {
        try {
            const fiscalizacao = await this.fiscalizacoesService.findOne(id);
            if (!fiscalizacao) {
                throw new common_1.NotFoundException(`Fiscalização com ID ${id} não encontrada.`);
            }
            return fiscalizacao;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.BadRequestException(`Erro ao buscar fiscalização com ID ${id}.`);
        }
    }
    async findByStatus(status) {
        try {
            return await this.fiscalizacoesService.findAllByStatus(status);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao listar fiscalizações com status "${status}".`);
        }
    }
    async findDetalhes(id) {
        try {
            return await this.fiscalizacoesService.findDetalhes(id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao listar fiscalizações detalhadas.');
        }
    }
    async findByObraId(obraId) {
        try {
            return await this.fiscalizacoesService.findByObraId(obraId);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao listar fiscalizações da obra ${obraId}.`);
        }
    }
    async create(dto) {
        try {
            return await this.fiscalizacoesService.create(dto);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erro ao criar fiscalização.');
        }
    }
    async update(id, dto) {
        try {
            return await this.fiscalizacoesService.update(id, dto);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao atualizar fiscalização ${id}.`);
        }
    }
    async patchStatus(id, updateStatusDto) {
        try {
            return await this.fiscalizacoesService.patchStatus(id, updateStatusDto.status);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.BadRequestException(`Erro ao atualizar status da fiscalização ${id}. Detalhes: ${error.message}`);
        }
    }
    async delete(id) {
        try {
            await this.fiscalizacoesService.delete(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao excluir fiscalização com ID ${id}.`);
        }
    }
    async deleteAllByObraId(obraId) {
        try {
            await this.fiscalizacoesService.deleteAllByObraId(obraId);
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao excluir fiscalizações da obra com ID ${obraId}.`);
        }
    }
};
exports.FiscalizacoesController = FiscalizacoesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todas as fiscalizações' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista retornada com sucesso', type: [fiscalizacoes_entity_1.Fiscalizacoes] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro ao listar fiscalizações' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('recentes'),
    (0, swagger_1.ApiOperation)({ summary: 'Lista as 10 fiscalizações mais recentes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista retornada com sucesso', type: [fiscalizacoes_entity_1.Fiscalizacoes] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro ao listar fiscalizações recentes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "findRecentes", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca uma fiscalização pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fiscalização encontrada', type: fiscalizacoes_entity_1.Fiscalizacoes }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fiscalização não encontrada' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro na requisição' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca fiscalizações por status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista retornada com sucesso', type: [fiscalizacoes_entity_1.Fiscalizacoes] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro na requisição' }),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)(':id/detalhes'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca uma fiscalização e suas relações com obras, responsável técnico e relatórios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalhes da fiscalização retornados com sucesso', type: fiscalizacoes_entity_1.Fiscalizacoes }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro na requisição' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "findDetalhes", null);
__decorate([
    (0, common_1.Get)('obras/:id/fiscalizacoes'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca todas as fiscalizações associadas a uma obra' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista retornada com sucesso', type: [fiscalizacoes_entity_1.Fiscalizacoes] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro na requisição' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "findByObraId", null);
__decorate([
    (0, common_1.Post)('obras/fiscalizacao'),
    (0, swagger_1.ApiOperation)({ summary: 'Cria uma fiscalização para uma obra' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Fiscalização criada com sucesso', type: fiscalizacoes_entity_1.Fiscalizacoes }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro na criação da fiscalização' }),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fiscalizacoes_dto_1.CreateFiscalizacoesDto]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza por completo uma fiscalização pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fiscalização atualizada com sucesso', type: fiscalizacoes_entity_1.Fiscalizacoes }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro na atualização da fiscalização' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fiscalização não encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_fiscalizacoes_dto_1.UpdateFiscalizacoesDto]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza o status de uma fiscalização pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status atualizado com sucesso', type: fiscalizacoes_entity_1.Fiscalizacoes }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Requisição inválida ou status inválido' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Fiscalização não encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_fiscalizacoes_status_dto_1.UpdateFiscalizacaoStatusDto]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "patchStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Exclui uma fiscalização pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Fiscalização excluída com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro ao excluir fiscalização' }),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('obras/:id/fiscalizacoes'),
    (0, swagger_1.ApiOperation)({ summary: 'Exclui todas as fiscalizações associadas a uma obra' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Fiscalizações da obra excluídas com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Erro ao excluir fiscalizações da obra' }),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiscalizacoesController.prototype, "deleteAllByObraId", null);
exports.FiscalizacoesController = FiscalizacoesController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Fiscalizações'),
    (0, common_1.Controller)('fiscalizacoes'),
    __metadata("design:paramtypes", [fiscalizacoes_service_1.FiscalizacoesService])
], FiscalizacoesController);
//# sourceMappingURL=fiscalizacoes.controller.js.map