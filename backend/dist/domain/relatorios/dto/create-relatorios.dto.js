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
exports.CreateRelatoriosDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateRelatoriosDto {
    titulo;
    conteudo;
    dataCriacao;
    fiscalizacaoId;
}
exports.CreateRelatoriosDto = CreateRelatoriosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Título do relatório', example: 'Inspeção estrutural' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRelatoriosDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Conteúdo do relatório', example: 'Relatório detalhado sobre a inspeção realizada.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRelatoriosDto.prototype, "conteudo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data de criação do relatório (YYYY-MM-DD)', example: '2025-06-01' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRelatoriosDto.prototype, "dataCriacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID da fiscalização associada', example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateRelatoriosDto.prototype, "fiscalizacaoId", void 0);
//# sourceMappingURL=create-relatorios.dto.js.map