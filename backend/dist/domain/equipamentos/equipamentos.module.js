"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipamentosModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const equipamentos_service_1 = require("./equipamentos.service");
const equipamentos_controller_1 = require("./equipamentos.controller");
const equipamentos_repository_1 = require("./equipamentos.repository");
const equipamento_entity_1 = require("./entities/equipamento.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const obras_equipamentos_entity_1 = require("../obra-equipamento/entities/obras-equipamentos.entity");
const fornecedores_entity_1 = require("../fornecedores/entities/fornecedores.entity");
const fornecedores_module_1 = require("../fornecedores/fornecedores.module");
const obras_module_1 = require("../obras/obras.module");
const equipamentos_controller_2 = require("./equipamentos.controller");
const auth_module_1 = require("../auth/auth.module");
let EquipamentosModule = class EquipamentosModule {
};
exports.EquipamentosModule = EquipamentosModule;
exports.EquipamentosModule = EquipamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                equipamento_entity_1.Equipamentos,
                obras_entity_1.Obras,
                obras_equipamentos_entity_1.ObrasEquipamentos,
                fornecedores_entity_1.Fornecedores,
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => fornecedores_module_1.FornecedoresModule),
            (0, common_1.forwardRef)(() => obras_module_1.ObrasModule),
        ],
        controllers: [equipamentos_controller_1.EquipamentosController, equipamentos_controller_2.ObrasEquipamentoController],
        providers: [equipamentos_service_1.EquipamentosService, equipamentos_repository_1.EquipamentosRepository],
        exports: [equipamentos_repository_1.EquipamentosRepository, equipamentos_service_1.EquipamentosService],
    })
], EquipamentosModule);
//# sourceMappingURL=equipamentos.module.js.map