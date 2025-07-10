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
exports.Material = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const diario_de_obra_entity_1 = require("../../diario-de-obra/entities/diario-de-obra.entity");
const diario_material_entity_1 = require("../../diario-materiais/diario-material.entity");
let Material = class Material extends sequelize_typescript_1.Model {
    diarios;
};
exports.Material = Material;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do material' }),
    __metadata("design:type", Number)
], Material.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false, unique: true }),
    (0, swagger_1.ApiProperty)({ example: 'MAT-001', description: 'Código único do material' }),
    __metadata("design:type", String)
], Material.prototype, "codigo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(200), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Cimento CP II', description: 'Nome do material' }),
    __metadata("design:type", String)
], Material.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: true }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Saco 50kg', description: 'Unidade de medida do material' }),
    __metadata("design:type", String)
], Material.prototype, "unidadeMedida", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: true }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cimento Portland Composto', description: 'Descrição detalhada do material' }),
    __metadata("design:type", String)
], Material.prototype, "descricao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 }),
    (0, swagger_1.ApiProperty)({ example: 25.99, description: 'Preço unitário do material' }),
    __metadata("design:type", Number)
], Material.prototype, "precoUnitario", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: true }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Votorantim', description: 'Fabricante/Marca do material' }),
    __metadata("design:type", String)
], Material.prototype, "fabricante", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: true }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'CPB-40', description: 'Modelo/Referência do fabricante' }),
    __metadata("design:type", String)
], Material.prototype, "modelo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => diario_de_obra_entity_1.DiarioDeObra, () => diario_material_entity_1.DiarioMaterial),
    __metadata("design:type", Array)
], Material.prototype, "diarios", void 0);
exports.Material = Material = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'materiais',
        timestamps: true,
    })
], Material);
//# sourceMappingURL=material.entity.js.map