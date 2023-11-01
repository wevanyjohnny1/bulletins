import { IAuthenticationDTO } from '@modules/accounts/dtos/IAuthenticationDTO';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/entities/User';
import { Repository, getRepository } from 'typeorm';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name, email, password,
    });

    await this.repository.save(user);

    delete user.password;

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async authenticate({ email }: IAuthenticationDTO): Promise<User> {
    const user = await this.findByEmail(email);

    return user;
  }
}

export { UsersRepository };
