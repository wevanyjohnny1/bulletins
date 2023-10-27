import { AppError } from '@errors/AppError';
import { IActivitiesRepository } from '@modules/bulletins/repositories/IActivitiesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  code: number
  description: string
  color: string
}

@injectable()
class CreateActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {

  }

  async execute({ code, color, description }: IRequest): Promise<void> {
    const activityAlreadyExists = await this.activitiesRepository.findByCode(code);

    if (activityAlreadyExists) {
      throw new AppError('Activity already exists!', 401);
    }

    this.activitiesRepository.create({ code, description, color });
  }
}

export { CreateActivityUseCase };
