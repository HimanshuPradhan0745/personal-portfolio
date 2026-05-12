import { Repository, DeepPartial, FindManyOptions, ObjectLiteral } from 'typeorm';

export class BaseRepository<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  async findOneById(id: number): Promise<T | null> {
    return await this.repository.findOne({
      where: { id } as any,
    });
  }

  async update(id: number, data: DeepPartial<T>): Promise<void> {
    await this.repository.update(id as any, data as any);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id as any);
  }
}