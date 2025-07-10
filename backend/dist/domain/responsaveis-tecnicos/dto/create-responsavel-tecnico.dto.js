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
exports.CreateResponsavelTecnicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateResponsavelTecnicoDto {
    nome;
    cpf;
    registro_profissional;
    especialidade;
    ativo;
}
exports.CreateResponsavelTecnicoDto = CreateResponsavelTecnicoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'João da Silva', description: 'Nome completo do responsável técnico' }),
    __metadata("design:type", String)
], CreateResponsavelTecnicoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '123.456.789-00', description: 'CPF do responsável técnico' }),
    __metadata("design:type", String)
], CreateResponsavelTecnicoDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'CREA-12345', description: 'Número do registro profissional' }),
    __metadata("design:type", String)
], CreateResponsavelTecnicoDto.prototype, "registro_profissional", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Engenharia Civil', description: 'Especialidade do responsável' }),
    __metadata("design:type", String)
], CreateResponsavelTecnicoDto.prototype, "especialidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, swagger_1.ApiPropertyOptional)({ example: false, description: 'Indica se o responsável está ativo' }),
    __metadata("design:type", Boolean)
], CreateResponsavelTecnicoDto.prototype, "ativo", void 0);
//# sourceMappingURL=create-responsavel-tecnico.dto.js.map