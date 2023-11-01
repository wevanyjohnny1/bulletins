import { Bulletin } from '@modules/bulletins/entities/Bulletin';
import { IBulletinsRepository } from '@modules/bulletins/repositories/IBulletinsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  employee_id: string;
}

@injectable()
class ListBulletinsByEmployeeIdUseCase {
  constructor(
    @inject('BulletinsRepository')
    private bulletinsRepository: IBulletinsRepository,
  ) {

  }

  async execute({ employee_id }: IRequest): Promise<Bulletin[]> {
    const bulletins = await this.bulletinsRepository.findByEmployeeId(employee_id);

    return bulletins;
  }
}

export { ListBulletinsByEmployeeIdUseCase };
