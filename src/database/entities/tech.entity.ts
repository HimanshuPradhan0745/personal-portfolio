import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity('tech')
export class Tech extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  icon: string;
}