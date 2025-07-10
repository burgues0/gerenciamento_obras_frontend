"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFornecedoresDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_fornecedores_dto_1 = require("./create-fornecedores.dto");
class UpdateFornecedoresDto extends (0, mapped_types_1.PartialType)(create_fornecedores_dto_1.CreateFornecedoresDto) {
}
exports.UpdateFornecedoresDto = UpdateFornecedoresDto;
//# sourceMappingURL=update-fornecedores.dto.js.map