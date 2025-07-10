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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiarioMaterial = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const diario_de_obra_entity_1 = require("../diario-de-obra/entities/diario-de-obra.entity");
const material_entity_1 = require("../materiais/entities/material.entity");
let DiarioMaterial = class DiarioMaterial extends sequelize_typescript_1.Model {
    diarioDeObraId;
    materialId;
};
exports.DiarioMaterial = DiarioMaterial;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => diario_de_obra_entity_1.DiarioDeObra),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DiarioMaterial.prototype, "diarioDeObraId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => material_entity_1.Material),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DiarioMaterial.prototype, "materialId", void 0);
exports.DiarioMaterial = DiarioMaterial = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'diario_material' })
], DiarioMaterial);
//# sourceMappingURL=diario-material.entity.js.map