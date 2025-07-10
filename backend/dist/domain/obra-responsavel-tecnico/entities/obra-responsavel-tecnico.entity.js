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
exports.ObraResponsavelTecnico = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const responsavel_tecnico_entity_1 = require("../../responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const tipo_vinculo_obra_enum_1 = require("../enums/tipo-vinculo-obra.enum");
const swagger_1 = require("@nestjs/swagger");
let ObraResponsavelTecnico = class ObraResponsavelTecnico extends sequelize_typescript_1.Model {
};
exports.ObraResponsavelTecnico = ObraResponsavelTecnico;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => obras_entity_1.Obras),
    (0, sequelize_typescript_1.Column)({ field: 'obra_id', type: sequelize_typescript_1.DataType.INTEGER }),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da obra vinculada' }),
    __metadata("design:type", Number)
], ObraResponsavelTecnico.prototype, "obraId", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => responsavel_tecnico_entity_1.ResponsavelTecnico),
    (0, sequelize_typescript_1.Column)({ field: 'responsavel_tecnico_id', type: sequelize_typescript_1.DataType.INTEGER }),
    (0, swagger_1.ApiProperty)({ example: 5, description: 'ID do responsável técnico vinculado' }),
    __metadata("design:type", Number)
], ObraResponsavelTecnico.prototype, "responsavelTecnicoId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: true, field: 'data_inicio' }),
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-01-15T00:00:00.000Z', description: 'Data de início do vínculo (opcional)' }),
    __metadata("design:type", Date)
], ObraResponsavelTecnico.prototype, "data_inicio", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: true, field: 'data_fim' }),
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-12-20T00:00:00.000Z', description: 'Data de término do vínculo (opcional)' }),
    __metadata("design:type", Date)
], ObraResponsavelTecnico.prototype, "data_fim", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ENUM(...Object.values(tipo_vinculo_obra_enum_1.TipoVinculoObra)), allowNull: false, defaultValue: tipo_vinculo_obra_enum_1.TipoVinculoObra.RT_GERAL, field: 'tipo_vinculo' }),
    (0, swagger_1.ApiProperty)({ enum: tipo_vinculo_obra_enum_1.TipoVinculoObra, example: tipo_vinculo_obra_enum_1.TipoVinculoObra.RT_GERAL, description: 'Tipo do vínculo técnico com a obra' }),
    __metadata("design:type", String)
], ObraResponsavelTecnico.prototype, "tipo_vinculo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => responsavel_tecnico_entity_1.ResponsavelTecnico, 'responsavel_tecnico_id'),
    (0, swagger_1.ApiProperty)({ type: () => responsavel_tecnico_entity_1.ResponsavelTecnico, description: 'Detalhes do responsável técnico vinculado' }),
    __metadata("design:type", responsavel_tecnico_entity_1.ResponsavelTecnico)
], ObraResponsavelTecnico.prototype, "responsavel", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => obras_entity_1.Obras, 'obra_id'),
    (0, swagger_1.ApiProperty)({ type: () => obras_entity_1.Obras, description: 'Detalhes da obra vinculada' }),
    __metadata("design:type", obras_entity_1.Obras)
], ObraResponsavelTecnico.prototype, "obra", void 0);
exports.ObraResponsavelTecnico = ObraResponsavelTecnico = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'obra_responsavel_tecnico', timestamps: true })
], ObraResponsavelTecnico);
//# sourceMappingURL=obra-responsavel-tecnico.entity.js.map