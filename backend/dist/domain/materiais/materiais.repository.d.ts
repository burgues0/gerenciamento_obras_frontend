import { Material } from './entities/material.entity';
export declare class MaterialRepository {
    private readonly materialModel;
    constructor(materialModel: typeof Material);
    findByCodigo(codigo: string): Promise<Material | null>;
    create(dto: any): Promise<Material>;
    findAll(): Promise<Material[]>;
    findById(id: number): Promise<Material | null>;
    update(id: number, dto: any): Promise<[number]>;
    delete(id: number): Promise<number>;
}
