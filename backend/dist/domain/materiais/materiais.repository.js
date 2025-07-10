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
exports.MaterialRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const material_entity_1 = require("./entities/material.entity");
let MaterialRepository = class MaterialRepository {
    materialModel;
    constructor(materialModel) {
        this.materialModel = materialModel;
    }
    async findByCodigo(codigo) {
        return this.materialModel.findOne({
            where: { codigo },
        });
    }
    async create(dto) {
        return this.materialModel.create(dto);
    }
    async findAll() {
        return this.materialModel.findAll({
            order: [['nome', 'ASC']],
        });
    }
    async findById(id) {
        return this.materialModel.findByPk(id);
    }
    async update(id, dto) {
        return this.materialModel.update(dto, {
            where: { id },
        });
    }
    async delete(id) {
        return this.materialModel.destroy({
            where: { id },
        });
    }
};
exports.MaterialRepository = MaterialRepository;
exports.MaterialRepository = MaterialRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(material_entity_1.Material)),
    __metadata("design:paramtypes", [Object])
], MaterialRepository);
//# sourceMappingURL=materiais.repository.js.map