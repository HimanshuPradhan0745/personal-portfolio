import {
    Column,
    Entity,
} from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity('education')
export class Education extends BaseEntity {
    @Column()
    institution: string;

    @Column()
    degree: string;

    @Column()
    fieldOfStudy: string;

    @Column()
    startYear: string;

    @Column({
        nullable: true,
    })
    endYear: string;
}