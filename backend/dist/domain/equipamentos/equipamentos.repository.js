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
exports.EquipamentosRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const equipamento_entity_1 = require("./entities/equipamento.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const fornecedores_entity_1 = require("../fornecedores/entities/fornecedores.entity");
let EquipamentosRepository = class EquipamentosRepository {
    equipamentosModel;
    obrasModel;
    fornecedoresModel;
    constructor(equipamentosModel, obrasModel, fornecedoresModel) {
        this.equipamentosModel = equipamentosModel;
        this.obrasModel = obrasModel;
        this.fornecedoresModel = fornecedoresModel;
    }
    async findAll() {
        return this.equipamentosModel.findAll({
            include: [
                {
                    model: obras_entity_1.Obras,
                    attributes: ['id'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async findById(id) {
        return this.equipamentosModel.findByPk(id, {
            include: [
                {
                    model: this.obrasModel,
                    through: { attributes: [] },
                },
                {
                    model: this.fornecedoresModel,
                },
            ],
        });
    }
    async create(data) {
        const { obrasId, ...equipamentoData } = data;
        const novoEquipamento = await this.equipamentosModel.create(equipamentoData);
        if (obrasId && obrasId.length > 0) {
            await novoEquipamento.$set('obras', obrasId);
        }
        const equipamento = await this.equipamentosModel.findByPk(novoEquipamento.id, {
            include: [{ model: obras_entity_1.Obras, through: { attributes: [] } }],
        });
        if (!equipamento) {
            throw new Error('Equipamento não encontrado após criação');
        }
        return equipamento;
    }
    async update(id, data) {
        const equipamento = await this.equipamentosModel.findByPk(id);
        if (!equipamento) {
            throw new Error('Equipamento não encontrado');
        }
        const { obrasId, ...equipamentoData } = data;
        await equipamento.update(equipamentoData);
        if (obrasId) {
            await equipamento.$set('obras', obrasId);
        }
    }
    async updateObras(equipamento, obras) {
        await equipamento.$set('obras', obras);
        this.equipamentosModel.findByPk(equipamento.id, {
            include: ['obras'],
        });
    }
    async remove(id) {
        const deletedCount = await this.equipamentosModel.destroy({ where: { id } });
        deletedCount > 0;
    }
    async findByObraId(obraId) {
        return this.equipamentosModel.findAll({
            include: [
                {
                    model: obras_entity_1.Obras,
                    as: 'obras',
                    where: { id: obraId },
                    attributes: [],
                    required: true,
                },
                {
                    model: fornecedores_entity_1.Fornecedores,
                    as: 'fornecedor',
                },
            ],
        });
    }
    async findOneByOptions(options) {
        return this.equipamentosModel.findOne(options);
    }
};
exports.EquipamentosRepository = EquipamentosRepository;
exports.EquipamentosRepository = EquipamentosRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(equipamento_entity_1.Equipamentos)),
    __param(1, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __param(2, (0, sequelize_1.InjectModel)(fornecedores_entity_1.Fornecedores)),
    __metadata("design:paramtypes", [Object, Object, Object])
], EquipamentosRepository);
//# sourceMappingURL=equipamentos.repository.js.map