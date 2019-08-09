import { Controller, Post, Body, Res, UseGuards, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { LocalGuard } from '../../guards/local.guard';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

import * as jwt from "jsonwebtoken";
import * as _ from 'lodash';

@Controller('auth')
export class AuthController {
  
  private Seed = '9sZSI6IkJVWUVSIiwiYmFubmVkIjpmYWxzZSwiX2lkIjoiNWQ0Y2MzZjY3YzY0ZjAwODI4OTFjNGMxIiwiZW1haWwiOiJ0ZXN0aW5nQHR';
  private expiresIn = '5d';
  constructor(private userService: UserService) {}

  @Post('register')
  authRegister(@Body() user: User | User[], @Res() res: Response) {
    user = _.isArray(user)
      ? _.map(user, u => _.pick(u, ['name', 'email', 'password']) as User)
      : (_.pick(user, ['name', 'email', 'password']) as User);

    this.userService
      .createOneOrMany(user)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Users Created',
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Creating User',
          error,
        });
      });
  }

  @Post('login')
  @UseGuards(LocalGuard)
  async authLogin(@Body() user: User, @Req() req:Request, @Res() res: Response) {
    
    user = (await this.userService.findAlike(user))[0];

    const token = jwt.sign({
      data: user,
    }, this.Seed, { expiresIn: this.expiresIn });

    return res.json({
      code: 200,
      success: true,
      message: 'User Logged In',
      user,
      token
    });
  }
}
