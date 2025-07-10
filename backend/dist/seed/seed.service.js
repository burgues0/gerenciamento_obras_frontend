"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const faker_1 = require("@faker-js/faker");
const tipo_vinculo_obra_enum_1 = require("../domain/obra-responsavel-tecnico/enums/tipo-vinculo-obra.enum");
const etapas_da_obra_entity_1 = require("../domain/etapas-da-obra/entities/etapas-da-obra.entity");
const diario_de_obra_entity_1 = require("../domain/diario-de-obra/entities/diario-de-obra.entity");
const endereco_entity_1 = require("../domain/enderecos/entities/endereco.entity");
const equipamento_entity_1 = require("../domain/equipamentos/entities/equipamento.entity");
const etapas_da_obra_entity_2 = require("../domain/etapas-da-obra/entities/etapas-da-obra.entity");
const fiscalizacoes_entity_1 = require("../domain/fiscalizacoes/entities/fiscalizacoes.entity");
const fornecedores_entity_1 = require("../domain/fornecedores/entities/fornecedores.entity");
const material_entity_1 = require("../domain/materiais/entities/material.entity");
const obra_responsavel_tecnico_entity_1 = require("../domain/obra-responsavel-tecnico/entities/obra-responsavel-tecnico.entity");
const obras_equipamentos_entity_1 = require("../domain/obra-equipamento/entities/obras-equipamentos.entity");
const obras_fiscalizacoes_entity_1 = require("../domain/obra-fiscalizacoes/entities/obras-fiscalizacoes.entity");
const obras_fornecedores_entity_1 = require("../domain/obra-fornecedor/entities/obras-fornecedores.entity");
const obras_entity_1 = require("../domain/obras/entities/obras.entity");
const relatorios_entity_1 = require("../domain/relatorios/entities/relatorios.entity");
const responsavel_tecnico_entity_1 = require("../domain/responsaveis-tecnicos/entities/responsavel-tecnico.entity");
const seed_constants_1 = require("./seed.constants");
const diario_material_entity_1 = require("../domain/diario-materiais/diario-material.entity");
let SeedService = class SeedService {
    diariosModel;
    enderecoModel;
    equipamentosModel;
    etapasModel;
    fiscalizacoesModel;
    fornecedoresModel;
    materialModel;
    obrasModel;
    obraResponsavelTecnicoModel;
    obrasEquipamentosModel;
    obrasFiscalizacoesModel;
    obrasFornecedoresModel;
    relatoriosModel;
    responsavelTecnicoModel;
    diarioMateriaisModel;
    configService;
    sequelize;
    constructor(diariosModel, enderecoModel, equipamentosModel, etapasModel, fiscalizacoesModel, fornecedoresModel, materialModel, obrasModel, obraResponsavelTecnicoModel, obrasEquipamentosModel, obrasFiscalizacoesModel, obrasFornecedoresModel, relatoriosModel, responsavelTecnicoModel, diarioMateriaisModel, configService, sequelize) {
        this.diariosModel = diariosModel;
        this.enderecoModel = enderecoModel;
        this.equipamentosModel = equipamentosModel;
        this.etapasModel = etapasModel;
        this.fiscalizacoesModel = fiscalizacoesModel;
        this.fornecedoresModel = fornecedoresModel;
        this.materialModel = materialModel;
        this.obrasModel = obrasModel;
        this.obraResponsavelTecnicoModel = obraResponsavelTecnicoModel;
        this.obrasEquipamentosModel = obrasEquipamentosModel;
        this.obrasFiscalizacoesModel = obrasFiscalizacoesModel;
        this.obrasFornecedoresModel = obrasFornecedoresModel;
        this.relatoriosModel = relatoriosModel;
        this.responsavelTecnicoModel = responsavelTecnicoModel;
        this.diarioMateriaisModel = diarioMateriaisModel;
        this.configService = configService;
        this.sequelize = sequelize;
    }
    async onModuleInit() {
        const env = this.configService.get('NODE_ENV');
        if (env === 'development') {
            await this.seedDevelopment();
        }
        else if (env === 'production') {
            await this.seedProduction();
        }
    }
    async clearAll() {
        await this.obrasFiscalizacoesModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.obraResponsavelTecnicoModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.obrasEquipamentosModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.obrasFornecedoresModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.diariosModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.etapasModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.relatoriosModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.fiscalizacoesModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.responsavelTecnicoModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.materialModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.obrasModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.equipamentosModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.fornecedoresModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
        await this.enderecoModel.destroy({ where: {}, truncate: true, cascade: true, force: true });
    }
    async resetSequences() {
        const sequences = [
            'obras_id_seq',
            'fornecedores_id_seq',
            'equipamentos_id_seq',
            'enderecos_id_seq',
            'etapas_obra_id_seq',
            'diarios_obra_id_seq',
            'responsaveis_tecnicos_id_seq',
            'fiscalizacoes_id_seq',
            'relatorios_id_seq',
            'materiais_id_seq',
            'obra_responsavel_tecnico_id_seq',
        ];
        for (const seq of sequences) {
            try {
                await this.sequelize.query(`ALTER SEQUENCE "${seq}" RESTART WITH 1`);
                console.log(`Sequence ${seq} reiniciada.`);
            }
            catch {
                console.warn(`Sequence ${seq} não existe ou não pode ser reiniciada, ignorando.`);
            }
        }
    }
    async seedDevelopment() {
        console.log('Gerando seed de desenvolvimento...');
        await this.clearAll();
        await this.resetSequences();
        await this.seedData();
    }
    async seedProduction() {
        try {
            const count = await this.obrasModel.count();
            if (count > 0) {
                console.log('Seed já existente em produção. Nenhuma ação realizada.');
                return;
            }
            console.log('Banco de dados de produção vazio. Gerando seed inicial...');
            await this.seedData();
        }
        catch (error) {
            if (error.name === 'SequelizeDatabaseError') {
                console.log('Tabelas não encontradas. Gerando seed inicial para produção...');
                await this.seedData();
            }
            else {
                throw error;
            }
        }
    }
    async seedData() {
        const fornecedores = [];
        const equipamentos = [];
        const obras = [];
        const responsaveisTecnicos = [];
        const fiscalizacoes = [];
        for (let i = 0; i < 12; i++) {
            const template = faker_1.faker.helpers.arrayElement(seed_constants_1.templatesDeMaterial);
            await this.materialModel.create({
                codigo: `MAT-${faker_1.faker.string.alphanumeric(5).toUpperCase()}`,
                nome: template.nome,
                unidadeMedida: template.unidade,
                descricao: template.descricao,
                precoUnitario: faker_1.faker.number.float({ min: 10, max: 800, precision: 0.01 }),
                fabricante: faker_1.faker.helpers.arrayElement(template.fabricantes),
                modelo: faker_1.faker.string.alphanumeric(10),
            });
        }
        for (let i = 0; i < 15; i++) {
            const responsavel = await this.responsavelTecnicoModel.create({
                nome: faker_1.faker.person.fullName(),
                cpf: faker_1.faker.string.numeric(11),
                registro_profissional: `CREA-${faker_1.faker.string.numeric(6)}`,
                especialidade: faker_1.faker.helpers.arrayElement(['Engenharia Civil', 'Arquitetura', 'Engenharia Elétrica']),
                ativo: true,
            });
            responsaveisTecnicos.push(responsavel);
        }
        for (let i = 0; i < 12; i++) {
            let nomeFornecedor;
            const tipoNome = faker_1.faker.number.int({ min: 1, max: 4 });
            switch (tipoNome) {
                case 1:
                    nomeFornecedor = `${faker_1.faker.helpers.arrayElement(seed_constants_1.prefixosComerciais)} ${faker_1.faker.helpers.arrayElement(seed_constants_1.sobrenomesComuns)} ${faker_1.faker.helpers.arrayElement(seed_constants_1.sufixosComerciais)}`;
                    break;
                case 2:
                    nomeFornecedor = `${faker_1.faker.helpers.arrayElement(seed_constants_1.prefixosComerciais)} ${faker_1.faker.helpers.arrayElement(seed_constants_1.sufixosComerciais)}`;
                    break;
                case 3:
                    nomeFornecedor = `${faker_1.faker.helpers.arrayElement(seed_constants_1.sobrenomesComuns)} ${faker_1.faker.helpers.arrayElement(seed_constants_1.sufixosComerciais)}`;
                    break;
                case 4:
                    nomeFornecedor = `${faker_1.faker.helpers.arrayElement(seed_constants_1.prefixosComerciais)} ${faker_1.faker.helpers.arrayElement(seed_constants_1.nucleosTecnicos)}`;
                    break;
                default:
                    nomeFornecedor = `Fornecedor Padrão ${i + 1} Ltda`;
            }
            const dominio = faker_1.faker.helpers.arrayElement(seed_constants_1.dominiosEmail);
            const emailFornecedor = nomeFornecedor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '.') + i + dominio;
            const fornecedor = await this.fornecedoresModel.create({
                nome: nomeFornecedor,
                cnpj: faker_1.faker.string.numeric(14),
                email: emailFornecedor,
                telefone: faker_1.faker.phone.number('(##) 9####-####'),
                endereco: faker_1.faker.location.streetAddress(),
            });
            fornecedores.push(fornecedor);
        }
        for (let i = 0; i < 12; i++) {
            const fornecedor = faker_1.faker.helpers.arrayElement(fornecedores);
            const equipamentoInfo = faker_1.faker.helpers.arrayElement(seed_constants_1.equipamentosInfo);
            const equipamento = await this.equipamentosModel.create({
                nome: equipamentoInfo.nome,
                tipo: equipamentoInfo.tipo,
                marca: equipamentoInfo.marca,
                modelo: `Mod-${faker_1.faker.string.alphanumeric(4).toUpperCase()}`,
                numeroDeSerie: faker_1.faker.string.alphanumeric(10).toUpperCase(),
                estado: faker_1.faker.helpers.arrayElement(['Novo', 'Usado', 'Revisado']),
                fornecedorId: fornecedor.id,
            });
            equipamentos.push(equipamento);
        }
        for (let i = 0; i < 12; i++) {
            const endereco = await this.enderecoModel.create({
                rua: faker_1.faker.location.street(),
                numero: faker_1.faker.string.numeric(3),
                bairro: faker_1.faker.location.street(),
                cidade: faker_1.faker.location.city(),
                estado: faker_1.faker.location.state({ abbreviated: true }),
                cep: faker_1.faker.location.zipCode(),
                complemento: faker_1.faker.helpers.arrayElement(seed_constants_1.complementosObra),
            });
            const dataInicio = faker_1.faker.date.past({ years: 1 });
            const dataConclusao = faker_1.faker.date.future({ years: 1, refDate: dataInicio });
            const orcamentoTotal = faker_1.faker.number.int({ min: 500_000, max: 3_000_000 });
            const gastosAtualizados = parseFloat((orcamentoTotal * faker_1.faker.number.float({ min: 0.4, max: 1, precision: 0.01 })).toFixed(2));
            const percentualConcluido = parseFloat(faker_1.faker.number.float({ min: 0, max: 100, precision: 0.01 }).toFixed(2));
            const nomeDaObra = `Construção do Edifício ${faker_1.faker.word.words(2)}`;
            const templatesDescricao = (0, seed_constants_1.gerarTemplatesDescricaoObra)(nomeDaObra, endereco.cidade);
            const descricaoDaObra = faker_1.faker.helpers.arrayElement(templatesDescricao);
            const obra = await this.obrasModel.create({
                nome: nomeDaObra,
                descricao: descricaoDaObra,
                status: faker_1.faker.helpers.arrayElement(['Planejada', 'Em andamento', 'Concluída', 'Paralisada']),
                data_inicio: dataInicio,
                data_conclusao: dataConclusao,
                orcamento_total: orcamentoTotal,
                gastos_atualizados: gastosAtualizados,
                percentual_concluido: percentualConcluido,
                enderecoId: endereco.id,
                latitude: faker_1.faker.location.latitude(),
                longitude: faker_1.faker.location.longitude(),
            });
            obras.push(obra);
        }
        const numeroDeFiscalizacoesACriar = 20;
        for (let i = 0; i < numeroDeFiscalizacoesACriar; i++) {
            const info = faker_1.faker.helpers.arrayElement(seed_constants_1.opcoesDeFiscalizacao);
            const responsavel = faker_1.faker.helpers.arrayElement(responsaveisTecnicos);
            const fiscalizacao = await this.fiscalizacoesModel.create({
                titulo: info.titulo,
                descricao: info.descricao,
                data_inicio: faker_1.faker.date.past({ years: 1 }),
                data_fim: faker_1.faker.date.recent(),
                status: faker_1.faker.helpers.arrayElement(['Planejada', 'Em Andamento', 'Concluída']),
                responsavelTecnicoId: responsavel.id,
            });
            fiscalizacoes.push(fiscalizacao);
            await this.relatoriosModel.create({
                titulo: info.relatorioTitulo,
                conteudo: info.relatorioConteudo,
                dataCriacao: new Date(),
                fiscalizacaoId: fiscalizacao.id,
            });
        }
        for (const obra of obras) {
            const selectedFornecedores = faker_1.faker.helpers.arrayElements(fornecedores, { min: 2, max: 4 });
            for (const fornecedor of selectedFornecedores) {
                await this.obrasFornecedoresModel.create({ obraId: obra.id, fornecedorId: fornecedor.id });
            }
            const selectedEquipamentos = faker_1.faker.helpers.arrayElements(equipamentos, { min: 3, max: 5 });
            for (const equipamento of selectedEquipamentos) {
                await this.obrasEquipamentosModel.create({ obraId: obra.id, equipamentoId: equipamento.id });
            }
            if (responsaveisTecnicos.length > 0) {
                const selectedResponsaveis = faker_1.faker.helpers.arrayElements(responsaveisTecnicos, { min: 1, max: 2 });
                for (const responsavel of selectedResponsaveis) {
                    const dataInicioVinculo = faker_1.faker.date.between({
                        from: obra.data_inicio,
                        to: obra.data_conclusao || faker_1.faker.date.future({ years: 1, refDate: obra.data_inicio })
                    });
                    const dataFimVinculo = faker_1.faker.date.between({
                        from: dataInicioVinculo,
                        to: obra.data_conclusao || faker_1.faker.date.future({ years: 2, refDate: dataInicioVinculo })
                    });
                    await this.obraResponsavelTecnicoModel.create({
                        obraId: obra.id,
                        responsavelTecnicoId: responsavel.id,
                        tipo_vinculo: faker_1.faker.helpers.arrayElement(Object.values(tipo_vinculo_obra_enum_1.TipoVinculoObra)),
                        data_inicio: dataInicioVinculo,
                        data_fim: dataFimVinculo,
                    });
                }
            }
            if (fiscalizacoes.length > 0 && faker_1.faker.datatype.boolean()) {
                const amountToSelect = faker_1.faker.number.int({
                    min: 1,
                    max: Math.min(3, fiscalizacoes.length),
                });
                const selectedFiscalizacoes = faker_1.faker.helpers.arrayElements(fiscalizacoes, amountToSelect);
                for (const fiscalizacao of selectedFiscalizacoes) {
                    await this.obrasFiscalizacoesModel.create({ obraId: obra.id, fiscalizacaoId: fiscalizacao.id });
                }
            }
        }
        for (let j = 0; j < 18; j++) {
            const obraAleatoria = faker_1.faker.helpers.arrayElement(obras);
            const dataInicioPrevista = faker_1.faker.date.future({ years: 1 });
            const dataFimPrevista = faker_1.faker.date.future({ years: 1, refDate: dataInicioPrevista });
            const etapaInfo = faker_1.faker.helpers.arrayElement(seed_constants_1.etapasPredefinidas);
            await this.etapasModel.create({
                nome: `${etapaInfo.nome} da ${obraAleatoria.nome}`,
                descricao: etapaInfo.descricao,
                dataInicioPrevista,
                dataFimPrevista,
                dataInicioReal: faker_1.faker.date.between({ from: dataInicioPrevista, to: dataFimPrevista }),
                dataFimReal: faker_1.faker.date.between({ from: dataInicioPrevista, to: dataFimPrevista }),
                status: faker_1.faker.helpers.arrayElement(Object.values(etapas_da_obra_entity_1.EtapaStatus)),
                obraId: obraAleatoria.id,
            });
            const atividadeObs = faker_1.faker.helpers.arrayElement(seed_constants_1.atividadesEObservacoes);
            const materiaisUsados = faker_1.faker.helpers.arrayElements(seed_constants_1.materiaisDeObra, { min: 2, max: 5 }).join(', ');
            const diario = await this.diariosModel.create({
                data: faker_1.faker.date.recent().toISOString().split('T')[0],
                clima: faker_1.faker.helpers.arrayElement(['Ensolarado', 'Nublado', 'Chuvoso', 'Parcialmente Nublado']),
                atividadesExecutadas: atividadeObs.atividade,
                materiaisUtilizados: materiaisUsados,
                observacoes: atividadeObs.observacao,
                obraId: obraAleatoria.id,
            });
            const selectedMateriais = faker_1.faker.helpers.arrayElements(await this.materialModel.findAll(), faker_1.faker.number.int({ min: 2, max: 3 }));
            for (const material of selectedMateriais) {
                await this.diarioMateriaisModel.create({
                    diarioDeObraId: diario.id,
                    materialId: material.id,
                });
            }
        }
        const env = this.configService.get('NODE_ENV');
        const isProd = env === 'production';
        console.log(`Seed ${isProd ? 'fixa (produção)' : 'aleatória (desenvolvimento)'} gerada com sucesso.`);
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(diario_de_obra_entity_1.DiarioDeObra)),
    __param(1, (0, sequelize_1.InjectModel)(endereco_entity_1.Endereco)),
    __param(2, (0, sequelize_1.InjectModel)(equipamento_entity_1.Equipamentos)),
    __param(3, (0, sequelize_1.InjectModel)(etapas_da_obra_entity_2.EtapasDaObra)),
    __param(4, (0, sequelize_1.InjectModel)(fiscalizacoes_entity_1.Fiscalizacoes)),
    __param(5, (0, sequelize_1.InjectModel)(fornecedores_entity_1.Fornecedores)),
    __param(6, (0, sequelize_1.InjectModel)(material_entity_1.Material)),
    __param(7, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __param(8, (0, sequelize_1.InjectModel)(obra_responsavel_tecnico_entity_1.ObraResponsavelTecnico)),
    __param(9, (0, sequelize_1.InjectModel)(obras_equipamentos_entity_1.ObrasEquipamentos)),
    __param(10, (0, sequelize_1.InjectModel)(obras_fiscalizacoes_entity_1.ObrasFiscalizacoes)),
    __param(11, (0, sequelize_1.InjectModel)(obras_fornecedores_entity_1.ObrasFornecedores)),
    __param(12, (0, sequelize_1.InjectModel)(relatorios_entity_1.Relatorios)),
    __param(13, (0, sequelize_1.InjectModel)(responsavel_tecnico_entity_1.ResponsavelTecnico)),
    __param(14, (0, sequelize_1.InjectModel)(diario_material_entity_1.DiarioMaterial)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, config_1.ConfigService,
        sequelize_typescript_1.Sequelize])
], SeedService);
//# sourceMappingURL=seed.service.js.map