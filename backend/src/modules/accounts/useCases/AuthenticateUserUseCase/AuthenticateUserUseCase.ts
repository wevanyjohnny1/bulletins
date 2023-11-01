import { AppError } from '@errors/AppError';
import { User } from '@modules/accounts/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  email: string
  password: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {

  }

  async execute({ email, password }: IRequest): Promise<User> {
    const findedUser = await this.usersRepository.findByEmail(email);

    if (!findedUser) {
      throw new AppError('E-mail ou senha estão incorretos!');
    }

    if (findedUser.password !== password) {
      throw new AppError('E-mail ou senha estão incorretos!');
    }

    const user = this.usersRepository.authenticate({ email, password });

    return user;
  }
}

export { AuthenticateUserUseCase };
