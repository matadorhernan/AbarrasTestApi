import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getServerStatus(): Object {
    return {
      code: 200,
      success: true,
      message: 'Server is running',
    };
  }
}
