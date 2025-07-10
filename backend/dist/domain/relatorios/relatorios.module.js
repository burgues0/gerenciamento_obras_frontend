"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatoriosModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const relatorios_entity_1 = require("../relatorios/entities/relatorios.entity");
const relatorios_controller_1 = require("./relatorios.controller");
const relatorios_repository_1 = require("./relatorios.repository");
const relatorios_service_1 = require("./relatorios.service");
const auth_module_1 = require("../auth/auth.module");
let RelatoriosModule = class RelatoriosModule {
};
exports.RelatoriosModule = RelatoriosModule;
exports.RelatoriosModule = RelatoriosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                relatorios_entity_1.Relatorios
            ]),
            auth_module_1.AuthModule
        ],
        controllers: [relatorios_controller_1.RelatoriosController],
        providers: [relatorios_service_1.RelatoriosService, relatorios_repository_1.RelatoriosRepository],
        exports: [relatorios_service_1.RelatoriosService, relatorios_repository_1.RelatoriosRepository],
    })
], RelatoriosModule);
//# sourceMappingURL=relatorios.module.js.map