import { Appointment } from '@modules/bulletins/entities/Appointment';
import { IAppointmentsRepository } from '@modules/bulletins/repositories/IAppointmentsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  activity_id: string;
}

@injectable()
class ListAppointmentsByActivityIdUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {

  }

  async execute({ activity_id }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findByActivityId(activity_id);

    return appointments;
  }
}

export { ListAppointmentsByActivityIdUseCase };
