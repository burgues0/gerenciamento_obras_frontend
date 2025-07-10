import { TokenValidator } from '../interfaces/token-validator.interface';
import { User } from '../interfaces/user.interface';
export declare class RemoteAuthService implements TokenValidator {
    validateToken(token: string): Promise<User>;
}
