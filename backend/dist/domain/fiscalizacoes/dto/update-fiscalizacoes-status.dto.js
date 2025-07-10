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
exports.UpdateFiscalizacaoStatusDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const fiscalizacoes_status_enum_1 = require("../enums/fiscalizacoes-status.enum");
class UpdateFiscalizacaoStatusDto {
    status;
}
exports.UpdateFiscalizacaoStatusDto = UpdateFiscalizacaoStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: fiscalizacoes_status_enum_1.FiscalizacaoStatus, description: 'Novo status da fiscalização' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O status não pode ser vazio.' }),
    (0, class_validator_1.IsEnum)(fiscalizacoes_status_enum_1.FiscalizacaoStatus, { message: 'Status inválido. Valores permitidos: Em Andamento, Concluída, Planejada.' }),
    __metadata("design:type", String)
], UpdateFiscalizacaoStatusDto.prototype, "status", void 0);
//# sourceMappingURL=update-fiscalizacoes-status.dto.js.map