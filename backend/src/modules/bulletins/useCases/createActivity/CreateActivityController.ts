import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateActivityUseCase } from './CreateActivityUseCase';

class CreateActivityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code, description, color } = request.body;

    const createActivityUseCase = container.resolve(CreateActivityUseCase);

    const activity = await createActivityUseCase.execute({ code, description, color });

    return response.status(201).json(activity);
  }
}

export { CreateActivityController };
