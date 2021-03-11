import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from '../entities/user.entity';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @ApiTags('user')
  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Get('getProfile')
  async get(@Request() req) {
    return req.user;
  }
}
