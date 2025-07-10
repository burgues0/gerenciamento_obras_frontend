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
exports.EnderecosService = void 0;
const common_1 = require("@nestjs/common");
const endereco_repository_1 = require("./endereco.repository");
const obras_repository_1 = require("../obras/obras.repository");
let EnderecosService = class EnderecosService {
    enderecoRepository;
    obrasRepository;
    constructor(enderecoRepository, obrasRepository) {
        this.enderecoRepository = enderecoRepository;
        this.obrasRepository = obrasRepository;
    }
    async create(id, endereco) {
        const obra = await this.obrasRepository.findById(id);
        if (!obra) {
            throw new common_1.NotFoundException('A obra informada não existe!');
        }
        if (obra.enderecoId) {
            throw new common_1.BadRequestException('Esta obra já possui um endereço cadastrado!');
        }
        return this.enderecoRepository.create(id, endereco);
    }
    async findOne(id) {
        const obra = await this.obrasRepository.findById(id);
        if (!obra) {
            throw new common_1.NotFoundException('A obra informada não existe!');
        }
        if (obra.enderecoId === null || obra.enderecoId === undefined) {
            throw new common_1.BadRequestException('Esta obra não possui endereço!');
        }
        return this.enderecoRepository.findEnderecoByObraId(id);
    }
    async update(id, enderecoInput) {
        const obra = await this.obrasRepository.findById(id);
        if (!obra) {
            throw new common_1.NotFoundException('A obra informada não existe!');
        }
        if (obra.enderecoId === null || obra.enderecoId === undefined) {
            throw new common_1.BadRequestException('Esta obra não possui endereço cadastrado para atualizar!');
        }
        this.enderecoRepository.update(id, enderecoInput);
    }
    async findAll() {
        return this.enderecoRepository.findAll();
    }
};
exports.EnderecosService = EnderecosService;
exports.EnderecosService = EnderecosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [endereco_repository_1.EnderecoRepository,
        obras_repository_1.ObrasRepository])
], EnderecosService);
//# sourceMappingURL=enderecos.service.js.map