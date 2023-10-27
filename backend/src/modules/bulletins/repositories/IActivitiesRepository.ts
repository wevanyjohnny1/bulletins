import { Activity } from '@modules/bulletins/entities/Activity';

interface ICreateActivityDTO {
  code: number
  description: string
  color: string
}

interface IActivitiesRepository {
  findByCode(code: number): Promise<Activity>
  list(): Promise<Activity[]>
  create({ code, description, color }: ICreateActivityDTO): Promise<void>
}

export { IActivitiesRepository, ICreateActivityDTO };
