import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IActivitiesRepository } from '@modules/bulletins/repositories/IActivitiesRepository';
import { IAppointmentsRepository } from '@modules/bulletins/repositories/IAppointmentsRepository';
import { IBulletinsRepository } from '@modules/bulletins/repositories/IBulletinsRepository';
import { ActivitiesRepository } from '@modules/bulletins/repositories/implementations/ActivitiesRepository';
import { AppointmentsRepository } from '@modules/bulletins/repositories/implementations/AppointmentsRepository';
import { BulletinsRepository } from '@modules/bulletins/repositories/implementations/BulletinsRepository';
import { IEmployeesRepository } from '@modules/employees/repositories/IEmployeesRepository';
import { EmployeesRepository } from '@modules/employees/repositories/implementations/EmployeesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IActivitiesRepository>(
  'ActivitiesRepository',
  ActivitiesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IEmployeesRepository>(
  'EmployeesRepository',
  EmployeesRepository,
);

container.registerSingleton<IBulletinsRepository>(
  'BulletinsRepository',
  BulletinsRepository,
);
