"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalizacoesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const fiscalizacoes_service_1 = require("./fiscalizacoes.service");
const fiscalizacoes_controller_1 = require("./fiscalizacoes.controller");
const fiscalizacoes_repository_1 = require("./fiscalizacoes.repository");
const obras_entity_1 = require("../obras/entities/obras.entity");
const fiscalizacoes_entity_1 = require("./entities/fiscalizacoes.entity");
const obras_module_1 = require("../obras/obras.module");
const relatorios_entity_1 = require("../relatorios/entities/relatorios.entity");
const relatorios_module_1 = require("../relatorios/relatorios.module");
const responsaveis_tecnicos_module_1 = require("../responsaveis-tecnicos/responsaveis-tecnicos.module");
const obras_fiscalizacoes_entity_1 = require("../obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const auth_module_1 = require("../auth/auth.module");
let FiscalizacoesModule = class FiscalizacoesModule {
};
exports.FiscalizacoesModule = FiscalizacoesModule;
exports.FiscalizacoesModule = FiscalizacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                obras_entity_1.Obras,
                obras_fiscalizacoes_entity_1.ObrasFiscalizacoes,
                fiscalizacoes_entity_1.Fiscalizacoes,
                relatorios_entity_1.Relatorios
            ]),
            auth_module_1.AuthModule,
            obras_module_1.ObrasModule,
            relatorios_module_1.RelatoriosModule,
            responsaveis_tecnicos_module_1.ResponsaveisTecnicosModule,
        ],
        controllers: [fiscalizacoes_controller_1.FiscalizacoesController],
        providers: [fiscalizacoes_service_1.FiscalizacoesService, fiscalizacoes_repository_1.FiscalizacoesRepository],
        exports: [fiscalizacoes_service_1.FiscalizacoesService, fiscalizacoes_repository_1.FiscalizacoesRepository],
    })
], FiscalizacoesModule);
//# sourceMappingURL=fiscalizacoes.module.js.map