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
exports.ResponsaveisTecnicosController = void 0;
const common_1 = require("@nestjs/common");
const responsaveis_tecnicos_service_1 = require("./responsaveis-tecnicos.service");
const responsavel_tecnico_entity_1 = require("./entities/responsavel-tecnico.entity");
const swagger_1 = require("@nestjs/swagger");
const create_responsavel_tecnico_dto_1 = require("./dto/create-responsavel-tecnico.dto");
const update_responsavel_tecnico_dto_1 = require("./dto/update-responsavel-tecnico.dto");
const create_obra_responsavel_tecnico_dto_1 = require("../obra-responsavel-tecnico/dto/create-obra-responsavel-tecnico.dto");
const obra_responsavel_tecnico_entity_1 = require("../obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const update_obra_responsavel_tecnico_dto_1 = require("../obra-responsavel-tecnico/dto/update-obra-responsavel-tecnico.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ResponsaveisTecnicosController = class ResponsaveisTecnicosController {
    responsavelTecnicoService;
    constructor(responsavelTecnicoService) {
        this.responsavelTecnicoService = responsavelTecnicoService;
    }
    async findAll() {
        return await this.responsavelTecnicoService.findAll();
    }
    async findOne(id) {
        return await this.responsavelTecnicoService.findOne(id);
    }
    async create(dto) {
        return await this.responsavelTecnicoService.create(dto);
    }
    async update(id, dto) {
        await this.responsavelTecnicoService.update(id, dto);
    }
    async remove(id) {
        await this.responsavelTecnicoService.remove(id);
    }
    async addObras(id, vinculosDto) {
        return await this.responsavelTecnicoService.createVinculosObra(id, vinculosDto);
    }
    async updateVinculoObra(responsavelId, obraId, dto) {
        await this.responsavelTecnicoService.updateVinculoObra(responsavelId, obraId, dto);
    }
    async findAllVinculoObras(id) {
        return await this.responsavelTecnicoService.findAllVinculosObra(id);
    }
    async findVinculoObra(responsavelId, obraId) {
        return await this.responsavelTecnicoService.findVinculoObra(responsavelId, obraId);
    }
    async deleteVinculoObra(responsavelId, obraId) {
        await this.responsavelTecnicoService.deleteVinculoObra(responsavelId, obraId);
    }
};
exports.ResponsaveisTecnicosController = ResponsaveisTecnicosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os responsáveis técnicos' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de responsáveis técnicos retornada com sucesso.', type: [responsavel_tecnico_entity_1.ResponsavelTecnico] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um responsável técnico por ID' }),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Responsável técnico encontrado com sucesso.', type: responsavel_tecnico_entity_1.ResponsavelTecnico }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'ID inválido fornecido.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Responsável técnico não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo responsável técnico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Responsável técnico criado com sucesso.', type: responsavel_tecnico_entity_1.ResponsavelTecnico }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados obrigatórios ausentes ou CPF inválido.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'CPF já cadastrado no sistema.' }),
    (0, swagger_1.ApiBody)({ type: create_responsavel_tecnico_dto_1.CreateResponsavelTecnicoDto, description: 'Dados do responsável técnico a ser criado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_responsavel_tecnico_dto_1.CreateResponsavelTecnicoDto]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um responsável técnico existente' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Responsável técnico atualizado com sucesso.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'ID inválido, dados incorretos (formato CPF, campos vazios), nenhum dado fornecido, tentativa de atualização sem alterações ou propriedades inválidas.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Responsável técnico não encontrado.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Conflito de dados: Já existe um responsável técnico com este CPF ou registro profissional.' }),
    (0, swagger_1.ApiBody)({ type: update_responsavel_tecnico_dto_1.UpdateResponsavelTecnicoDto, description: 'Dados atualizados do responsável técnico (campos permitidos: nome, cpf, registro_profissional, especialidade, ativo)' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_responsavel_tecnico_dto_1.UpdateResponsavelTecnicoDto]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove um responsável técnico' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Responsável técnico removido com sucesso - sem conteúdo retornado' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Requisição inválida.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Responsável técnico não encontrado.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Não é possível remover um responsável com vínculos ativos.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/obras'),
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar vínculos de obras ao responsável técnico' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Vínculos adicionados com sucesso.', type: [obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'ID inválido ou dados dos vínculos incorretos.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Responsável técnico não encontrado.' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Vínculo já existente ou conflito ao adicionar vínculo.' }),
    (0, swagger_1.ApiBody)({ type: create_obra_responsavel_tecnico_dto_1.CreateVinculoObraDto, isArray: true, description: 'Array de vínculos de obra para adicionar' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "addObras", null);
__decorate([
    (0, common_1.Put)(':id/obras/:obraId'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar vínculo específico entre responsável técnico e obra' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Vínculo atualizado com sucesso - sem conteúdo retornado.' }),
    (0, swagger_1.ApiBody)({ type: update_obra_responsavel_tecnico_dto_1.UpdateVinculoObraDto, description: 'Dados atualizados do vínculo' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('obraId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_obra_responsavel_tecnico_dto_1.UpdateVinculoObraDto]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "updateVinculoObra", null);
__decorate([
    (0, common_1.Get)(':id/obras'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os vínculos de obras de um responsável técnico' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de vínculos retornada com sucesso.', type: [obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "findAllVinculoObras", null);
__decorate([
    (0, common_1.Get)(':id/obras/:obraId'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar vínculo específico entre responsável técnico e obra' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vínculo encontrado com sucesso.', type: obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('obraId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "findVinculoObra", null);
__decorate([
    (0, common_1.Delete)(':id/obras/:obraId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover vínculo entre responsável técnico e obra' }),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Vínculo removido com sucesso - sem conteúdo retornado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('obraId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ResponsaveisTecnicosController.prototype, "deleteVinculoObra", null);
exports.ResponsaveisTecnicosController = ResponsaveisTecnicosController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Responsaveis Tecnicos'),
    (0, common_1.Controller)('responsaveis-tecnicos'),
    __metadata("design:paramtypes", [responsaveis_tecnicos_service_1.ResponsaveisTecnicosService])
], ResponsaveisTecnicosController);
//# sourceMappingURL=responsaveis-tecnicos.controller.js.map