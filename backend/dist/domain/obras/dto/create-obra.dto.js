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
exports.CreateObraDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateObraDto {
    nome;
    descricao;
    status;
    data_inicio;
    data_conclusao;
    orcamento_total;
    gastos_atualizados;
    percentual_concluido;
    latitude;
    longitude;
    fornecedoresId;
    equipamentosId;
}
exports.CreateObraDto = CreateObraDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Construção da Escola Municipal A', description: 'Nome da obra' }),
    __metadata("design:type", String)
], CreateObraDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'Obra de construção da nova escola municipal no bairro X.', description: 'Descrição detalhada da obra' }),
    __metadata("design:type", String)
], CreateObraDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['Planejada', 'Em andamento', 'Concluída', 'Paralisada']),
    (0, swagger_1.ApiProperty)({ enum: ['Planejada', 'Em andamento', 'Concluída', 'Paralisada'], description: 'Status da obra' }),
    __metadata("design:type", String)
], CreateObraDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ example: '2024-01-01', description: 'Data de início da obra' }),
    __metadata("design:type", Date)
], CreateObraDto.prototype, "data_inicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-12-31', description: 'Data de conclusão da obra' }),
    __metadata("design:type", Date)
], CreateObraDto.prototype, "data_conclusao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({ example: 500000.0, description: 'Orçamento total da obra' }),
    __metadata("design:type", Number)
], CreateObraDto.prototype, "orcamento_total", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 200000.0, description: 'Gastos atualizados da obra' }),
    __metadata("design:type", Number)
], CreateObraDto.prototype, "gastos_atualizados", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 40, description: 'Percentual concluído da obra' }),
    __metadata("design:type", Number)
], CreateObraDto.prototype, "percentual_concluido", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ example: -23.55052, description: 'Latitude da obra' }),
    __metadata("design:type", Number)
], CreateObraDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ example: -46.633308, description: 'Longitude da obra' }),
    __metadata("design:type", Number)
], CreateObraDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({ example: [1, 2], description: 'IDs dos fornecedores associados à obra', type: [Number] }),
    __metadata("design:type", Array)
], CreateObraDto.prototype, "fornecedoresId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({ example: [1, 2], description: 'IDs dos equipamentos associados à obra', type: [Number] }),
    __metadata("design:type", Array)
], CreateObraDto.prototype, "equipamentosId", void 0);
//# sourceMappingURL=create-obra.dto.js.map