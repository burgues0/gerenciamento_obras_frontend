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
exports.DiarioDeObraService = void 0;
const common_1 = require("@nestjs/common");
const diario_de_obra_repository_1 = require("./diario-de-obra.repository");
const materiais_repository_1 = require("../materiais/materiais.repository");
const material_entity_1 = require("../materiais/entities/material.entity");
let DiarioDeObraService = class DiarioDeObraService {
    diarioDeObraRepository;
    materiaisRepository;
    constructor(diarioDeObraRepository, materiaisRepository) {
        this.diarioDeObraRepository = diarioDeObraRepository;
        this.materiaisRepository = materiaisRepository;
    }
    async create(dto) {
        if (dto.materiaisId?.length) {
            const materiaisId = dto.materiaisId;
            const todosMateriais = (await this.materiaisRepository.findAll())
                .filter(material => materiaisId.includes(material.id));
            if (todosMateriais.length !== materiaisId.length) {
                const idsIncorretos = materiaisId.filter(id => !todosMateriais.some(f => f.id === id));
                throw new common_1.HttpException(`Os materiais a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            dto.materiaisId = todosMateriais.map(f => f.id);
        }
        const obraExists = await this.diarioDeObraRepository.checkObraExists(dto.obraId);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${dto.obraId} não encontrada`);
        }
        const diario = await this.diarioDeObraRepository.create(dto);
        if (dto.materiaisId?.length) {
            await diario.$set('materiaisUtilizados', dto.materiaisId);
            await diario.reload({ include: [{ model: material_entity_1.Material, as: 'materiaisUtilizados' }] });
        }
        return diario;
    }
    async findAllByObra(obraId) {
        const exists = await this.diarioDeObraRepository.checkObraExists(obraId);
        if (!exists) {
            throw new common_1.NotFoundException(`Obra com ID ${obraId} não encontrada`);
        }
        return this.diarioDeObraRepository.findAllByObra(obraId);
    }
    async findById(id, idObra) {
        const obraExists = await this.diarioDeObraRepository.checkObraExists(idObra);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${idObra} não encontrada`);
        }
        const diario = await this.diarioDeObraRepository.findById(id);
        if (!diario) {
            throw new common_1.NotFoundException(`Diário de obra com ID ${id} não encontrado`);
        }
        return diario;
    }
    async update(id, dto, idObra) {
        const obraExists = await this.diarioDeObraRepository.checkObraExists(idObra);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${idObra} não encontrada`);
        }
        const [count] = await this.diarioDeObraRepository.update(id, dto);
        if (count === 0) {
            throw new common_1.NotFoundException(`Diário de obra com ID ${id} não encontrado`);
        }
        if (dto.materiaisId) {
            const diario = await this.diarioDeObraRepository.findById(id);
            if (!diario) {
                throw new common_1.NotFoundException(`Diário de obra com ID ${id} não encontrado após atualização`);
            }
            const todosMateriais = await this.materiaisRepository.findAll();
            const materiais = todosMateriais.filter(m => dto.materiaisId?.includes(m.id));
            if (materiais.length !== dto.materiaisId.length) {
                const idsInvalidos = dto.materiaisId.filter(id => !materiais.some(m => m.id === id));
                throw new common_1.NotFoundException(`Materiais não encontrados: ${idsInvalidos.join(', ')}`);
            }
            await diario.$set('materiaisUtilizados', materiais);
        }
    }
    async remove(id, idObra) {
        const obraExists = await this.diarioDeObraRepository.checkObraExists(idObra);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${idObra} não encontrada`);
        }
        const deleted = await this.diarioDeObraRepository.remove(id);
        if (deleted === 0) {
            throw new common_1.NotFoundException(`Diário de obra com ID ${id} não encontrado`);
        }
    }
};
exports.DiarioDeObraService = DiarioDeObraService;
exports.DiarioDeObraService = DiarioDeObraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [diario_de_obra_repository_1.DiarioDeObraRepository,
        materiais_repository_1.MaterialRepository])
], DiarioDeObraService);
//# sourceMappingURL=diario-de-obra.service.js.map