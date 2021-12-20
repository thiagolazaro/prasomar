/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { CreatePostService } from '../services/CreatePostService';

export default class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, description, link, user_id } = request.body;

    const post = new CreatePostService();

    const result = await post.execute({
      title,
      description,
      link,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
