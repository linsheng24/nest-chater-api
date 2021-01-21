import {
  Controller,
  UseGuards,
  Get,
  Post,
  Request,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './dto/login_dto';
import { ApiSecurity } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginDto: LoginDto) {
    return this.authService.login(req.user);
  }

  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Post('auth/user')
  getCurrentUser(@Request() req) {
    return req.user;
  }
}
