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
exports.RelatoriosService = void 0;
const common_1 = require("@nestjs/common");
const relatorios_repository_1 = require("./relatorios.repository");
let RelatoriosService = class RelatoriosService {
    relatoriosRepository;
    constructor(relatoriosRepository) {
        this.relatoriosRepository = relatoriosRepository;
    }
    async findAll() {
        return await this.relatoriosRepository.findAll();
    }
    async findOne(id) {
        const relatorio = await this.relatoriosRepository.findOne(id);
        if (!relatorio)
            throw new common_1.NotFoundException(`Relatório com ID ${id} não encontrado.`);
        return relatorio;
    }
    async findByFiscalizacao(fiscalizacaoId) {
        return await this.relatoriosRepository.findByFiscalizacao(fiscalizacaoId);
    }
    async create(fiscalizacaoId, dto) {
        const { titulo, dataCriacao } = dto;
        const hoje = new Date();
        const dataRelatorio = new Date(dataCriacao);
        const relatoriosExistentes = await this.findByFiscalizacao(fiscalizacaoId);
        const tituloDuplicado = relatoriosExistentes.some(r => r.titulo === titulo);
        if (dataRelatorio > hoje)
            throw new common_1.BadRequestException('A data de criação do relatório não pode estar no futuro.');
        if (tituloDuplicado && dataRelatorio == hoje)
            throw new common_1.BadRequestException(`Já existe um relatório com o título "${titulo}" para essa fiscalização.`);
        return await this.relatoriosRepository.create(fiscalizacaoId, dto);
    }
    async update(id, dto) {
        const relatorio = await this.relatoriosRepository.findOne(id);
        if (!relatorio)
            throw new common_1.NotFoundException(`Relatório com o ID ${id} não foi encontrado.`);
        if (dto.dataCriacao) {
            const novaData = new Date(dto.dataCriacao);
            if (novaData > new Date())
                throw new common_1.BadRequestException('A data de criação do relatório não pode ser alterada para o futuro.');
        }
        return await this.relatoriosRepository.update(id, dto);
    }
    async delete(id) {
        return await this.relatoriosRepository.delete(id);
    }
    async deleteByFiscalizacao(fiscalizacaoId) {
        return await this.relatoriosRepository.deleteByFiscalizacao(fiscalizacaoId);
    }
};
exports.RelatoriosService = RelatoriosService;
exports.RelatoriosService = RelatoriosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [relatorios_repository_1.RelatoriosRepository])
], RelatoriosService);
//# sourceMappingURL=relatorios.service.js.map