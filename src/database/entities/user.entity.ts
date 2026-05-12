import {
    Column,
    Entity,
    OneToMany,
} from 'typeorm';

import { BaseEntity } from './base.entity';
import { Role } from '../../common/enums/role.enum';
import { Status } from '../../common/enums/status.enum';
import { Project } from './project.entity';



@Entity('users')
export class User extends BaseEntity {
    @Column()
    fullName: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER,
    })
    role: Role;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status: Status;

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];
}


