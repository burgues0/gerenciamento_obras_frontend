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
exports.EtapasDaObraService = void 0;
const common_1 = require("@nestjs/common");
const etapas_da_obra_repository_1 = require("./etapas-da-obra.repository");
let EtapasDaObraService = class EtapasDaObraService {
    etapaObraRepository;
    constructor(etapaObraRepository) {
        this.etapaObraRepository = etapaObraRepository;
    }
    async create(dto) {
        const obraExists = await this.etapaObraRepository.checkObraExists(dto.obraId);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${dto.obraId} não encontrada`);
        }
        return this.etapaObraRepository.create(dto);
    }
    async findAllByObra(obraId) {
        const exists = await this.etapaObraRepository.checkObraExists(obraId);
        if (!exists) {
            throw new common_1.NotFoundException(`Obra com ID ${obraId} não encontrada`);
        }
        return this.etapaObraRepository.findAllByObra(obraId);
    }
    async findById(id, obraId) {
        const exists = await this.etapaObraRepository.checkObraExists(obraId);
        if (!exists) {
            throw new common_1.NotFoundException(`Obra com ID ${obraId} não encontrada`);
        }
        const etapa = await this.etapaObraRepository.findById(id);
        if (!etapa) {
            throw new common_1.NotFoundException(`Etapa com ID ${id} não encontrada`);
        }
        return etapa;
    }
    async update(id, dto, idObra) {
        const obraExists = await this.etapaObraRepository.checkObraExists(idObra);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${idObra} não encontrada`);
        }
        const [count, [updated]] = await this.etapaObraRepository.update(id, dto);
        if (count === 0) {
            throw new common_1.NotFoundException(`Etapa com ID ${id} não encontrada`);
        }
        return updated;
    }
    async remove(id, idObra) {
        const obraExists = await this.etapaObraRepository.checkObraExists(idObra);
        if (!obraExists) {
            throw new common_1.NotFoundException(`Obra com ID ${idObra} não encontrada`);
        }
        const deleted = await this.etapaObraRepository.remove(id);
        if (deleted === 0) {
            throw new common_1.NotFoundException(`Etapa com ID ${id} não encontrada`);
        }
    }
};
exports.EtapasDaObraService = EtapasDaObraService;
exports.EtapasDaObraService = EtapasDaObraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [etapas_da_obra_repository_1.EtapasDaObraRepository])
], EtapasDaObraService);
//# sourceMappingURL=etapas-da-obra.service.js.map