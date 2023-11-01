import { Appointment } from '@modules/bulletins/entities/Appointment';
import { IAppointmentsRepository } from '@modules/bulletins/repositories/IAppointmentsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  startDate: Date;
  endDate: Date;
  activity_id: string;
}

@injectable()
class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {

  }

  async execute({
    startDate, endDate, activity_id,
  }: IRequest): Promise<Appointment> {
    const appointment = this.appointmentsRepository.create({
      startDate, endDate, activity_id,
    });

    return appointment;
  }
}

export { CreateAppointmentUseCase };
