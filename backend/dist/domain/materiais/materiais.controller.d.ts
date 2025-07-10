import { MateriaisService } from './materiais.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
export declare class MateriaisController {
    private readonly materiaisService;
    constructor(materiaisService: MateriaisService);
    create(dto: CreateMaterialDto): Promise<import("./entities/material.entity").Material>;
    findAll(): Promise<import("./entities/material.entity").Material[]>;
    findOne(id: number): Promise<import("./entities/material.entity").Material>;
    update(id: number, dto: UpdateMaterialDto): Promise<void>;
    remove(id: number): Promise<void>;
}
