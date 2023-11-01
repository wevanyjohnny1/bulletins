import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListBulletinsByEmployeeIdUseCase } from './ListBulletinsByEmployeeIdUseCase';

class ListBulletinsByEmployeeIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { employee_id } = request.params;
    const listBulletinsByEmployeeIdUseCase = container.resolve(
      ListBulletinsByEmployeeIdUseCase,
    );

    const bulletins = await listBulletinsByEmployeeIdUseCase.execute({ employee_id });

    return response.json(bulletins);
  }
}

export { ListBulletinsByEmployeeIdController };
