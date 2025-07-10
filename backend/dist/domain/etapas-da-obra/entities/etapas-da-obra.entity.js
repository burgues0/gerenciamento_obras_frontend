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
exports.EtapasDaObra = exports.EtapaStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const obras_entity_1 = require("../../obras/entities/obras.entity");
const swagger_1 = require("@nestjs/swagger");
var EtapaStatus;
(function (EtapaStatus) {
    EtapaStatus["NAO_INICIADA"] = "Nao iniciada";
    EtapaStatus["EM_ANDAMENTO"] = "Em andamento";
    EtapaStatus["CONCLUIDA"] = "Conclu\u00EDda";
    EtapaStatus["ATRASADA"] = "Atrasada";
})(EtapaStatus || (exports.EtapaStatus = EtapaStatus = {}));
let EtapasDaObra = class EtapasDaObra extends sequelize_typescript_1.Model {
};
exports.EtapasDaObra = EtapasDaObra;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da etapa da obra' }),
    __metadata("design:type", Number)
], EtapasDaObra.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Fundação', description: 'Nome da etapa da obra' }),
    __metadata("design:type", String)
], EtapasDaObra.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Escavação e concretagem das sapatas.', description: 'Descrição detalhada da etapa (opcional)' }),
    __metadata("design:type", String)
], EtapasDaObra.prototype, "descricao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: '2025-07-01', description: 'Data de início prevista da etapa' }),
    __metadata("design:type", Date)
], EtapasDaObra.prototype, "dataInicioPrevista", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: '2025-07-15', description: 'Data de término prevista da etapa' }),
    __metadata("design:type", Date)
], EtapasDaObra.prototype, "dataFimPrevista", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-07-02', description: 'Data de início real da etapa (opcional)' }),
    __metadata("design:type", Date)
], EtapasDaObra.prototype, "dataInicioReal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-07-16', description: 'Data de término real da etapa (opcional)' }),
    __metadata("design:type", Date)
], EtapasDaObra.prototype, "dataFimReal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(EtapaStatus)),
        defaultValue: EtapaStatus.NAO_INICIADA,
    }),
    (0, swagger_1.ApiProperty)({
        example: EtapaStatus.NAO_INICIADA,
        description: 'Status atual da etapa da obra',
        enum: EtapaStatus,
    }),
    __metadata("design:type", String)
], EtapasDaObra.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => obras_entity_1.Obras),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 3, description: 'ID da obra relacionada à etapa' }),
    __metadata("design:type", Number)
], EtapasDaObra.prototype, "obraId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => obras_entity_1.Obras),
    (0, swagger_1.ApiPropertyOptional)({ type: () => obras_entity_1.Obras, description: 'Obra à qual a etapa está relacionada' }),
    __metadata("design:type", obras_entity_1.Obras)
], EtapasDaObra.prototype, "obra", void 0);
exports.EtapasDaObra = EtapasDaObra = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'etapas_obra', timestamps: true })
], EtapasDaObra);
//# sourceMappingURL=etapas-da-obra.entity.js.map