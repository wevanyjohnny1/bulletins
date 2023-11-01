import { Appointment } from '@modules/bulletins/entities/Appointment';

interface ICreateAppointmentDTO {
  startDate: Date;
  endDate: Date;
  activity_id: string
}

interface IAppointmentsRepository {
  findByActivityId(activity_id: string): Promise<Appointment[]>
  findByIds(ids: string[]): Promise<Appointment[]>;
  list(): Promise<Appointment[]>
  create({
    startDate, endDate, activity_id,
  }: ICreateAppointmentDTO): Promise<Appointment>
}

export { IAppointmentsRepository, ICreateAppointmentDTO };
