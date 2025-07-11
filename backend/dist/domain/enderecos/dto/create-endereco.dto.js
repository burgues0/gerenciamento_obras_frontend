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
exports.CreateEnderecoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateEnderecoDto {
    rua;
    numero;
    complemento;
    bairro;
    cidade;
    estado;
    cep;
}
exports.CreateEnderecoDto = CreateEnderecoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Rua das Flores',
        description: 'Nome da rua do endereço',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "rua", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '123',
        description: 'Número do endereço',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Casa',
        description: 'Complemento do endereço (opcional)',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "complemento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Costa Barros',
        description: 'Bairro do endereço',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Rio de Janeiro',
        description: 'Cidade do endereço',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    (0, swagger_1.ApiProperty)({
        example: 'RJ',
        description: 'Estado do endereço (UF)',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsPostalCode)('BR'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '01000-000',
        description: 'CEP do endereço',
    }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "cep", void 0);
//# sourceMappingURL=create-endereco.dto.js.map