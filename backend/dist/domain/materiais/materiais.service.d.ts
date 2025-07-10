import { MaterialRepository } from './materiais.repository';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Material } from './entities/material.entity';
export declare class MateriaisService {
    private readonly materialRepository;
    constructor(materialRepository: MaterialRepository);
    create(dto: CreateMaterialDto): Promise<Material>;
    findAll(): Promise<Material[]>;
    findOne(id: number): Promise<Material>;
    update(id: number, input: UpdateMaterialDto): Promise<Material | null>;
    remove(id: number): Promise<void>;
    private validarId;
}
