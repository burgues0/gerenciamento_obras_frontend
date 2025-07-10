"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsaveisTecnicosModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const responsaveis_tecnicos_controller_1 = require("./responsaveis-tecnicos.controller");
const responsaveis_tecnicos_service_1 = require("./responsaveis-tecnicos.service");
const responsaveis_tecnicos_repository_1 = require("./responsaveis-tecnicos.repository");
const responsavel_tecnico_entity_1 = require("./entities/responsavel-tecnico.entity");
const obra_responsavel_tecnico_entity_1 = require("../obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const obra_responsavel_tecnico_repository_1 = require("../obra-responsavel-tecnico/obra-responsavel-tecnico.repository");
const document_validator_service_1 = require("../shared/document-validator.service");
const obras_module_1 = require("../obras/obras.module");
const auth_module_1 = require("../auth/auth.module");
let ResponsaveisTecnicosModule = class ResponsaveisTecnicosModule {
};
exports.ResponsaveisTecnicosModule = ResponsaveisTecnicosModule;
exports.ResponsaveisTecnicosModule = ResponsaveisTecnicosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                responsavel_tecnico_entity_1.ResponsavelTecnico,
                obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico,
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => obras_module_1.ObrasModule),
        ],
        controllers: [responsaveis_tecnicos_controller_1.ResponsaveisTecnicosController],
        providers: [
            responsaveis_tecnicos_service_1.ResponsaveisTecnicosService,
            responsaveis_tecnicos_repository_1.ResponsaveisTecnicosRepository,
            obra_responsavel_tecnico_repository_1.ObraResponsavelTecnicoRepository,
            document_validator_service_1.DocumentValidatorService
        ],
        exports: [responsaveis_tecnicos_service_1.ResponsaveisTecnicosService]
    })
], ResponsaveisTecnicosModule);
//# sourceMappingURL=responsaveis-tecnicos.module.js.map