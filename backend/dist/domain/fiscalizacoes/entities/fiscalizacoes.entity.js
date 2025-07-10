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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fiscalizacoes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const obras_fiscalizacoes_entity_1 = require("../../obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const relatorios_entity_1 = require("../../relatorios/entities/relatorios.entity");
const responsavel_tecnico_entity_1 = require("../../responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const fiscalizacoes_status_enum_1 = require("../enums/fiscalizacoes-status.enum");
const swagger_1 = require("@nestjs/swagger");
let Fiscalizacoes = class Fiscalizacoes extends sequelize_typescript_1.Model {
};
exports.Fiscalizacoes = Fiscalizacoes;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID único da fiscalização' }),
    __metadata("design:type", Number)
], Fiscalizacoes.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Visita técnica inicial', description: 'Título da fiscalização' }),
    __metadata("design:type", String)
], Fiscalizacoes.prototype, "titulo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Inspeção para verificação da fundação', description: 'Descrição detalhada da fiscalização' }),
    __metadata("design:type", String)
], Fiscalizacoes.prototype, "descricao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '2025-06-01', description: 'Data de início da fiscalização' }),
    __metadata("design:type", Date)
], Fiscalizacoes.prototype, "data_inicio", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-06-08', description: 'Data de término da fiscalização (se aplicável)' }),
    __metadata("design:type", Date)
], Fiscalizacoes.prototype, "data_fim", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(20), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Em andamento', description: 'Status atual da fiscalização' }),
    __metadata("design:type", String)
], Fiscalizacoes.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => obras_entity_1.Obras, () => obras_fiscalizacoes_entity_1.ObrasFiscalizacoes),
    (0, swagger_1.ApiPropertyOptional)({ type: () => [obras_entity_1.Obras], description: 'Lista de obras associadas a esta fiscalização' }),
    __metadata("design:type", Array)
], Fiscalizacoes.prototype, "obras", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => relatorios_entity_1.Relatorios),
    (0, swagger_1.ApiPropertyOptional)({ type: () => [relatorios_entity_1.Relatorios], description: 'Relatórios gerados durante a fiscalização' }),
    __metadata("design:type", Array)
], Fiscalizacoes.prototype, "relatorios", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => responsavel_tecnico_entity_1.ResponsavelTecnico),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 3, description: 'ID do responsável técnico pela fiscalização' }),
    __metadata("design:type", Number)
], Fiscalizacoes.prototype, "responsavelTecnicoId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => responsavel_tecnico_entity_1.ResponsavelTecnico),
    (0, swagger_1.ApiProperty)({ type: () => responsavel_tecnico_entity_1.ResponsavelTecnico, description: 'Responsável técnico vinculado à fiscalização' }),
    __metadata("design:type", responsavel_tecnico_entity_1.ResponsavelTecnico)
], Fiscalizacoes.prototype, "responsavelTecnico", void 0);
exports.Fiscalizacoes = Fiscalizacoes = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'fiscalizacoes', timestamps: true })
], Fiscalizacoes);
//# sourceMappingURL=fiscalizacoes.entity.js.map