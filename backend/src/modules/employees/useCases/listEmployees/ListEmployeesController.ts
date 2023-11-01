import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListEmployeesUseCase } from './ListEmployeesUseCase';

class ListEmployeesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listEmployeesUseCase = container.resolve(ListEmployeesUseCase);

    const employees = await listEmployeesUseCase.execute();

    return response.json(employees);
  }
}

export { ListEmployeesController };
