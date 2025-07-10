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
exports.EnderecoRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const endereco_entity_1 = require("./entities/endereco.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
let EnderecoRepository = class EnderecoRepository {
    enderecoModel;
    obraModel;
    constructor(enderecoModel, obraModel) {
        this.enderecoModel = enderecoModel;
        this.obraModel = obraModel;
    }
    async findAll() {
        return this.enderecoModel.findAll({
            include: [
                {
                    model: obras_entity_1.Obras,
                    attributes: ['id'],
                },
            ],
        });
    }
    async create(obraId, enderecoData) {
        const createdEndereco = await this.enderecoModel.create(enderecoData);
        await this.obraModel.update({ enderecoId: createdEndereco.id }, { where: { id: obraId } });
        return this.findById(createdEndereco.id);
    }
    async findById(id) {
        return this.enderecoModel.findByPk(id);
    }
    async findEnderecoByObraId(obraId) {
        const obra = await this.obraModel.findOne({
            where: { id: obraId },
            attributes: ['enderecoId'],
        });
        if (!obra || obra.enderecoId == null) {
            return null;
        }
        return this.enderecoModel.findByPk(obra.enderecoId);
    }
    async update(obraId, enderecoData) {
        const obra = await this.obraModel.findByPk(obraId);
        if (!obra || obra.enderecoId == null) {
            throw new Error('Obra não encontrada ou sem endereço associado.');
        }
        await this.enderecoModel.update(enderecoData, {
            where: { id: obra.enderecoId },
        });
    }
};
exports.EnderecoRepository = EnderecoRepository;
exports.EnderecoRepository = EnderecoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(endereco_entity_1.Endereco)),
    __param(1, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __metadata("design:paramtypes", [Object, Object])
], EnderecoRepository);
//# sourceMappingURL=endereco.repository.js.map