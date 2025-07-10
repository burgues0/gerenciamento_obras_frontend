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
exports.FornecedoresRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const fornecedores_entity_1 = require("./entities/fornecedores.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
const equipamento_entity_1 = require("../equipamentos/entities/equipamento.entity");
const obras_fornecedores_entity_1 = require("../obra-fornecedor/entities/obras-fornecedores.entity");
let FornecedoresRepository = class FornecedoresRepository {
    fornecedoresModel;
    obrasModel;
    equipamentosModel;
    obraFornecedorModel;
    constructor(fornecedoresModel, obrasModel, equipamentosModel, obraFornecedorModel) {
        this.fornecedoresModel = fornecedoresModel;
        this.obrasModel = obrasModel;
        this.equipamentosModel = equipamentosModel;
        this.obraFornecedorModel = obraFornecedorModel;
    }
    async findAll() {
        return this.fornecedoresModel.findAll({
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
        return this.fornecedoresModel.findByPk(id, {
            include: [
                {
                    model: obras_entity_1.Obras,
                    through: { attributes: [] },
                },
            ],
        });
    }
    async create(data) {
        const { obrasId } = data;
        const novaObra = await this.fornecedoresModel.create(data);
        if (obrasId && obrasId.length > 0) {
            await novaObra.$set('obrasId', obrasId);
        }
        const obra = await this.findById(novaObra.id);
        if (!obra) {
            throw new Error('Obra not found after creation');
        }
        return obra;
    }
    async update(id, data) {
        const fornecedor = await this.fornecedoresModel.findByPk(id);
        if (!fornecedor)
            return null;
        const { obrasId, ...fornecedorData } = data;
        await fornecedor.update(fornecedorData);
        if (obrasId) {
            await fornecedor.$set('obrasId', obrasId);
        }
        return this.findById(id);
    }
    async updateActive(id, ativo) {
        await this.fornecedoresModel.update({ ativo }, { where: { id } });
        return this.findById(id);
    }
    async delete(id) {
        await this.obraFornecedorModel.destroy({
            where: { fornecedorId: id }
        });
        await this.equipamentosModel.update({ fornecedorId: null }, { where: { fornecedorId: id } });
        const deletedCount = await this.fornecedoresModel.destroy({ where: { id } });
        return deletedCount > 0;
    }
    async findSuppliersByObra(obraId) {
        const obra = await this.obrasModel.findByPk(obraId, {
            include: [
                {
                    model: this.fornecedoresModel,
                    through: { attributes: [] },
                },
            ],
        });
        return obra ? (obra.fornecedores ?? []) : null;
    }
    async findOneByOptions(options) {
        return this.fornecedoresModel.findOne(options);
    }
};
exports.FornecedoresRepository = FornecedoresRepository;
exports.FornecedoresRepository = FornecedoresRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(fornecedores_entity_1.Fornecedores)),
    __param(1, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __param(2, (0, sequelize_1.InjectModel)(equipamento_entity_1.Equipamentos)),
    __param(3, (0, sequelize_1.InjectModel)(obras_fornecedores_entity_1.ObrasFornecedores)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], FornecedoresRepository);
//# sourceMappingURL=fornecedores.repository.js.map