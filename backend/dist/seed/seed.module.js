"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const seed_service_1 = require("./seed.service");
const obras_entity_1 = require("../domain/obras/entities/obras.entity");
const fornecedores_entity_1 = require("../domain/fornecedores/entities/fornecedores.entity");
const equipamento_entity_1 = require("../domain/equipamentos/entities/equipamento.entity");
const endereco_entity_1 = require("../domain/enderecos/entities/endereco.entity");
const obras_equipamentos_entity_1 = require("../domain/obra-equipamento/entities/obras-equipamentos.entity");
const obras_fornecedores_entity_1 = require("../domain/obra-fornecedor/entities/obras-fornecedores.entity");
const etapas_da_obra_entity_1 = require("../domain/etapas-da-obra/entities/etapas-da-obra.entity");
const diario_de_obra_entity_1 = require("../domain/diario-de-obra/entities/diario-de-obra.entity");
const responsavel_tecnico_entity_1 = require("../domain/responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const obra_responsavel_tecnico_entity_1 = require("../domain/obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const fiscalizacoes_entity_1 = require("../domain/fiscalizacoes/entities/fiscalizacoes.entity");
const obras_fiscalizacoes_entity_1 = require("../domain/obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const relatorios_entity_1 = require("../domain/relatorios/entities/relatorios.entity");
const material_entity_1 = require("../domain/materiais/entities/material.entity");
const diario_material_entity_1 = require("../domain/diario-materiais/diario-material.entity");
let SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule;
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            sequelize_1.SequelizeModule.forFeature([
                obras_entity_1.Obras,
                fornecedores_entity_1.Fornecedores,
                equipamento_entity_1.Equipamentos,
                endereco_entity_1.Endereco,
                etapas_da_obra_entity_1.EtapasDaObra,
                diario_de_obra_entity_1.DiarioDeObra,
                responsavel_tecnico_entity_1.ResponsavelTecnico,
                fiscalizacoes_entity_1.Fiscalizacoes,
                relatorios_entity_1.Relatorios,
                material_entity_1.Material,
                obras_equipamentos_entity_1.ObrasEquipamentos,
                obras_fornecedores_entity_1.ObrasFornecedores,
                obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico,
                obras_fiscalizacoes_entity_1.ObrasFiscalizacoes,
                diario_material_entity_1.DiarioMaterial
            ]),
        ],
        providers: [seed_service_1.SeedService],
    })
], SeedModule);
//# sourceMappingURL=seed.module.js.map