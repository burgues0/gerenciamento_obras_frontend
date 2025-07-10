"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedoresModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const fornecedores_service_1 = require("./fornecedores.service");
const fornecedores_controller_1 = require("./fornecedores.controller");
const fornecedores_repository_1 = require("./fornecedores.repository");
const fornecedores_entity_1 = require("./entities/fornecedores.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const obras_fornecedores_entity_1 = require("../obra-fornecedor/entities/obras-fornecedores.entity");
const equipamento_entity_1 = require("../equipamentos/entities/equipamento.entity");
const obras_module_1 = require("../obras/obras.module");
const auth_module_1 = require("../auth/auth.module");
let FornecedoresModule = class FornecedoresModule {
};
exports.FornecedoresModule = FornecedoresModule;
exports.FornecedoresModule = FornecedoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                fornecedores_entity_1.Fornecedores,
                obras_entity_1.Obras,
                obras_fornecedores_entity_1.ObrasFornecedores,
                equipamento_entity_1.Equipamentos
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => obras_module_1.ObrasModule),
        ],
        controllers: [
            fornecedores_controller_1.FornecedoresController,
            fornecedores_controller_1.ObrasController,
        ],
        providers: [fornecedores_service_1.FornecedoresService, fornecedores_repository_1.FornecedoresRepository],
        exports: [fornecedores_repository_1.FornecedoresRepository, fornecedores_service_1.FornecedoresService],
    })
], FornecedoresModule);
//# sourceMappingURL=fornecedores.module.js.map