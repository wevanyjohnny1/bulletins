import { AppError } from '@errors/AppError';
import { ActivitiesRepositoryInMemory } from '@modules/bulletins/repositories/in-memory/ActivitiesRepositoryInMemory';

import { CreateActivityUseCase } from './CreateActivityUseCase';

let createActivityUseCase: CreateActivityUseCase;
let activitiesRepositoryInMemory: ActivitiesRepositoryInMemory;

describe('Create Activity', () => {
  beforeEach(() => {
    activitiesRepositoryInMemory = new ActivitiesRepositoryInMemory();
    createActivityUseCase = new CreateActivityUseCase(activitiesRepositoryInMemory);
  });

  it('should be able to create a new activity', async () => {
    const activity = {
      code: 42,
      description: 'description',
      color: '#000',
    };

    await createActivityUseCase.execute({
      code: activity.code,
      color: activity.color,
      description: activity.description,
    });

    const activityCreated = await activitiesRepositoryInMemory.findByCode(activity.code);

    expect(activityCreated).toHaveProperty('id');
  });

  it('should not be able to create a new activity with same code', async () => {
    expect(async () => {
      const activity = {
        code: 42,
        description: 'description',
        color: '#000',
      };

      await createActivityUseCase.execute({
        code: activity.code,
        color: activity.color,
        description: activity.description,
      });

      await createActivityUseCase.execute({
        code: activity.code,
        color: activity.color,
        description: activity.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
