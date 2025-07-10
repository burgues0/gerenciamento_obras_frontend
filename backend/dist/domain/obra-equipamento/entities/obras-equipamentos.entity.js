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
exports.ObrasEquipamentos = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const equipamento_entity_1 = require("../../equipamentos/entities/equipamento.entity");
const swagger_1 = require("@nestjs/swagger");
let ObrasEquipamentos = class ObrasEquipamentos extends sequelize_typescript_1.Model {
    obraId;
    equipamentoId;
};
exports.ObrasEquipamentos = ObrasEquipamentos;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => obras_entity_1.Obras),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da obra associada' }),
    __metadata("design:type", Number)
], ObrasEquipamentos.prototype, "obraId", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => equipamento_entity_1.Equipamentos),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 5, description: 'ID do equipamento associado' }),
    __metadata("design:type", Number)
], ObrasEquipamentos.prototype, "equipamentoId", void 0);
exports.ObrasEquipamentos = ObrasEquipamentos = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'obras_equipamentos', timestamps: true })
], ObrasEquipamentos);
//# sourceMappingURL=obras-equipamentos.entity.js.map