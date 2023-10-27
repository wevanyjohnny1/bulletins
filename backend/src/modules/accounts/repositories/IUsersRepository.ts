import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/entities/User';

interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  create({ name, email, password }: ICreateUserDTO): Promise<void>
}

export { IUsersRepository };
