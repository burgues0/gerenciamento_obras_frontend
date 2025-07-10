"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipamentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_equipamento_dto_1 = require("./create-equipamento.dto");
class UpdateEquipamentoDto extends (0, mapped_types_1.PartialType)(create_equipamento_dto_1.CreateEquipamentoDto) {
}
exports.UpdateEquipamentoDto = UpdateEquipamentoDto;
//# sourceMappingURL=update-equipamento.dto.js.map