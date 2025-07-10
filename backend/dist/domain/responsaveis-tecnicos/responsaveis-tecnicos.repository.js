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
exports.ResponsaveisTecnicosRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const responsavel_tecnico_entity_1 = require("./entities/responsavel-tecnico.entity");
let ResponsaveisTecnicosRepository = class ResponsaveisTecnicosRepository {
    responsavelTecnicoModel;
    constructor(responsavelTecnicoModel) {
        this.responsavelTecnicoModel = responsavelTecnicoModel;
    }
    async findAll() {
        return this.responsavelTecnicoModel.findAll({
            include: [
                {
                    association: 'obras',
                    attributes: ['id', 'nome', 'status'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async findById(id) {
        return this.responsavelTecnicoModel.findByPk(id, {
            include: [
                {
                    association: 'obras',
                    attributes: ['id', 'nome', 'status'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async findByCPF(cpf) {
        return this.responsavelTecnicoModel.findOne({
            where: { cpf },
            include: [
                {
                    association: 'obras',
                    attributes: ['id', 'nome', 'status'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async create(data) {
        const { obrasIds, ...responsavelData } = data;
        const novoResponsavel = await this.responsavelTecnicoModel.create(responsavelData);
        if (obrasIds && obrasIds.length > 0) {
            await novoResponsavel.$set('obras', obrasIds);
        }
        const responsavel = await this.findById(novoResponsavel.id);
        if (!responsavel) {
            throw new Error('Responsável Técnico não encontrado após criação');
        }
        return responsavel;
    }
    async update(id, data) {
        const responsavel = await this.responsavelTecnicoModel.findByPk(id);
        if (!responsavel)
            return null;
        const { obrasIds, ...updateData } = data;
        await responsavel.update(updateData);
        if (obrasIds) {
            await responsavel.$set('obras', obrasIds);
        }
        return this.findById(id);
    }
    async delete(id) {
        const deletedCount = await this.responsavelTecnicoModel.destroy({ where: { id } });
        return deletedCount > 0 ? true : false;
    }
};
exports.ResponsaveisTecnicosRepository = ResponsaveisTecnicosRepository;
exports.ResponsaveisTecnicosRepository = ResponsaveisTecnicosRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(responsavel_tecnico_entity_1.ResponsavelTecnico)),
    __metadata("design:paramtypes", [Object])
], ResponsaveisTecnicosRepository);
//# sourceMappingURL=responsaveis-tecnicos.repository.js.map