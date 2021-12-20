/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { GetAllPostsService } from '../services/GetAllPostsService';

export default class GetAllPostsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllPostsService();

    const posts = await service.execute();

    return response.json(posts);
  }
}
