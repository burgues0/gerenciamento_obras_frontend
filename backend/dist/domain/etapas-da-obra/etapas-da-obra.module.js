"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtapasDaObraModule = void 0;
const common_1 = require("@nestjs/common");
const etapas_da_obra_controller_1 = require("./etapas-da-obra.controller");
const sequelize_1 = require("@nestjs/sequelize");
const etapas_da_obra_entity_1 = require("./entities/etapas-da-obra.entity");
const etapas_da_obra_service_1 = require("./etapas-da-obra.service");
const etapas_da_obra_repository_1 = require("./etapas-da-obra.repository");
const obras_entity_1 = require("../obras/entities/obras.entity");
const auth_module_1 = require("../auth/auth.module");
let EtapasDaObraModule = class EtapasDaObraModule {
};
exports.EtapasDaObraModule = EtapasDaObraModule;
exports.EtapasDaObraModule = EtapasDaObraModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                etapas_da_obra_entity_1.EtapasDaObra,
                obras_entity_1.Obras
            ]),
            auth_module_1.AuthModule
        ],
        controllers: [etapas_da_obra_controller_1.EtapasDaObraController],
        providers: [etapas_da_obra_service_1.EtapasDaObraService, etapas_da_obra_repository_1.EtapasDaObraRepository],
    })
], EtapasDaObraModule);
//# sourceMappingURL=etapas-da-obra.module.js.map