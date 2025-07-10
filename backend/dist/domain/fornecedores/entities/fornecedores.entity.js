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
exports.Fornecedores = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_fornecedores_entity_1 = require("../../obra-fornecedor/entities/obras-fornecedores.entity");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const swagger_1 = require("@nestjs/swagger");
let Fornecedores = class Fornecedores extends sequelize_typescript_1.Model {
};
exports.Fornecedores = Fornecedores;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do fornecedor' }),
    __metadata("design:type", Number)
], Fornecedores.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Construtora ABC Ltda', description: 'Nome do fornecedor' }),
    __metadata("design:type", String)
], Fornecedores.prototype, "nome", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: '12.345.678/0001-99', description: 'CNPJ do fornecedor (formato: 00.000.000/0000-00)' }),
    __metadata("design:type", Object)
], Fornecedores.prototype, "cnpj", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'contato@fornecedor.com', description: 'Email do fornecedor' }),
    __metadata("design:type", Object)
], Fornecedores.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: '(21) 98765-4321', description: 'Telefone de contato do fornecedor' }),
    __metadata("design:type", Object)
], Fornecedores.prototype, "telefone", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Rua das Indústrias, 1000, Bairro Industrial', description: 'Endereço do fornecedor' }),
    __metadata("design:type", Object)
], Fornecedores.prototype, "endereco", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indica se o fornecedor está ativo' }),
    __metadata("design:type", Boolean)
], Fornecedores.prototype, "ativo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => obras_entity_1.Obras, () => obras_fornecedores_entity_1.ObrasFornecedores),
    (0, swagger_1.ApiProperty)({ type: () => [obras_entity_1.Obras], description: 'Lista de obras associadas ao fornecedor' }),
    __metadata("design:type", Array)
], Fornecedores.prototype, "obrasId", void 0);
exports.Fornecedores = Fornecedores = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'fornecedores',
        timestamps: true,
    })
], Fornecedores);
//# sourceMappingURL=fornecedores.entity.js.map