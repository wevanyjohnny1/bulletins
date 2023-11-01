import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/entities/User';

import { IAuthenticationDTO } from '../dtos/IAuthenticationDTO';

interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  create({ name, email, password }: ICreateUserDTO): Promise<User>
  authenticate({ email, password }: IAuthenticationDTO): Promise<User>
}

export { IUsersRepository };
