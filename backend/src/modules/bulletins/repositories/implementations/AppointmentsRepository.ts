import { Appointment } from '@modules/bulletins/entities/Appointment';
import { Repository, getRepository } from 'typeorm';

import { IAppointmentsRepository, ICreateAppointmentDTO } from '../IAppointmentsRepository';

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = getRepository(Appointment);
  }

  async create({ startDate, endDate, activity_id }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.repository.create({
      startDate, endDate, activity_id,
    });

    await this.repository.save(appointment);

    return appointment;
  }

  async list(): Promise<Appointment[]> {
    const appointments = this.repository.find({
      relations: ['activity'],
    });
    return appointments;
  }

  async findByActivityId(activity_id: string): Promise<Appointment[]> {
    const activities = await this.repository.find({ activity_id });
    return activities;
  }

  async findByIds(ids: string[]): Promise<Appointment[]> {
    const activities = await this.repository.findByIds(ids);
    return activities;
  }
}

export { AppointmentsRepository };
