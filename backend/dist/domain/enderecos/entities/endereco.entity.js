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
exports.Endereco = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const swagger_1 = require("@nestjs/swagger");
let Endereco = class Endereco extends sequelize_typescript_1.Model {
};
exports.Endereco = Endereco;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do endereço' }),
    __metadata("design:type", Number)
], Endereco.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores', description: 'Nome da rua do endereço' }),
    __metadata("design:type", String)
], Endereco.prototype, "rua", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: '123', description: 'Número do endereço' }),
    __metadata("design:type", String)
], Endereco.prototype, "numero", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Apto 101', description: 'Complemento do endereço (opcional)' }),
    __metadata("design:type", String)
], Endereco.prototype, "complemento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Centro', description: 'Bairro do endereço' }),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'São Paulo', description: 'Cidade do endereço' }),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.CHAR(2),
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'SP', description: 'Estado do endereço (UF)' }),
    __metadata("design:type", String)
], Endereco.prototype, "estado", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: '01000-000', description: 'CEP do endereço' }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => obras_entity_1.Obras),
    (0, swagger_1.ApiPropertyOptional)({ type: () => obras_entity_1.Obras, description: 'Obra associada a este endereço (se houver)' }),
    __metadata("design:type", obras_entity_1.Obras)
], Endereco.prototype, "obra", void 0);
exports.Endereco = Endereco = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'enderecos', timestamps: true })
], Endereco);
//# sourceMappingURL=endereco.entity.js.map