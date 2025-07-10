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
exports.DiarioDeObraRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const diario_de_obra_entity_1 = require("./entities/diario-de-obra.entity");
const obras_entity_1 = require("../obras/entities/obras.entity");
let DiarioDeObraRepository = class DiarioDeObraRepository {
    diarioDeObraModel;
    obraModel;
    constructor(diarioDeObraModel, obraModel) {
        this.diarioDeObraModel = diarioDeObraModel;
        this.obraModel = obraModel;
    }
    async create(data) {
        return this.diarioDeObraModel.create(data);
    }
    async checkObraExists(obraId) {
        const count = await this.obraModel.count({ where: { id: obraId } });
        return count > 0;
    }
    async findAllByObra(obraId) {
        return this.diarioDeObraModel.findAll({
            where: { obraId },
            order: [['data', 'ASC']],
            include: [
                {
                    association: 'materiaisUtilizados',
                    attributes: ['id', 'nome'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async findById(id) {
        return this.diarioDeObraModel.findByPk(id, {
            include: [
                {
                    association: 'materiaisUtilizados',
                    attributes: ['id', 'nome'],
                    through: { attributes: [] },
                },
            ],
        });
    }
    async update(id, data) {
        return this.diarioDeObraModel.update(data, {
            where: { id },
            returning: true,
        });
    }
    async remove(id) {
        return this.diarioDeObraModel.destroy({ where: { id } });
    }
};
exports.DiarioDeObraRepository = DiarioDeObraRepository;
exports.DiarioDeObraRepository = DiarioDeObraRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(diario_de_obra_entity_1.DiarioDeObra)),
    __param(1, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __metadata("design:paramtypes", [Object, Object])
], DiarioDeObraRepository);
//# sourceMappingURL=diario-de-obra.repository.js.map