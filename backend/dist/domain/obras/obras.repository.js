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
exports.ObrasRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const obras_entity_1 = require("./entities/obras.entity");
const endereco_entity_1 = require("../enderecos/entities/endereco.entity");
let ObrasRepository = class ObrasRepository {
    obrasModel;
    enderecoModel;
    constructor(obrasModel, enderecoModel) {
        this.obrasModel = obrasModel;
        this.enderecoModel = enderecoModel;
    }
    async findAll() {
        return this.obrasModel.findAll({
            include: [
                {
                    association: 'endereco',
                    attributes: ['id', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'cep'],
                },
                {
                    association: 'fornecedores',
                    attributes: ['id'],
                    through: { attributes: [] },
                },
                {
                    association: 'equipamentos',
                    attributes: ['id'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async findById(id) {
        return this.obrasModel.findByPk(id, {
            attributes: { include: ['enderecoId'] },
            include: [
                {
                    association: 'endereco',
                    attributes: ['id'],
                },
                {
                    association: 'fornecedores',
                    attributes: ['id'],
                    through: { attributes: [] },
                },
                {
                    association: 'equipamentos',
                    attributes: ['id'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async create(data) {
        const { fornecedoresId, equipamentosId, ...obraData } = data;
        const novaObra = await this.obrasModel.create(obraData);
        if (fornecedoresId && fornecedoresId.length > 0) {
            await novaObra.$set('fornecedores', fornecedoresId);
        }
        if (equipamentosId && equipamentosId.length > 0) {
            await novaObra.$set('equipamentos', equipamentosId);
        }
        const obra = await this.findById(novaObra.id);
        if (!obra) {
            throw new Error('Obra not found after creation');
        }
        return obra;
    }
    async update(id, data) {
        const obra = await this.obrasModel.findByPk(id);
        if (!obra)
            return null;
        const { fornecedoresId, equipamentosId, ...updateData } = data;
        await obra.update(updateData);
        if (fornecedoresId) {
            await obra.$set('fornecedores', fornecedoresId);
        }
        if (equipamentosId) {
            await obra.$set('equipamentos', equipamentosId);
        }
        return this.findById(id);
    }
    async delete(id) {
        const obra = await this.obrasModel.findByPk(id);
        if (!obra) {
            return false;
        }
        const enderecoId = obra.enderecoId;
        const deletedCount = await this.obrasModel.destroy({ where: { id } });
        if (deletedCount > 0 && enderecoId) {
            await this.enderecoModel.destroy({ where: { id: enderecoId } });
            return true;
        }
        return false;
    }
};
exports.ObrasRepository = ObrasRepository;
exports.ObrasRepository = ObrasRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __param(1, (0, sequelize_1.InjectModel)(endereco_entity_1.Endereco)),
    __metadata("design:paramtypes", [Object, Object])
], ObrasRepository);
//# sourceMappingURL=obras.repository.js.map