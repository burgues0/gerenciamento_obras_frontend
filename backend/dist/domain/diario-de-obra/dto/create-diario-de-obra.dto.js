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
exports.CreateDiarioDeObraDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDiarioDeObraDto {
    data;
    clima;
    atividadesExecutadas;
    observacoes;
    materiaisId;
    obraId;
}
exports.CreateDiarioDeObraDto = CreateDiarioDeObraDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        example: '2023-03-15',
        description: 'Data do registro no diário de obra (formato ISO 8601)',
    }),
    __metadata("design:type", String)
], CreateDiarioDeObraDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Ensolarado',
        description: 'Condições climáticas no dia',
    }),
    __metadata("design:type", String)
], CreateDiarioDeObraDto.prototype, "clima", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Execução de fundação, montagem de formas',
        description: 'Atividades executadas no dia',
    }),
    __metadata("design:type", String)
], CreateDiarioDeObraDto.prototype, "atividadesExecutadas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Início da concretagem atrasado por logística',
        description: 'Observações gerais do dia',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Observação 1' }),
    __metadata("design:type", String)
], CreateDiarioDeObraDto.prototype, "observacoes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        example: [1, 2],
        description: 'IDs dos Materiais associados à obra',
        type: [Number],
    }),
    __metadata("design:type", Array)
], CreateDiarioDeObraDto.prototype, "materiaisId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID da obra associada ao diário',
        type: Number,
    }),
    __metadata("design:type", Number)
], CreateDiarioDeObraDto.prototype, "obraId", void 0);
//# sourceMappingURL=create-diario-de-obra.dto.js.map