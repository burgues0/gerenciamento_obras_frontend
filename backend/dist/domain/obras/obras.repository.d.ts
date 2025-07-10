import { Obras } from './entities/obras.entity';
import { CreateObraDto } from './dto/create-obra.dto';
import { UpdateObraDto } from './dto/update-obra.dto';
import { Endereco } from '../enderecos/entities/endereco.entity';
export declare class ObrasRepository {
    private readonly obrasModel;
    private readonly enderecoModel;
    constructor(obrasModel: typeof Obras, enderecoModel: typeof Endereco);
    findAll(): Promise<Obras[]>;
    findById(id: number): Promise<Obras | null>;
    create(data: CreateObraDto): Promise<Obras>;
    update(id: number, data: UpdateObraDto): Promise<Obras | null>;
    delete(id: number): Promise<boolean>;
}
