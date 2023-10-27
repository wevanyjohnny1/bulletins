import { Activity } from '@modules/bulletins/entities/Activity';

import { IActivitiesRepository, ICreateActivityDTO } from '../IActivitiesRepository';

class ActivitiesRepositoryInMemory implements IActivitiesRepository {
  activities: Activity[] = [];

  async findByCode(code: number): Promise<Activity> {
    const activity = this.activities.find((activity) => activity.code === code);
    return activity;
  }

  async list(): Promise<Activity[]> {
    return this.activities;
  }

  async create({ code, description, color }: ICreateActivityDTO): Promise<void> {
    const activity = new Activity();

    Object.assign(activity, {
      code,
      description,
      color,
    });

    this.activities.push(activity);
  }
}

export { ActivitiesRepositoryInMemory };
