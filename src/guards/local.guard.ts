import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class LocalGuard implements CanActivate {

  constructor(@Inject() private userService:UserService) {}
  
  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const user = {email: new RegExp( request.body.email)};

    return await this.userService.findAuthPassword(user as unknown as User)
    .then(document=>{
      if(document.password == request.password)
      return true;
    })
    .catch(error => {
      return false;
    })
    
  }
}
