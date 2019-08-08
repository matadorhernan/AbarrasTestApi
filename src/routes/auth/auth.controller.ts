import { Controller, Post, Body, Res, Get, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LocalGuard } from '../../guards/local.guard';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

import * as _ from 'lodash';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  authRegister(@Body() user: User | Array<User>, @Res() res: Response) {
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
  @UseGuards(new LocalGuard(this.userService))
  authLogin(@Body() user: User, @Res() res: Response) {
    return res.json({
      code: 200,
      success: true,
      message: 'User Logged in',
    });
  }
}
