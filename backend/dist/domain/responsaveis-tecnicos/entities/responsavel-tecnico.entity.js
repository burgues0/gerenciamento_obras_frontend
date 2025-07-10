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
exports.ResponsavelTecnico = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obra_responsavel_tecnico_entity_1 = require("../../obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const swagger_1 = require("@nestjs/swagger");
const obras_entity_1 = require("../../obras/entities/obras.entity");
let ResponsavelTecnico = class ResponsavelTecnico extends sequelize_typescript_1.Model {
};
exports.ResponsavelTecnico = ResponsavelTecnico;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do responsável técnico' }),
    __metadata("design:type", Number)
], ResponsavelTecnico.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'João da Silva', description: 'Nome completo do responsável técnico' }),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(14), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: '123.456.789-01', description: 'CPF do responsável técnico' }),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "cpf", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'CREA-123456', description: 'Número do registro profissional' }),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "registro_profissional", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 'Engenharia Civil', description: 'Especialidade do responsável técnico' }),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "especialidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    (0, swagger_1.ApiProperty)({ example: false, description: 'Indicador se o responsável técnico está ativo' }),
    __metadata("design:type", Boolean)
], ResponsavelTecnico.prototype, "ativo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => obras_entity_1.Obras, () => obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico),
    (0, swagger_1.ApiPropertyOptional)({ type: () => [obras_entity_1.Obras], description: 'Lista de obras vinculadas ao responsável técnico' }),
    __metadata("design:type", Array)
], ResponsavelTecnico.prototype, "obras", void 0);
exports.ResponsavelTecnico = ResponsavelTecnico = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'responsaveis_tecnicos',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    })
], ResponsavelTecnico);
//# sourceMappingURL=responsavel-tecnico.entity.js.map