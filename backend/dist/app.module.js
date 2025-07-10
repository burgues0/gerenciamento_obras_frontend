"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
require("dotenv/config");
const auth_module_1 = require("./domain/auth/auth.module");
const enderecos_module_1 = require("./domain/enderecos/enderecos.module");
const equipamentos_module_1 = require("./domain/equipamentos/equipamentos.module");
const fornecedores_module_1 = require("./domain/fornecedores/fornecedores.module");
const obras_module_1 = require("./domain/obras/obras.module");
const etapas_da_obra_module_1 = require("./domain/etapas-da-obra/etapas-da-obra.module");
const responsaveis_tecnicos_module_1 = require("./domain/responsaveis-tecnicos/responsaveis-tecnicos.module");
const diario_de_obra_module_1 = require("./domain/diario-de-obra/diario-de-obra.module");
const materiais_module_1 = require("./domain/materiais/materiais.module");
const seed_module_1 = require("./seed/seed.module");
const obras_entity_1 = require("./domain/obras/entities/obras.entity");
const fornecedores_entity_1 = require("./domain/fornecedores/entities/fornecedores.entity");
const equipamento_entity_1 = require("./domain/equipamentos/entities/equipamento.entity");
const endereco_entity_1 = require("./domain/enderecos/entities/endereco.entity");
const obras_equipamentos_entity_1 = require("./domain/obra-equipamento/entities/obras-equipamentos.entity");
const obras_fornecedores_entity_1 = require("./domain/obra-fornecedor/entities/obras-fornecedores.entity");
const etapas_da_obra_entity_1 = require("./domain/etapas-da-obra/entities/etapas-da-obra.entity");
const diario_de_obra_entity_1 = require("./domain/diario-de-obra/entities/diario-de-obra.entity");
const fiscalizacoes_entity_1 = require("./domain/fiscalizacoes/entities/fiscalizacoes.entity");
const obras_fiscalizacoes_entity_1 = require("./domain/obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const relatorios_entity_1 = require("./domain/relatorios/entities/relatorios.entity");
const fiscalizacoes_module_1 = require("./domain/fiscalizacoes/fiscalizacoes.module");
const relatorios_module_1 = require("./domain/relatorios/relatorios.module");
const diario_material_entity_1 = require("./domain/diario-materiais/diario-material.entity");
const { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                useFactory: () => {
                    if (!DB_HOST || !DB_PORT || !DB_DATABASE || !DB_USER || !DB_PASSWORD) {
                        throw new Error('Variáveis de ambiente para conexão com o banco de dados não foram encontradas. Verifique seu arquivo .env.');
                    }
                    const port = parseInt(DB_PORT, 10);
                    if (isNaN(port)) {
                        throw new Error(`DB_PORT inválido: "${DB_PORT}". Deve ser um número.`);
                    }
                    console.log(`Conectando ao banco de dados: postgres://${DB_USER}@${DB_HOST}:${port}/${DB_DATABASE}`);
                    return {
                        dialect: 'postgres',
                        host: DB_HOST,
                        port,
                        username: DB_USER,
                        password: DB_PASSWORD,
                        database: DB_DATABASE,
                        autoLoadModels: true,
                        synchronize: true,
                        logging: console.log,
                        dialectOptions: {},
                    };
                },
            }),
            sequelize_1.SequelizeModule.forFeature([
                obras_entity_1.Obras,
                fornecedores_entity_1.Fornecedores,
                equipamento_entity_1.Equipamentos,
                endereco_entity_1.Endereco,
                obras_equipamentos_entity_1.ObrasEquipamentos,
                obras_fornecedores_entity_1.ObrasFornecedores,
                etapas_da_obra_entity_1.EtapasDaObra,
                diario_de_obra_entity_1.DiarioDeObra,
                fiscalizacoes_entity_1.Fiscalizacoes,
                obras_fiscalizacoes_entity_1.ObrasFiscalizacoes,
                relatorios_entity_1.Relatorios,
                diario_material_entity_1.DiarioMaterial
            ]),
            auth_module_1.AuthModule,
            enderecos_module_1.EnderecosModule,
            equipamentos_module_1.EquipamentosModule,
            fornecedores_module_1.FornecedoresModule,
            obras_module_1.ObrasModule,
            etapas_da_obra_module_1.EtapasDaObraModule,
            responsaveis_tecnicos_module_1.ResponsaveisTecnicosModule,
            diario_de_obra_module_1.DiarioDeObraModule,
            materiais_module_1.MateriaisModule,
            seed_module_1.SeedModule,
            fiscalizacoes_module_1.FiscalizacoesModule,
            relatorios_module_1.RelatoriosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map