import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDto } from '../dtos/user_dto';
import { EditProfileDto } from '../dtos/edit_profile_dto';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @ApiTags('user')
  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Get('getProfile')
  async get(@Request() req): Promise<UserDto> {
    const { id: _id, ...user } = req.user;
    return user;
  }

  @ApiTags('user')
  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Post('edit')
  async edit(@Request() req, @Body() editProfileDto: EditProfileDto) {
    const user = await this.userService.edit(req.user.id, editProfileDto);
    const payload = await this.authService.getPayloadUser(user);
    return this.authService.login(payload);
  }
}
