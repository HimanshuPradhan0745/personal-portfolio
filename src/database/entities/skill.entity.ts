import {
    Column,
    Entity,
} from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity('skills')
export class Skill extends BaseEntity {
    @Column()
    name: string;

    @Column({
        nullable: true,
    })
    level: string;
}