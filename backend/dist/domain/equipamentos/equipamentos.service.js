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
exports.EquipamentosService = void 0;
const common_1 = require("@nestjs/common");
const equipamentos_repository_1 = require("./equipamentos.repository");
const obras_entity_1 = require("../obras/entities/obras.entity");
const fornecedores_entity_1 = require("../fornecedores/entities/fornecedores.entity");
const sequelize_1 = require("@nestjs/sequelize");
let EquipamentosService = class EquipamentosService {
    equipamentosRepository;
    obrasRepository;
    fornecedoresRepository;
    constructor(equipamentosRepository, obrasRepository, fornecedoresRepository) {
        this.equipamentosRepository = equipamentosRepository;
        this.obrasRepository = obrasRepository;
        this.fornecedoresRepository = fornecedoresRepository;
    }
    async findAll() {
        return this.equipamentosRepository.findAll();
    }
    async findOne(id) {
        const existeEquipamento = await this.equipamentosRepository.findById(id);
        if (!existeEquipamento) {
            throw new common_1.NotFoundException('O equipamento buscado não existe!');
        }
        return this.equipamentosRepository.findById(id);
    }
    async create(data) {
        if (data.numeroDeSerie) {
            const existe = await this.equipamentosRepository.findOneByOptions({
                where: { numeroDeSerie: data.numeroDeSerie },
            });
            if (existe) {
                throw new common_1.HttpException('Já existe um equipamento com o mesmo número de série.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.fornecedorId) {
            const fornecedor = await this.fornecedoresRepository.findOne({
                where: { id: data.fornecedorId },
            });
            if (!fornecedor) {
                throw new common_1.HttpException('O fornecedor informado não existe.', common_1.HttpStatus.NOT_FOUND);
            }
        }
        if (data.obrasId?.length) {
            const obraIds = data.obrasId;
            const obrasExistentes = await this.obrasRepository.findAll({
                where: { id: obraIds },
            });
            if (obrasExistentes.length !== obraIds.length) {
                const idsIncorretos = obraIds.filter((id) => !obrasExistentes.some((obra) => obra.id === id));
                throw new common_1.HttpException(`As obras a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            data.obrasId = obrasExistentes.map((obra) => obra.id);
        }
        return this.equipamentosRepository.create(data);
    }
    async update(id, data) {
        const existeEquipamento = await this.equipamentosRepository.findById(id);
        if (!existeEquipamento) {
            throw new common_1.NotFoundException('O equipamento buscado não existe!');
        }
        if (data.numeroDeSerie) {
            const existe = await this.equipamentosRepository.findOneByOptions({
                where: { numeroDeSerie: data.numeroDeSerie },
            });
            if (existe) {
                throw new common_1.HttpException('Já existe um equipamento com o mesmo número de série.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.fornecedorId) {
            const fornecedor = await this.fornecedoresRepository.findOne({
                where: { id: data.fornecedorId },
            });
            if (!fornecedor) {
                throw new common_1.HttpException('O fornecedor informado não existe.', common_1.HttpStatus.NOT_FOUND);
            }
        }
        if (data.obrasId?.length) {
            const obraIds = data.obrasId;
            const obrasExistentes = await this.obrasRepository.findAll({
                where: { id: obraIds },
            });
            if (obrasExistentes.length !== obraIds.length) {
                const idsIncorretos = obraIds.filter((id) => !obrasExistentes.some((obra) => obra.id === id));
                throw new common_1.HttpException(`As obras a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            data.obrasId = obrasExistentes.map((obra) => obra.id);
        }
        await this.equipamentosRepository.update(id, data);
    }
    async updateObras(id, obrasIds) {
        const equipamento = await this.equipamentosRepository.findById(id);
        if (!equipamento) {
            throw new common_1.NotFoundException('O equipamento buscado não existe!');
        }
        const obras = await this.obrasRepository.findAll({
            where: { id: obrasIds },
        });
        if (obras.length !== obrasIds.length) {
            const idsIncorretos = obrasIds.filter((id) => !obras.some((obra) => obra.id === id));
            throw new common_1.HttpException(`As obras a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.equipamentosRepository.updateObras(equipamento, obras);
    }
    async delete(id) {
        const existeEquipamento = await this.equipamentosRepository.findById(id);
        if (!existeEquipamento) {
            throw new common_1.NotFoundException('O equipamento buscado não existe!');
        }
        this.equipamentosRepository.remove(id);
    }
    async getEquipamentosByObraId(obraId) {
        const obra = await this.obrasRepository.findByPk(obraId);
        if (!obra) {
            throw new common_1.NotFoundException('A obra buscada não existe!');
        }
        const equipamentos = await this.equipamentosRepository.findByObraId(obraId);
        if (!equipamentos || equipamentos.length === 0) {
            throw new common_1.NotFoundException(`Nenhum equipamento encontrado para a obra de ID ${obraId}.`);
        }
        return equipamentos;
    }
};
exports.EquipamentosService = EquipamentosService;
exports.EquipamentosService = EquipamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(obras_entity_1.Obras)),
    __param(2, (0, sequelize_1.InjectModel)(fornecedores_entity_1.Fornecedores)),
    __metadata("design:paramtypes", [equipamentos_repository_1.EquipamentosRepository, Object, Object])
], EquipamentosService);
//# sourceMappingURL=equipamentos.service.js.map