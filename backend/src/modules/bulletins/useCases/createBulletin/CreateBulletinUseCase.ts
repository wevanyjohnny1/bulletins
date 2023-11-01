import { Bulletin } from '@modules/bulletins/entities/Bulletin';
import { IBulletinsRepository } from '@modules/bulletins/repositories/IBulletinsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  employee_id: string;
}

@injectable()
class CreateBulletinUseCase {
  constructor(
    @inject('BulletinsRepository')
    private bulletinsRepository: IBulletinsRepository,
  ) {

  }

  async execute({ employee_id }: IRequest): Promise<Bulletin> {
    const bulletin = this.bulletinsRepository.create({ employee_id });

    return bulletin;
  }
}

export { CreateBulletinUseCase };
