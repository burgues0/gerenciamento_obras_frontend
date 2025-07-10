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
exports.ObrasService = void 0;
const common_1 = require("@nestjs/common");
const obras_repository_1 = require("./obras.repository");
const fornecedores_repository_1 = require("../fornecedores/fornecedores.repository");
const equipamentos_repository_1 = require("../equipamentos/equipamentos.repository");
let ObrasService = class ObrasService {
    obrasRepo;
    fornecedoresRepository;
    equipamentosRepository;
    constructor(obrasRepo, fornecedoresRepository, equipamentosRepository) {
        this.obrasRepo = obrasRepo;
        this.fornecedoresRepository = fornecedoresRepository;
        this.equipamentosRepository = equipamentosRepository;
    }
    async findAll() {
        return this.obrasRepo.findAll();
    }
    async findOne(id) {
        const existeObra = await this.obrasRepo.findById(id);
        if (!existeObra) {
            throw new common_1.NotFoundException('A obra buscada não existe!');
        }
        return this.obrasRepo.findById(id);
    }
    async create(data) {
        if (data.fornecedoresId?.length) {
            const fornecedoresIds = data.fornecedoresId;
            const todosFornecedores = (await this.fornecedoresRepository.findAll())
                .filter(fornecedor => fornecedoresIds.includes(fornecedor.id));
            if (todosFornecedores.length !== fornecedoresIds.length) {
                const idsIncorretos = fornecedoresIds.filter(id => !todosFornecedores.some(f => f.id === id));
                throw new common_1.HttpException(`Os fornecedores a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            const fornecedoresInativos = todosFornecedores.filter(f => f.ativo === false || f.ativo === null || f.ativo === undefined);
            if (fornecedoresInativos.length > 0) {
                throw new common_1.HttpException(`Os fornecedores a seguir estão inativos: ${fornecedoresInativos.map(f => f.id).join(', ')}`, common_1.HttpStatus.BAD_REQUEST);
            }
            data.fornecedoresId = todosFornecedores.map(f => f.id);
        }
        if (data.equipamentosId?.length) {
            const equipamentosIds = data.equipamentosId;
            const todosEquipamentos = await this.equipamentosRepository.findAll();
            const equipamentosExistentes = todosEquipamentos.filter(e => equipamentosIds.includes(e.id));
            if (equipamentosExistentes.length !== equipamentosIds.length) {
                const idsIncorretos = equipamentosIds.filter(id => !equipamentosExistentes.some(e => e.id === id));
                throw new common_1.HttpException(`Os equipamentos a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            data.equipamentosId = equipamentosExistentes.map(e => e.id);
        }
        return this.obrasRepo.create(data);
    }
    async update(id, data) {
        const existeObra = await this.obrasRepo.findById(id);
        if (!existeObra) {
            throw new common_1.NotFoundException('A obra buscada não existe!');
        }
        if (data.fornecedoresId?.length) {
            const fornecedoresIds = data.fornecedoresId;
            const todosFornecedores = (await this.fornecedoresRepository.findAll())
                .filter(fornecedor => fornecedoresIds.includes(fornecedor.id));
            if (todosFornecedores.length !== fornecedoresIds.length) {
                const idsIncorretos = fornecedoresIds.filter(id => !todosFornecedores.some(f => f.id === id));
                throw new common_1.HttpException(`Os fornecedores a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            const fornecedoresInativos = todosFornecedores.filter(f => f.ativo === false || f.ativo === null || f.ativo === undefined);
            if (fornecedoresInativos.length > 0) {
                throw new common_1.HttpException(`Os fornecedores a seguir estão inativos: ${fornecedoresInativos.map(f => f.id).join(', ')}`, common_1.HttpStatus.BAD_REQUEST);
            }
            data.fornecedoresId = todosFornecedores.map(f => f.id);
        }
        if (data.equipamentosId?.length) {
            const equipamentosIds = data.equipamentosId;
            const todosEquipamentos = await this.equipamentosRepository.findAll();
            const equipamentosExistentes = todosEquipamentos.filter(e => equipamentosIds.includes(e.id));
            if (equipamentosExistentes.length !== equipamentosIds.length) {
                const idsIncorretos = equipamentosIds.filter(id => !equipamentosExistentes.some(e => e.id === id));
                throw new common_1.HttpException(`Os equipamentos a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            data.equipamentosId = equipamentosExistentes.map(e => e.id);
        }
        return this.obrasRepo.update(id, data);
    }
    async remove(id) {
        const existeObra = await this.obrasRepo.findById(id);
        if (!existeObra) {
            throw new common_1.NotFoundException('A obra buscada não existe!');
        }
        return this.obrasRepo.delete(id);
    }
};
exports.ObrasService = ObrasService;
exports.ObrasService = ObrasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [obras_repository_1.ObrasRepository,
        fornecedores_repository_1.FornecedoresRepository,
        equipamentos_repository_1.EquipamentosRepository])
], ObrasService);
//# sourceMappingURL=obras.service.js.map