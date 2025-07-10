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
exports.Obras = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const endereco_entity_1 = require("../../enderecos/entities/endereco.entity");
const fornecedores_entity_1 = require("../../fornecedores/entities/fornecedores.entity");
const equipamento_entity_1 = require("../../equipamentos/entities/equipamento.entity");
const obras_fornecedores_entity_1 = require("../../obra-fornecedor/entities/obras-fornecedores.entity");
const obras_equipamentos_entity_1 = require("../../obra-equipamento/entities/obras-equipamentos.entity");
const fiscalizacoes_entity_1 = require("../../fiscalizacoes/entities/fiscalizacoes.entity");
const obras_fiscalizacoes_entity_1 = require("../../obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const responsavel_tecnico_entity_1 = require("../../responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const obra_responsavel_tecnico_entity_1 = require("../../obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const swagger_1 = require("@nestjs/swagger");
let Obras = class Obras extends sequelize_typescript_1.Model {
};
exports.Obras = Obras;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da obra' }),
    __metadata("design:type", Number)
], Obras.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Construção Residencial XYZ', description: 'Nome da obra' }),
    __metadata("design:type", String)
], Obras.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 'Construção de um condomínio residencial de 10 unidades', description: 'Descrição detalhada da obra' }),
    __metadata("design:type", String)
], Obras.prototype, "descricao", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)('Planejada'),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('Planejada', 'Em andamento', 'Concluída', 'Paralisada'),
    }),
    (0, swagger_1.ApiProperty)({ example: 'Planejada', description: 'Status atual da obra' }),
    __metadata("design:type", String)
], Obras.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: '2025-06-01', description: 'Data de início da obra' }),
    __metadata("design:type", Date)
], Obras.prototype, "data_inicio", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-12-31', description: 'Data de conclusão da obra' }),
    __metadata("design:type", Object)
], Obras.prototype, "data_conclusao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        allowNull: false,
    }),
    (0, swagger_1.ApiProperty)({ example: 500000.00, description: 'Orçamento total da obra' }),
    __metadata("design:type", Number)
], Obras.prototype, "orcamento_total", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(0),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
    }),
    (0, swagger_1.ApiProperty)({ example: 120000.00, description: 'Gastos atualizados da obra' }),
    __metadata("design:type", Number)
], Obras.prototype, "gastos_atualizados", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(0),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    }),
    (0, swagger_1.ApiProperty)({ example: 24.5, description: 'Percentual concluído da obra' }),
    __metadata("design:type", Number)
], Obras.prototype, "percentual_concluido", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: -23.55052, description: 'Latitude da localização da obra' }),
    __metadata("design:type", Object)
], Obras.prototype, "latitude", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
    }),
    (0, swagger_1.ApiPropertyOptional)({ example: -46.633308, description: 'Longitude da localização da obra' }),
    __metadata("design:type", Object)
], Obras.prototype, "longitude", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => endereco_entity_1.Endereco),
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    (0, swagger_1.ApiPropertyOptional)({ example: 10, description: 'ID do endereço associado à obra' }),
    __metadata("design:type", Object)
], Obras.prototype, "enderecoId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => endereco_entity_1.Endereco),
    (0, swagger_1.ApiProperty)({ type: () => endereco_entity_1.Endereco, description: 'Endereço associado à obra' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], Obras.prototype, "endereco", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => fornecedores_entity_1.Fornecedores, () => obras_fornecedores_entity_1.ObrasFornecedores),
    (0, swagger_1.ApiProperty)({ type: () => [fornecedores_entity_1.Fornecedores], description: 'Lista de fornecedores associados à obra' }),
    __metadata("design:type", Array)
], Obras.prototype, "fornecedores", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => equipamento_entity_1.Equipamentos, () => obras_equipamentos_entity_1.ObrasEquipamentos),
    (0, swagger_1.ApiProperty)({ type: () => [equipamento_entity_1.Equipamentos], description: 'Lista de equipamentos associados à obra' }),
    __metadata("design:type", Array)
], Obras.prototype, "equipamentos", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => responsavel_tecnico_entity_1.ResponsavelTecnico, () => obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico),
    (0, swagger_1.ApiProperty)({ type: () => [responsavel_tecnico_entity_1.ResponsavelTecnico], description: 'Lista de responsáveis técnicos pela obra' }),
    __metadata("design:type", Array)
], Obras.prototype, "responsaveisTecnicos", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => fiscalizacoes_entity_1.Fiscalizacoes, () => obras_fiscalizacoes_entity_1.ObrasFiscalizacoes),
    (0, swagger_1.ApiProperty)({ type: () => [fiscalizacoes_entity_1.Fiscalizacoes], description: 'Lista de fiscalizações relacionadas à obra' }),
    __metadata("design:type", Array)
], Obras.prototype, "fiscalizacoes", void 0);
exports.Obras = Obras = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'obras',
        timestamps: true,
    })
], Obras);
//# sourceMappingURL=obras.entity.js.map