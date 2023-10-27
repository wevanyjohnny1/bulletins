import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IActivitiesRepository } from '@modules/bulletins/repositories/IActivitiesRepository';
import { ActivitiesRepository } from '@modules/bulletins/repositories/implementations/ActivitiesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IActivitiesRepository>(
  'ActivitiesRepository',
  ActivitiesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
