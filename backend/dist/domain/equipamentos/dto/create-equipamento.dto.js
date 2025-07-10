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
exports.CreateEquipamentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateEquipamentoDto {
    nome;
    tipo;
    marca;
    modelo;
    numeroDeSerie;
    fornecedorId;
    estado;
    obrasId;
}
exports.CreateEquipamentoDto = CreateEquipamentoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Furadeira Bosch',
        description: 'Nome do equipamento',
    }),
    __metadata("design:type", String)
], CreateEquipamentoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Furadeira',
        description: 'Tipo do equipamento',
    }),
    __metadata("design:type", String)
], CreateEquipamentoDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Bosch',
        description: 'Marca do equipamento (opcional)',
    }),
    __metadata("design:type", String)
], CreateEquipamentoDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'GSR 1000',
        description: 'Modelo do equipamento (opcional)',
    }),
    __metadata("design:type", String)
], CreateEquipamentoDto.prototype, "modelo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'SN123456789',
        description: 'Número de série do equipamento',
    }),
    __metadata("design:type", String)
], CreateEquipamentoDto.prototype, "numeroDeSerie", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: 'ID do fornecedor associado (opcional)',
    }),
    __metadata("design:type", Number)
], CreateEquipamentoDto.prototype, "fornecedorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'novo',
        description: 'Estado do equipamento (opcional)',
    }),
    __metadata("design:type", String)
], CreateEquipamentoDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({
        example: [1, 2],
        description: 'Lista de IDs das obras associadas ao equipamento (opcional)',
        type: [Number],
    }),
    __metadata("design:type", Array)
], CreateEquipamentoDto.prototype, "obrasId", void 0);
//# sourceMappingURL=create-equipamento.dto.js.map