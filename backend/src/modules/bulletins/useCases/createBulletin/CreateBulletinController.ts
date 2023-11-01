import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBulletinUseCase } from './CreateBulletinUseCase';

class CreateBulletinController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { employee_id } = request.body;

    const createBulletinUseCase = container.resolve(CreateBulletinUseCase);

    const bulletin = await createBulletinUseCase.execute({ employee_id });

    return response.status(201).json(bulletin);
  }
}

export { CreateBulletinController };
