import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBulletinAppointmentUseCase } from '../createBulletinAppointment/CreateBulletinAppointmentUseCase';
import { CreateAppointmentUseCase } from './CreateAppointmentUseCase';

class CreateAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      startDate, endDate, activity_id, bulletin_id,
    } = request.body;

    const createAppointmentUseCase = container.resolve(CreateAppointmentUseCase);
    const createBulletinAppointmentUseCase = container.resolve(CreateBulletinAppointmentUseCase);

    const appointment = await createAppointmentUseCase.execute({ startDate, endDate, activity_id });

    await createBulletinAppointmentUseCase.execute({
      bulletin_id, appointments_id: [appointment.id],
    });

    return response.status(201).json(appointment);
  }
}

export { CreateAppointmentController };
