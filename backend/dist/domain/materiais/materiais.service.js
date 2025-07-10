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
exports.MateriaisService = void 0;
const common_1 = require("@nestjs/common");
const materiais_repository_1 = require("./materiais.repository");
let MateriaisService = class MateriaisService {
    materialRepository;
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async create(dto) {
        const existing = await this.materialRepository.findByCodigo(dto.codigo);
        if (existing) {
            throw new common_1.ConflictException('Já existe um material com este código');
        }
        try {
            return await this.materialRepository.create(dto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Falha ao criar material');
        }
    }
    async findAll() {
        return this.materialRepository.findAll();
    }
    async findOne(id) {
        this.validarId(id);
        const material = await this.materialRepository.findById(id);
        if (!material) {
            throw new common_1.NotFoundException(`Material com ID ${id} não encontrado`);
        }
        return material;
    }
    async update(id, input) {
        this.validarId(id);
        if (Object.keys(input).length === 0) {
            throw new common_1.BadRequestException('Nenhum dado fornecido para atualização');
        }
        const allowedProperties = ['nome', 'codigo', 'unidadeMedida', 'descricao', 'precoUnitario', 'fabricante', 'modelo', 'ativo'];
        const invalidProperties = Object.keys(input).filter(prop => !allowedProperties.includes(prop));
        if (invalidProperties.length > 0) {
            throw new common_1.BadRequestException(`Propriedades inválidas para atualização: ${invalidProperties.join(', ')}. ` +
                `Apenas estas propriedades podem ser atualizadas: ${allowedProperties.join(', ')}`);
        }
        const materialExistente = await this.findOne(id);
        if (!materialExistente) {
            throw new common_1.NotFoundException('Material não encontrado');
        }
        const hasChanges = Object.keys(input).some(key => {
            const inputValue = input[key];
            const currentValue = materialExistente[key];
            return inputValue !== undefined && inputValue !== currentValue;
        });
        if (!hasChanges) {
            throw new common_1.BadRequestException('Nenhuma alteração fornecida em relação aos dados atuais');
        }
        if (input.nome !== undefined) {
            if (input.nome === materialExistente.nome) {
                throw new common_1.BadRequestException('O nome fornecido é igual ao atual');
            }
            if (!input.nome.trim()) {
                throw new common_1.BadRequestException('Nome não pode ser vazio');
            }
        }
        if (input.codigo !== undefined) {
            if (input.codigo === materialExistente.codigo) {
                throw new common_1.BadRequestException('O código fornecido é igual ao atual');
            }
            const existing = await this.materialRepository.findByCodigo(input.codigo);
            if (existing) {
                throw new common_1.ConflictException('Código já está em uso');
            }
        }
        if (input.precoUnitario !== undefined) {
            if (input.precoUnitario <= 0) {
                throw new common_1.BadRequestException('Preço unitário deve ser maior que zero');
            }
        }
        if (input.unidadeMedida !== undefined && !input.unidadeMedida.trim()) {
            throw new common_1.BadRequestException('Unidade de medida não pode ser vazia');
        }
        try {
            const [affectedRows] = await this.materialRepository.update(id, input);
            if (affectedRows === 0) {
                throw new common_1.NotFoundException('Material não encontrado para atualização');
            }
            return this.findOne(id);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Falha ao atualizar material');
        }
    }
    async remove(id) {
        try {
            const deleted = await this.materialRepository.delete(id);
            if (deleted === 0) {
                throw new common_1.NotFoundException('Material não encontrado para exclusão');
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Falha ao remover material');
        }
    }
    validarId(id) {
        if (!id || id <= 0) {
            throw new common_1.BadRequestException('ID inválido.');
        }
    }
};
exports.MateriaisService = MateriaisService;
exports.MateriaisService = MateriaisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [materiais_repository_1.MaterialRepository])
], MateriaisService);
//# sourceMappingURL=materiais.service.js.map