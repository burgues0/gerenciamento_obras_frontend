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
exports.FornecedoresService = void 0;
const common_1 = require("@nestjs/common");
const fornecedores_repository_1 = require("./fornecedores.repository");
const obras_repository_1 = require("../obras/obras.repository");
let FornecedoresService = class FornecedoresService {
    fornecedoresRepo;
    obrasRepository;
    constructor(fornecedoresRepo, obrasRepository) {
        this.fornecedoresRepo = fornecedoresRepo;
        this.obrasRepository = obrasRepository;
    }
    async findAll() {
        return this.fornecedoresRepo.findAll();
    }
    async findOne(id) {
        const existeFornecedor = await this.fornecedoresRepo.findById(id);
        if (!existeFornecedor) {
            throw new common_1.NotFoundException('O Fornecedor buscado não existe!');
        }
        return this.fornecedoresRepo.findById(id);
    }
    async create(data) {
        if (data.email) {
            const existeEmail = await this.fornecedoresRepo.findOneByOptions({
                where: { email: data.email },
            });
            if (existeEmail) {
                throw new common_1.HttpException('Já existe um fornecedor com o mesmo e-mail.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.telefone) {
            const existeTelefone = await this.fornecedoresRepo.findOneByOptions({
                where: { telefone: data.telefone },
            });
            if (existeTelefone) {
                throw new common_1.HttpException('Já existe um fornecedor com o mesmo telefone.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.cnpj) {
            const existeCnpj = await this.fornecedoresRepo.findOneByOptions({
                where: { cnpj: data.cnpj },
            });
            if (existeCnpj) {
                throw new common_1.HttpException('Já existe um fornecedor com o mesmo CNPJ.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (!data.ativo) {
            throw new common_1.HttpException('Não é possível criar um fornecedor inativo!', common_1.HttpStatus.CONFLICT);
        }
        if (data.obrasId?.length) {
            const todasObras = await this.obrasRepository.findAll();
            const obrasExistentes = todasObras.filter((obra) => data.obrasId.includes(obra.id));
            if (obrasExistentes.length !== data.obrasId.length) {
                const idsIncorretos = data.obrasId.filter((id) => !obrasExistentes.some((obra) => obra.id === id));
                throw new common_1.HttpException(`As obras a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            data.obrasId = obrasExistentes.map((obra) => obra.id);
        }
        return this.fornecedoresRepo.create(data);
    }
    async update(id, data) {
        const existeFornecedor = await this.fornecedoresRepo.findById(id);
        if (!existeFornecedor) {
            throw new common_1.NotFoundException('O Fornecedor buscado não existe!');
        }
        if (data.email) {
            const existeEmail = await this.fornecedoresRepo.findOneByOptions({
                where: { email: data.email },
            });
            if (existeEmail) {
                throw new common_1.HttpException('Já existe um fornecedor com o mesmo e-mail.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.telefone) {
            const existeTelefone = await this.fornecedoresRepo.findOneByOptions({
                where: { telefone: data.telefone },
            });
            if (existeTelefone) {
                throw new common_1.HttpException('Já existe um fornecedor com o mesmo telefone.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.cnpj) {
            const existeCnpj = await this.fornecedoresRepo.findOneByOptions({
                where: { cnpj: data.cnpj },
            });
            if (existeCnpj) {
                throw new common_1.HttpException('Já existe um fornecedor com o mesmo CNPJ.', common_1.HttpStatus.CONFLICT);
            }
        }
        if (data.obrasId?.length) {
            const todasObras = await this.obrasRepository.findAll();
            const obrasExistentes = todasObras.filter((obra) => data.obrasId.includes(obra.id));
            if (obrasExistentes.length !== data.obrasId.length) {
                const idsIncorretos = data.obrasId.filter((id) => !obrasExistentes.some((obra) => obra.id === id));
                throw new common_1.HttpException(`As obras a seguir não existem: ${idsIncorretos.join(', ')}`, common_1.HttpStatus.NOT_FOUND);
            }
            data.obrasId = obrasExistentes.map((obra) => obra.id);
        }
        return this.fornecedoresRepo.update(id, data);
    }
    async updateActive(id, ativo) {
        const existeFornecedor = await this.fornecedoresRepo.findById(id);
        if (!existeFornecedor) {
            throw new common_1.NotFoundException(`O fornecedor buscado não existe!`);
        }
        if (existeFornecedor.ativo === ativo) {
            throw new common_1.BadRequestException(`O campo 'ativo' já está definido como ${ativo}. Nenhuma atualização necessária.`);
        }
        return this.fornecedoresRepo.updateActive(id, ativo);
    }
    async remove(id) {
        const existeFornecedor = await this.fornecedoresRepo.findById(id);
        if (!existeFornecedor) {
            throw new common_1.NotFoundException('O Fornecedor buscado não existe!');
        }
        return this.fornecedoresRepo.delete(id);
    }
    async findSuppliersByObra(obraId) {
        const existeObra = await this.obrasRepository.findById(obraId);
        if (!existeObra) {
            throw new common_1.NotFoundException(`A obra buscada não existe!`);
        }
        const fornecedores = await this.fornecedoresRepo.findSuppliersByObra(obraId);
        if (!fornecedores || fornecedores.length === 0) {
            throw new common_1.NotFoundException(`Nenhum fornecedor encontrado para a obra de ID ${obraId}.`);
        }
        return fornecedores;
    }
};
exports.FornecedoresService = FornecedoresService;
exports.FornecedoresService = FornecedoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fornecedores_repository_1.FornecedoresRepository,
        obras_repository_1.ObrasRepository])
], FornecedoresService);
//# sourceMappingURL=fornecedores.service.js.map