import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListBulletinsUseCase } from './ListBulletinsUseCase';

class ListBulletinsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listBulletinsUseCase = container.resolve(ListBulletinsUseCase);

    const bulletins = await listBulletinsUseCase.execute();

    return response.json(bulletins);
  }
}

export { ListBulletinsController };
