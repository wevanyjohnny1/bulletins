import { Bulletin } from '@modules/bulletins/entities/Bulletin';
import { Repository, getRepository } from 'typeorm';

import { IBulletinsRepository, ICreateBulletinDTO } from '../IBulletinsRepository';

class BulletinsRepository implements IBulletinsRepository {
  private repository: Repository<Bulletin>;

  constructor() {
    this.repository = getRepository(Bulletin);
  }

  async create({
    employee_id, appointments, id,
  }: ICreateBulletinDTO): Promise<Bulletin> {
    const bulletin = this.repository.create({
      employee_id, appointments, id,
    });

    await this.repository.save(bulletin);

    return bulletin;
  }

  async list(): Promise<Bulletin[]> {
    const bulletins = this.repository.find({ relations: ['appointments'] });
    return bulletins;
  }

  async findByEmployeeId(employee_id: string): Promise<Bulletin[]> {
    const bulletins = await this.repository.find({
      where: {
        employee_id,
      },
      relations: ['employee', 'appointments', 'appointments.activity'],
    });
    return bulletins;
  }

  async findById(bulletin_id: string): Promise<Bulletin> {
    const bulletin = await this.repository.findOne({
      where: {
        id: bulletin_id,
      },
      relations: ['appointments'],
    });
    return bulletin;
  }
}

export { BulletinsRepository };
