import { Activity } from '@modules/bulletins/entities/Activity';
import { IActivitiesRepository } from '@modules/bulletins/repositories/IActivitiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListActivitiesUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {

  }

  async execute(): Promise<Activity[]> {
    const activities = await this.activitiesRepository.list();

    return activities;
  }
}

export { ListActivitiesUseCase };
