import { Bulletin } from '@modules/bulletins/entities/Bulletin';
import { IBulletinsRepository } from '@modules/bulletins/repositories/IBulletinsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListBulletinsUseCase {
  constructor(
    @inject('BulletinsRepository')
    private bulletinsRepository: IBulletinsRepository,
  ) {

  }

  async execute(): Promise<Bulletin[]> {
    const bulletins = await this.bulletinsRepository.list();

    return bulletins;
  }
}

export { ListBulletinsUseCase };
