"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecosModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const endereco_repository_1 = require("./endereco.repository");
const endereco_entity_1 = require("./entities/endereco.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const obras_module_1 = require("../obras/obras.module");
const enderecos_controller_1 = require("./enderecos.controller");
const enderecos_service_1 = require("./enderecos.service");
const auth_module_1 = require("../auth/auth.module");
let EnderecosModule = class EnderecosModule {
};
exports.EnderecosModule = EnderecosModule;
exports.EnderecosModule = EnderecosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                endereco_entity_1.Endereco,
                obras_entity_1.Obras
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => obras_module_1.ObrasModule),
        ],
        controllers: [enderecos_controller_1.EnderecosGlobalController, enderecos_controller_1.ObrasEnderecosController],
        providers: [endereco_repository_1.EnderecoRepository, enderecos_service_1.EnderecosService],
        exports: [endereco_repository_1.EnderecoRepository],
    })
], EnderecosModule);
//# sourceMappingURL=enderecos.module.js.map