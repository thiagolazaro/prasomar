import { getRepository } from 'typeorm';
import { Post } from '../entities/Post';

export class GetAllPostsService {
  async execute() {
    const repoPost = getRepository(Post);

    const posts = await repoPost.find({
      relations: ['user'],
    });

    return posts;
  }
}
