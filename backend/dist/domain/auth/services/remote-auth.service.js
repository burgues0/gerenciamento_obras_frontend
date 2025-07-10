"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteAuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let RemoteAuthService = class RemoteAuthService {
    async validateToken(token) {
        try {
            const { data } = await axios_1.default.post(process.env.TOKEN_VALIDATOR_API_URL ?? '', {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return data.user;
        }
        catch {
            throw new common_1.UnauthorizedException('Token inválido ou expirado');
        }
    }
};
exports.RemoteAuthService = RemoteAuthService;
exports.RemoteAuthService = RemoteAuthService = __decorate([
    (0, common_1.Injectable)()
], RemoteAuthService);
//# sourceMappingURL=remote-auth.service.js.map