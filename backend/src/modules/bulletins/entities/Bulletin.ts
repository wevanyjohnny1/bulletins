/* eslint-disable indent */
import { Employee } from '@modules/employees/entities/Employee';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Appointment } from './Appointment';

@Entity('bulletins')
class Bulletin {
  @PrimaryColumn()
  id?: string;

  @OneToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column()
  employee_id: string;

  @ManyToMany(() => Appointment)
  @JoinTable({
    name: 'bulletins_appointments',
    joinColumns: [{ name: 'bulletin_id' }],
    inverseJoinColumns: [{ name: 'appointment_id' }],
  })
  appointments: Appointment[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Bulletin };
