import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenValidator } from './interfaces/token-validator.interface';
export declare class JwtAuthGuard implements CanActivate {
    private readonly tokenService;
    constructor(tokenService: TokenValidator);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
