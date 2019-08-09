import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenGuard implements CanActivate {
  private Seed = '9sZSI6IkJVWUVSIiwiYmFubmVkIjpmYWxzZSwiX2lkIjoiNWQ0Y2MzZjY3YzY0ZjAwODI4OTFjNGMxIiwiZW1haWwiOiJ0ZXN0aW5nQHR';

  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.get('Token');
    try {
      await jwt.verify(token, this.Seed);
      return true;
    } catch (error) {
      return false;
    }
  }
}
