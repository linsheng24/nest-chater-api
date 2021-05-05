import {
  Controller,
  UseGuards,
  Post,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './dtos/login_dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dtos/user_dto';
import { MessageService } from './message/message.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly messageService: MessageService,
  ) {}

  @ApiTags('auth')
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginDto: LoginDto) {
    return this.authService.login(req.user);
  }

  @ApiTags('auth')
  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Post('auth/user')
  async getCurrentUser(@Request() req): Promise<UserDto> {
    await sleep(1000);
    return req.user;
  }

  @Get('test')
  async test(@Request() req) {
    this.messageService.create({
      content: 'test',
      type: 1,
      action: 'receive',
    });
    return 1;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
