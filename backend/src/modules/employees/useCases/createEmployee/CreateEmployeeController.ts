import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

class CreateEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, code, active, image,
    } = request.body;

    const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);

    const employee = await createEmployeeUseCase.execute({
      name, code, active, image,
    });

    return response.status(201).json(employee);
  }
}

export { CreateEmployeeController };
