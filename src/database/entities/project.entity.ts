import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Tech } from './tech.entity';

@Entity('projects')
export class Project extends BaseEntity {
  @Column()
  title: string;

  @Column({
    unique: true,
  })
  slug: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    nullable: true,
  })
  githubUrl: string;

  @Column({
    nullable: true,
  })
  liveUrl: string;

  @Column({
    nullable: true,
  })
  imageUrl: string;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn({
    name: 'userId',
  })
  user: User;

  @Column()
  userId: number;

  @ManyToMany(() => Tech)
  @JoinTable({
    name: 'project_tech',
  })
  techStack: Tech[];
}