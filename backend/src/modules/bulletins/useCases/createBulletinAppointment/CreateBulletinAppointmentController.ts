import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBulletinAppointmentUseCase } from './CreateBulletinAppointmentUseCase';

class CreateBulletinAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { bulletin_id } = request.params;
    const { appointments_id } = request.body;

    const createBulletinAppointmentUseCase = container.resolve(CreateBulletinAppointmentUseCase);

    const bulletin = await createBulletinAppointmentUseCase.execute({
      bulletin_id, appointments_id,
    });

    return response.status(201).json(bulletin);
  }
}

export { CreateBulletinAppointmentController };
