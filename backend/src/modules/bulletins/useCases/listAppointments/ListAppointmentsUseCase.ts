import { Appointment } from '@modules/bulletins/entities/Appointment';
import { IAppointmentsRepository } from '@modules/bulletins/repositories/IAppointmentsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAppointmentsUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {

  }

  async execute(): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.list();

    return appointments;
  }
}

export { ListAppointmentsUseCase };
