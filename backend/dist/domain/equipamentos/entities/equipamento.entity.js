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
exports.Equipamentos = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_equipamentos_entity_1 = require("../../obra-equipamento/entities/obras-equipamentos.entity");
const fornecedores_entity_1 = require("../../fornecedores/entities/fornecedores.entity");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const swagger_1 = require("@nestjs/swagger");
let Equipamentos = class Equipamentos extends sequelize_typescript_1.Model {
};
exports.Equipamentos = Equipamentos;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do equipamento' }),
    __metadata("design:type", Number)
], Equipamentos.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Betoneira 400L', description: 'Nome do equipamento' }),
    __metadata("design:type", String)
], Equipamentos.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Máquina', description: 'Tipo do equipamento' }),
    __metadata("design:type", String)
], Equipamentos.prototype, "tipo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Makita', description: 'Marca do equipamento (opcional)' }),
    __metadata("design:type", String)
], Equipamentos.prototype, "marca", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'MX400', description: 'Modelo do equipamento (opcional)' }),
    __metadata("design:type", String)
], Equipamentos.prototype, "modelo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
        field: 'numeroDeSerie',
    }),
    (0, swagger_1.ApiProperty)({ example: 'SN-ABC123456', description: 'Número de série do equipamento' }),
    __metadata("design:type", String)
], Equipamentos.prototype, "numeroDeSerie", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50),
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Em uso', description: 'Estado atual do equipamento (opcional)' }),
    __metadata("design:type", String)
], Equipamentos.prototype, "estado", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => fornecedores_entity_1.Fornecedores),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 5, description: 'ID do fornecedor do equipamento (opcional)' }),
    __metadata("design:type", Number)
], Equipamentos.prototype, "fornecedorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => fornecedores_entity_1.Fornecedores),
    (0, swagger_1.ApiPropertyOptional)({ type: () => fornecedores_entity_1.Fornecedores, description: 'Fornecedor associado ao equipamento' }),
    __metadata("design:type", fornecedores_entity_1.Fornecedores)
], Equipamentos.prototype, "fornecedor", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => obras_entity_1.Obras, () => obras_equipamentos_entity_1.ObrasEquipamentos),
    (0, swagger_1.ApiPropertyOptional)({ type: () => [obras_entity_1.Obras], description: 'Obras nas quais o equipamento está sendo utilizado' }),
    __metadata("design:type", Array)
], Equipamentos.prototype, "obras", void 0);
exports.Equipamentos = Equipamentos = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'equipamentos', timestamps: true })
], Equipamentos);
//# sourceMappingURL=equipamento.entity.js.map