import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAppointmentsByActivityIdUseCase } from './ListAppointmentsByActivityIdUseCase';

class ListAppointmentsByActivityIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;
    const listAppointmentsByActivityIdUseCase = container.resolve(
      ListAppointmentsByActivityIdUseCase,
    );

    const appointments = await listAppointmentsByActivityIdUseCase.execute({ activity_id });

    return response.json(appointments);
  }
}

export { ListAppointmentsByActivityIdController };
