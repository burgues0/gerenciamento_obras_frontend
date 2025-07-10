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
exports.CreateVinculoObraDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const tipo_vinculo_obra_enum_1 = require("../enums/tipo-vinculo-obra.enum");
const class_transformer_1 = require("class-transformer");
class CreateVinculoObraDto {
    obraId;
    dataInicio;
    dataFim;
    tipoVinculo;
}
exports.CreateVinculoObraDto = CreateVinculoObraDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da obra' }),
    __metadata("design:type", Number)
], CreateVinculoObraDto.prototype, "obraId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00.000Z', description: 'Data de início da responsabilidade' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", String)
], CreateVinculoObraDto.prototype, "dataInicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-12-31T23:59:59.999Z', description: 'Data fim da responsabilidade' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", String)
], CreateVinculoObraDto.prototype, "dataFim", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(tipo_vinculo_obra_enum_1.TipoVinculoObra),
    (0, swagger_1.ApiPropertyOptional)({ enum: tipo_vinculo_obra_enum_1.TipoVinculoObra, example: tipo_vinculo_obra_enum_1.TipoVinculoObra.RT_EXECUCAO, description: 'Tipo de vínculo' }),
    __metadata("design:type", String)
], CreateVinculoObraDto.prototype, "tipoVinculo", void 0);
//# sourceMappingURL=create-obra-responsavel-tecnico.dto.js.map