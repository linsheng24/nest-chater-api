import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @ApiTags('users')
  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Get('get')
  async get(@Request() req) {
    return req.user;
  }
}
