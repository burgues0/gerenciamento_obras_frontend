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
exports.Relatorios = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const fiscalizacoes_entity_1 = require("../../fiscalizacoes/entities/fiscalizacoes.entity");
const swagger_1 = require("@nestjs/swagger");
let Relatorios = class Relatorios extends sequelize_typescript_1.Model {
};
exports.Relatorios = Relatorios;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do relatório' }),
    __metadata("design:type", Number)
], Relatorios.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Relatório Semanal', description: 'Título do relatório' }),
    __metadata("design:type", String)
], Relatorios.prototype, "titulo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT('long'), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Conteúdo detalhado do relatório...', description: 'Conteúdo do relatório' }),
    __metadata("design:type", String)
], Relatorios.prototype, "conteudo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false, field: 'data_criacao' }),
    (0, swagger_1.ApiProperty)({ example: '2025-06-08T14:30:00Z', description: 'Data de criação do relatório' }),
    __metadata("design:type", Date)
], Relatorios.prototype, "dataCriacao", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => fiscalizacoes_entity_1.Fiscalizacoes),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 3, description: 'ID da fiscalização associada' }),
    __metadata("design:type", Number)
], Relatorios.prototype, "fiscalizacaoId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => fiscalizacoes_entity_1.Fiscalizacoes),
    __metadata("design:type", fiscalizacoes_entity_1.Fiscalizacoes)
], Relatorios.prototype, "fiscalizacao", void 0);
exports.Relatorios = Relatorios = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'relatorios', timestamps: true })
], Relatorios);
//# sourceMappingURL=relatorios.entity.js.map