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
exports.CreateFiscalizacoesDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const fiscalizacoes_status_enum_1 = require("../enums/fiscalizacoes-status.enum");
class CreateFiscalizacoesDto {
    titulo;
    descricao;
    data_inicio;
    data_fim;
    status;
    responsavelTecnicoId;
    obraIds;
}
exports.CreateFiscalizacoesDto = CreateFiscalizacoesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Título da fiscalização', example: 'Controles de Segurança' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFiscalizacoesDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descrição da fiscalização', example: 'Fiscalização para validar e garantir controles de segurança de acordo com ISO 12345' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFiscalizacoesDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data de início da fiscalização (YYYY-MM-DD)', example: '2025-06-01' }),
    (0, class_validator_1.IsDate)({ message: 'data_inicio deve ser um objeto Date válido.' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateFiscalizacoesDto.prototype, "data_inicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Data de fim da fiscalização (YYYY-MM-DD)', example: '2025-06-10' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({ message: 'data_fim deve ser um objeto Date válido.' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateFiscalizacoesDto.prototype, "data_fim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status da fiscalização', example: 'Pendente', enum: fiscalizacoes_status_enum_1.FiscalizacaoStatus }),
    (0, class_validator_1.IsEnum)(fiscalizacoes_status_enum_1.FiscalizacaoStatus, { message: 'Status inválido. Valores permitidos: Em Andamento, Concluída, Planejada.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFiscalizacoesDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do responsável técnico', example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFiscalizacoesDto.prototype, "responsavelTecnicoId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lista de IDs das obras associadas', example: [1, 2, 3] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true, message: 'Cada ID de obra deve ser um número inteiro.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array)
], CreateFiscalizacoesDto.prototype, "obraIds", void 0);
//# sourceMappingURL=create-fiscalizacoes.dto.js.map