/* eslint-disable indent */
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('activities')
class Activity {
  @PrimaryColumn()
  id?: string;

  @Column()
  code: number;

  @Column()
  description: string;

  @Column()
  color: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Activity };
