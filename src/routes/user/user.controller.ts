import { Controller, Get, Param, Res, Put, Body, Delete } from '@nestjs/common';

import * as _ from 'lodash';
import { UserService } from '../../services/user.service';
import { Response } from 'express';
import { User } from '../../interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(@Res() res: Response) {
    this.userService
      .findAll()
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'Users Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching Users',
          error,
        });
      });
  }

  @Get(':id')
  getUserById(@Param('id') id: string, @Res() res: Response) {
    this.userService
      .findById(id)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'User Found',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Searching User',
          error,
        });
      });
  }

  @Put(':id')
  putUser(@Param('id') id: string, @Res() res: Response, @Body() user: User) {
    user.updated = Date.now();
    this.userService
      .updateCreateOne(id, user)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'User Updated',
          document,
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Updating User',
          error,
        });
      });
  }

  @Delete(':id')
  banUser(@Param('id') id: string, @Res() res: Response) {
    this.userService
      .deleteOne(id)
      .then(document => {
        return res.json({
          code: 200,
          success: true,
          message: 'User Banned from Platform',
        });
      })
      .catch(error => {
        return res.status(500).json({
          code: 500,
          success: false,
          message: 'Internal Server Error While Banning User',
          error,
        });
      });
  }
}
