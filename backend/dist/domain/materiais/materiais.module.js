"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const materiais_controller_1 = require("./materiais.controller");
const materiais_service_1 = require("./materiais.service");
const materiais_repository_1 = require("./materiais.repository");
const material_entity_1 = require("./entities/material.entity");
const diario_material_entity_1 = require("../diario-materiais/diario-material.entity");
const auth_module_1 = require("../auth/auth.module");
let MateriaisModule = class MateriaisModule {
};
exports.MateriaisModule = MateriaisModule;
exports.MateriaisModule = MateriaisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                material_entity_1.Material, diario_material_entity_1.DiarioMaterial
            ]),
            auth_module_1.AuthModule
        ],
        controllers: [materiais_controller_1.MateriaisController],
        providers: [
            materiais_service_1.MateriaisService,
            materiais_repository_1.MaterialRepository,
        ],
        exports: [
            materiais_repository_1.MaterialRepository,
            materiais_service_1.MateriaisService,
            MateriaisModule
        ],
    })
], MateriaisModule);
//# sourceMappingURL=materiais.module.js.map