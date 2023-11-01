import { Bulletin } from '@modules/bulletins/entities/Bulletin';

import { Appointment } from '../entities/Appointment';

interface ICreateBulletinDTO {
  employee_id: string
  appointments?: Appointment[]
  id?: string
}

interface IBulletinsRepository {
  findByEmployeeId(employee_id: string): Promise<Bulletin[]>
  findById(bulletin_id: string): Promise<Bulletin>;
  list(): Promise<Bulletin[]>
  create({
    employee_id, appointments, id,
  }: ICreateBulletinDTO): Promise<Bulletin>
}

export { IBulletinsRepository, ICreateBulletinDTO };
