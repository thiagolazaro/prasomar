import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { User } from '../entities/User';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    const repoUser = getRepository(User);

    const passwordHash = await hash(password, 8);

    if (!email) {
      throw new Error('Email incorreto');
    }

    const userAlreadyExists = await repoUser.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('Usuário já existe!');
    }

    const user = repoUser.create({ name, email, password: passwordHash });

    await repoUser.save(user);

    delete user.password;

    return user;
  }
}

export { CreateUserService };
