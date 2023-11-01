/* eslint-disable indent */
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('employees')
class Employee {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  active: boolean;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Employee };
