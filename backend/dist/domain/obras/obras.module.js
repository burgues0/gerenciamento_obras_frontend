"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObrasModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const obras_service_1 = require("./obras.service");
const obras_controller_1 = require("./obras.controller");
const obras_repository_1 = require("./obras.repository");
const obras_entity_1 = require("./entities/obras.entity");
const endereco_entity_1 = require("../enderecos/entities/endereco.entity");
const fornecedores_entity_1 = require("../fornecedores/entities/fornecedores.entity");
const obras_fornecedores_entity_1 = require("../obra-fornecedor/entities/obras-fornecedores.entity");
const equipamento_entity_1 = require("../equipamentos/entities/equipamento.entity");
const obras_equipamentos_entity_1 = require("../obra-equipamento/entities/obras-equipamentos.entity");
const fornecedores_module_1 = require("../fornecedores/fornecedores.module");
const equipamentos_module_1 = require("../equipamentos/equipamentos.module");
const responsavel_tecnico_entity_1 = require("../responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const obra_responsavel_tecnico_entity_1 = require("../obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const enderecos_module_1 = require("../enderecos/enderecos.module");
const obras_fiscalizacoes_entity_1 = require("../obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const fiscalizacoes_entity_1 = require("../fiscalizacoes/entities/fiscalizacoes.entity");
const relatorios_entity_1 = require("../relatorios/entities/relatorios.entity");
const auth_module_1 = require("../auth/auth.module");
let ObrasModule = class ObrasModule {
};
exports.ObrasModule = ObrasModule;
exports.ObrasModule = ObrasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                obras_entity_1.Obras,
                endereco_entity_1.Endereco,
                fornecedores_entity_1.Fornecedores,
                obras_fornecedores_entity_1.ObrasFornecedores,
                equipamento_entity_1.Equipamentos,
                obras_equipamentos_entity_1.ObrasEquipamentos,
                responsavel_tecnico_entity_1.ResponsavelTecnico,
                obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico,
                obras_fiscalizacoes_entity_1.ObrasFiscalizacoes,
                fiscalizacoes_entity_1.Fiscalizacoes,
                relatorios_entity_1.Relatorios
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => fornecedores_module_1.FornecedoresModule),
            (0, common_1.forwardRef)(() => equipamentos_module_1.EquipamentosModule),
            (0, common_1.forwardRef)(() => enderecos_module_1.EnderecosModule),
        ],
        controllers: [obras_controller_1.ObrasController],
        providers: [obras_service_1.ObrasService, obras_repository_1.ObrasRepository],
        exports: [obras_repository_1.ObrasRepository, obras_service_1.ObrasService],
    })
], ObrasModule);
//# sourceMappingURL=obras.module.js.map