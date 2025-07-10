"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentValidatorService = void 0;
const common_1 = require("@nestjs/common");
let DocumentValidatorService = class DocumentValidatorService {
    validarCpf(cpf) {
        const cleaned = cpf.replace(/[^\d]/g, '');
        if (cleaned.length !== 11)
            return false;
        if (/^(\d)\1+$/.test(cleaned))
            return false;
        const cpfArray = cleaned.split('').map(d => parseInt(d, 10));
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += cpfArray[i] * (10 - i);
        }
        let primeiroDigito = 11 - (soma % 11);
        if (primeiroDigito >= 10)
            primeiroDigito = 0;
        if (cpfArray[9] !== primeiroDigito)
            return false;
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += cpfArray[i] * (11 - i);
        }
        let segundoDigito = 11 - (soma % 11);
        if (segundoDigito >= 10)
            segundoDigito = 0;
        if (cpfArray[10] !== segundoDigito)
            return false;
        return true;
    }
    validarCnpj(cnpj) {
        const cleaned = cnpj.replace(/[^\d]/g, '');
        if (cleaned.length !== 14)
            return false;
        if (/^(\d)\1+$/.test(cleaned))
            return false;
        const cnpjArray = cleaned.split('').map(d => parseInt(d, 10));
        const validarDigito = (posicoes, digitoIndex) => {
            let soma = 0;
            let peso = posicoes.length - 7;
            for (let i = 0; i < posicoes.length; i++) {
                soma += cnpjArray[i] * peso;
                peso--;
                if (peso < 2)
                    peso = 9;
            }
            let digitoCalculado = 11 - (soma % 11);
            if (digitoCalculado >= 10)
                digitoCalculado = 0;
            return cnpjArray[digitoIndex] === digitoCalculado;
        };
        if (!validarDigito(cnpjArray.slice(0, 12), 12))
            return false;
        if (!validarDigito(cnpjArray.slice(0, 13), 13))
            return false;
        return true;
    }
    validarCpfFormatado(cpf) {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    }
    validarCnpjFormatado(cnpj) {
        return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
    }
};
exports.DocumentValidatorService = DocumentValidatorService;
exports.DocumentValidatorService = DocumentValidatorService = __decorate([
    (0, common_1.Injectable)()
], DocumentValidatorService);
//# sourceMappingURL=document-validator.service.js.map