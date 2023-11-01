import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAppointmentsUseCase } from './ListAppointmentsUseCase';

class ListAppointmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAppointmentsUseCase = container.resolve(ListAppointmentsUseCase);

    const appointments = await listAppointmentsUseCase.execute();

    return response.json(appointments);
  }
}

export { ListAppointmentsController };
