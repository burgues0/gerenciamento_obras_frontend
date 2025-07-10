import { ObrasService } from './obras.service';
import { Obras } from './entities/obras.entity';
import { CreateObraDto } from './dto/create-obra.dto';
import { UpdateObraDto } from './dto/update-obra.dto';
export declare class ObrasController {
    private readonly obrasService;
    constructor(obrasService: ObrasService);
    findAll(): Promise<Obras[]>;
    findOne(id: number): Promise<Obras | null>;
    create(data: CreateObraDto): Promise<Obras>;
    update(id: number, data: UpdateObraDto): Promise<Obras | null>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
