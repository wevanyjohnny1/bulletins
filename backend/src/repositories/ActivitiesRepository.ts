import { Activity } from '../models/Activity';

interface ICreateActivityDTO {
  code: number
  description: string
  color: string
}

class ActivitiesRepository {
  private activities: Activity[];

  constructor() {
    this.activities = [];
  }

  create({ code, color, description }: ICreateActivityDTO): void {
    const activity = new Activity();

    Object.assign(activity, {
      code,
      description,
      color,
      created_at: new Date(),
    });

    this.activities.push(activity);
  }

  list(): Activity[] {
    return this.activities;
  }

  findByCode(code: number): Activity {
    const activity = this.activities.find((activity) => activity.code === code);
    return activity;
  }
}

export { ActivitiesRepository };
