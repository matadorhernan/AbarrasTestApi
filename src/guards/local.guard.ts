import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class LocalGuard implements CanActivate {
  constructor(private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    
    const request = context.switchToHttp().getRequest();
    const user: unknown = {
      email: new RegExp(request.body.email),
      banned: false,
    };

    return await this.userService
      .findAuthPassword(user as User)
      .then(document => {
        return document.password == request.body.password ? true : false;
      })
      .catch(error => {
        return false;
      });
  }
}
