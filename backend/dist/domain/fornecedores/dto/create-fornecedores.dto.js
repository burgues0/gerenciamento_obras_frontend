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
exports.CreateFornecedoresDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateFornecedoresDto {
    nome;
    cnpj;
    email;
    telefone;
    endereco;
    ativo;
    obrasId;
}
exports.CreateFornecedoresDto = CreateFornecedoresDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Construtora ABC Ltda.', description: 'Nome do fornecedor' }),
    __metadata("design:type", String)
], CreateFornecedoresDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ example: '12.345.678/0001-90', description: 'CNPJ do fornecedor' }),
    __metadata("design:type", String)
], CreateFornecedoresDto.prototype, "cnpj", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'contato@abc.com.br', description: 'Email do fornecedor' }),
    __metadata("design:type", String)
], CreateFornecedoresDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ example: '(11) 91234-5678', description: 'Telefone de contato do fornecedor' }),
    __metadata("design:type", String)
], CreateFornecedoresDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Rua das Flores, 123 - São Paulo/SP', description: 'Endereço do fornecedor' }),
    __metadata("design:type", String)
], CreateFornecedoresDto.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ example: true, description: 'Indica se o fornecedor está ativo' }),
    __metadata("design:type", Boolean)
], CreateFornecedoresDto.prototype, "ativo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true, message: 'Cada ID da obra deve ser um número inteiro.' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({
        type: [Number],
        description: 'Lista de IDs das obras associadas a este fornecedor',
        example: [1, 2, 3]
    }),
    __metadata("design:type", Array)
], CreateFornecedoresDto.prototype, "obrasId", void 0);
//# sourceMappingURL=create-fornecedores.dto.js.map