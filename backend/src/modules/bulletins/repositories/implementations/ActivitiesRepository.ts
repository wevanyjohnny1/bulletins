import { Activity } from '@modules/bulletins/entities/Activity';
import { Repository, getRepository } from 'typeorm';

import { IActivitiesRepository, ICreateActivityDTO } from '../IActivitiesRepository';

class ActivitiesRepository implements IActivitiesRepository {
  private repository: Repository<Activity>;

  constructor() {
    this.repository = getRepository(Activity);
  }

  // public static getInstance(): ActivitiesRepository {
  //   if (!ActivitiesRepository.INSTANCE) {
  //     ActivitiesRepository.INSTANCE = new ActivitiesRepository();
  //   }
  //   return ActivitiesRepository.INSTANCE;
  // }

  async create({ code, color, description }: ICreateActivityDTO): Promise<void> {
    const activity = this.repository.create({
      code, color, description,
    });

    await this.repository.save(activity);
  }

  async list(): Promise<Activity[]> {
    const activities = this.repository.find();
    return activities;
  }

  async findByCode(code: number): Promise<Activity> {
    const activity = await this.repository.findOne({ code });
    return activity;
  }
}

export { ActivitiesRepository };
