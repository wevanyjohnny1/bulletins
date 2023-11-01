import { AppError } from '@errors/AppError';
import { Bulletin } from '@modules/bulletins/entities/Bulletin';
import { IAppointmentsRepository } from '@modules/bulletins/repositories/IAppointmentsRepository';
import { IBulletinsRepository } from '@modules/bulletins/repositories/IBulletinsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  bulletin_id: string;
  appointments_id: string[]
}

@injectable()
class CreateBulletinAppointmentUseCase {
  constructor(
    @inject('BulletinsRepository')
    private bulletinsRepository: IBulletinsRepository,

    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {

  }

  async execute({ bulletin_id, appointments_id }: IRequest): Promise<Bulletin> {
    const bulletinExists = await this.bulletinsRepository.findById(bulletin_id);

    if (!bulletinExists) {
      throw new AppError('Bulletin does not exists!');
    }

    const newAppointments = await this.appointmentsRepository.findByIds(
      appointments_id,
    );

    bulletinExists.appointments.push(...newAppointments);

    await this.bulletinsRepository.create(bulletinExists);

    return bulletinExists;
  }
}

export { CreateBulletinAppointmentUseCase };
