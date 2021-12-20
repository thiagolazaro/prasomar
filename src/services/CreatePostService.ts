/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { Post } from '../entities/Post';
import { User } from '../entities/User';

interface IPostRequest {
  title: string;
  description: string;
  link: string;
  user_id: string;
}

class CreatePostService {
  async execute({ title, description, link, user_id }: IPostRequest) {
    const repoPost = getRepository(Post);
    const repoUser = getRepository(User);

    const userAlreadyExists = await repoUser.findOne(user_id);

    if (!userAlreadyExists) {
      throw new Error('Usuário não existe!');
    }

    const post = repoPost.create({ title, description, link, user_id });
    await repoPost.save(post);

    return post;
  }
}

export { CreatePostService };
