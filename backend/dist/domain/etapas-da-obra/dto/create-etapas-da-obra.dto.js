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
exports.CreateEtapasDaObraDto = void 0;
const class_validator_1 = require("class-validator");
const etapas_da_obra_entity_1 = require("../entities/etapas-da-obra.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateEtapasDaObraDto {
    nome;
    descricao;
    dataInicioPrevista;
    dataFimPrevista;
    dataInicioReal;
    dataFimReal;
    status;
    obraId;
}
exports.CreateEtapasDaObraDto = CreateEtapasDaObraDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Fundação',
        description: 'Nome da etapa da obra',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Etapa de fundação da obra',
        description: 'Descrição detalhada da etapa (opcional)',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        example: '2024-01-01',
        description: 'Data prevista para início da etapa',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "dataInicioPrevista", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        example: '2024-01-31',
        description: 'Data prevista para término da etapa',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "dataFimPrevista", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '2024-01-15',
        description: 'Data real de início da etapa (opcional)',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "dataInicioReal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '2024-01-31',
        description: 'Data real de término da etapa (opcional)',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "dataFimReal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(etapas_da_obra_entity_1.EtapaStatus),
    (0, swagger_1.ApiPropertyOptional)({
        example: etapas_da_obra_entity_1.EtapaStatus.EM_ANDAMENTO,
        enum: etapas_da_obra_entity_1.EtapaStatus,
        description: 'Status atual da etapa da obra (opcional)',
    }),
    __metadata("design:type", String)
], CreateEtapasDaObraDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID da obra associada à etapa',
    }),
    __metadata("design:type", Number)
], CreateEtapasDaObraDto.prototype, "obraId", void 0);
//# sourceMappingURL=create-etapas-da-obra.dto.js.map