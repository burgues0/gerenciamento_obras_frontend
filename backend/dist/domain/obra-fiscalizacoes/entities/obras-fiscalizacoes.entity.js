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
exports.ObrasFiscalizacoes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const fiscalizacoes_entity_1 = require("../../fiscalizacoes/entities/fiscalizacoes.entity");
const swagger_1 = require("@nestjs/swagger");
let ObrasFiscalizacoes = class ObrasFiscalizacoes extends sequelize_typescript_1.Model {
    obraId;
    obra;
    fiscalizacaoId;
    fiscalizacao;
};
exports.ObrasFiscalizacoes = ObrasFiscalizacoes;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => obras_entity_1.Obras),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da obra' }),
    __metadata("design:type", Number)
], ObrasFiscalizacoes.prototype, "obraId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => obras_entity_1.Obras),
    (0, swagger_1.ApiProperty)({ type: () => obras_entity_1.Obras, description: 'Obra associada' }),
    __metadata("design:type", obras_entity_1.Obras)
], ObrasFiscalizacoes.prototype, "obra", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => fiscalizacoes_entity_1.Fiscalizacoes),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    (0, swagger_1.ApiProperty)({ example: 10, description: 'ID da fiscalização' }),
    __metadata("design:type", Number)
], ObrasFiscalizacoes.prototype, "fiscalizacaoId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => fiscalizacoes_entity_1.Fiscalizacoes),
    (0, swagger_1.ApiProperty)({ type: () => fiscalizacoes_entity_1.Fiscalizacoes, description: 'Fiscalização associada' }),
    __metadata("design:type", fiscalizacoes_entity_1.Fiscalizacoes)
], ObrasFiscalizacoes.prototype, "fiscalizacao", void 0);
exports.ObrasFiscalizacoes = ObrasFiscalizacoes = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'obras_fiscalizacoes', timestamps: true })
], ObrasFiscalizacoes);
//# sourceMappingURL=obras-fiscalizacoes.entity.js.map