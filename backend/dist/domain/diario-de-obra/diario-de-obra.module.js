"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiarioDeObraModule = void 0;
const common_1 = require("@nestjs/common");
const diario_de_obra_service_1 = require("./diario-de-obra.service");
const diario_de_obra_controller_1 = require("./diario-de-obra.controller");
const diario_de_obra_repository_1 = require("./diario-de-obra.repository");
const sequelize_1 = require("@nestjs/sequelize");
const diario_de_obra_entity_1 = require("./entities/diario-de-obra.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const material_entity_1 = require("../materiais/entities/material.entity");
const diario_material_entity_1 = require("../diario-materiais/diario-material.entity");
const materiais_module_1 = require("../materiais/materiais.module");
const auth_module_1 = require("../auth/auth.module");
let DiarioDeObraModule = class DiarioDeObraModule {
};
exports.DiarioDeObraModule = DiarioDeObraModule;
exports.DiarioDeObraModule = DiarioDeObraModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                diario_de_obra_entity_1.DiarioDeObra,
                obras_entity_1.Obras,
                material_entity_1.Material,
                diario_material_entity_1.DiarioMaterial
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => materiais_module_1.MateriaisModule),
        ],
        controllers: [diario_de_obra_controller_1.DiarioDeObraController],
        providers: [diario_de_obra_service_1.DiarioDeObraService, diario_de_obra_repository_1.DiarioDeObraRepository],
    })
], DiarioDeObraModule);
//# sourceMappingURL=diario-de-obra.module.js.map