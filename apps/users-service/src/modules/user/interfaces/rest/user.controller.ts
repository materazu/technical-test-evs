import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { plainToClass, plainToInstance } from 'class-transformer';

import { UserDto } from '@evs/dtos';

import { UserApplicationService } from '../../application/services/user-application.service';
import { User } from '../../domain/entities/user.entity';

const okStatus = HttpStatus.OK;
const badRequestStatus = HttpStatus.BAD_REQUEST;

@Controller('user')
export class UserController {
  constructor(
    private readonly itemApplicationService: UserApplicationService
  ) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: okStatus, description: 'Returns users.', type: UserDto, isArray: true })
  @ApiResponse({ status: badRequestStatus, description: 'Error in process' })
  @Get()
  getAllUsers(@Res() res) {
    try {
      const users = this.itemApplicationService.getAllUsers();
      const response = plainToInstance(UserDto, users);

      return res.status(okStatus).json(response);
    } catch (error) {
      return res.status(badRequestStatus).json({ error: error.message });
    }
  }

  @Post()
  @ApiOperation({ summary: 'Adding an item' })
  @ApiResponse({ status: okStatus, description: 'Returns users with new User added.', type: UserDto, isArray: true })
  @ApiResponse({ status: badRequestStatus, description: 'Error in process or in validation' })
  createUser(@Body() item: UserDto, @Res() res) {
    try {
      const user = plainToClass(User, item);
      const users = this.itemApplicationService.createUser(user);

      return res.status(okStatus).json(users);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
