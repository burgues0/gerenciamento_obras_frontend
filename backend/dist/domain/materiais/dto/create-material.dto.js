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
exports.CreateMaterialDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMaterialDto {
    codigo;
    nome;
    unidadeMedida;
    descricao;
    precoUnitario;
    fabricante;
    modelo;
}
exports.CreateMaterialDto = CreateMaterialDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'MAT-001', description: 'Código único do material' }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Cimento CP II', description: 'Nome do material' }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Saco 50kg', description: 'Unidade de medida do material' }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "unidadeMedida", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cimento Portland Composto', description: 'Descrição detalhada do material' }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({ example: 25.99, description: 'Preço unitário do material' }),
    __metadata("design:type", Number)
], CreateMaterialDto.prototype, "precoUnitario", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'Votorantim', description: 'Fabricante/Marca do material' }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "fabricante", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: 'CPB-40', description: 'Modelo/Referência do fabricante' }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "modelo", void 0);
//# sourceMappingURL=create-material.dto.js.map