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
exports.DiarioDeObra = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const diario_material_entity_1 = require("../../diario-materiais/diario-material.entity");
const material_entity_1 = require("../../materiais/entities/material.entity");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const swagger_1 = require("@nestjs/swagger");
let DiarioDeObra = class DiarioDeObra extends sequelize_typescript_1.Model {
};
exports.DiarioDeObra = DiarioDeObra;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: '2025-06-08', description: 'Data do registro no diário de obra' }),
    __metadata("design:type", String)
], DiarioDeObra.prototype, "data", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Ensolarado com poucas nuvens', description: 'Descrição do clima no dia' }),
    __metadata("design:type", String)
], DiarioDeObra.prototype, "clima", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Fundação concluída, início da alvenaria', description: 'Atividades executadas no dia' }),
    __metadata("design:type", String)
], DiarioDeObra.prototype, "atividadesExecutadas", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => material_entity_1.Material, () => diario_material_entity_1.DiarioMaterial),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cimento, areia, blocos de concreto', description: 'Materiais utilizados na obra' }),
    __metadata("design:type", Array)
], DiarioDeObra.prototype, "materiaisUtilizados", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Equipe reduzida devido a feriado', description: 'Observações adicionais do dia' }),
    __metadata("design:type", String)
], DiarioDeObra.prototype, "observacoes", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => obras_entity_1.Obras),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 42, description: 'ID da obra relacionada a este diário' }),
    __metadata("design:type", Number)
], DiarioDeObra.prototype, "obraId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => obras_entity_1.Obras),
    (0, swagger_1.ApiProperty)({ type: () => obras_entity_1.Obras, description: 'Obra associada a este diário de obra' }),
    __metadata("design:type", obras_entity_1.Obras)
], DiarioDeObra.prototype, "obra", void 0);
exports.DiarioDeObra = DiarioDeObra = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'diarios_obra', timestamps: true })
], DiarioDeObra);
//# sourceMappingURL=diario-de-obra.entity.js.map