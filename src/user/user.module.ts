import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserProfileEntity } from '../entities/userProfile.entity';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { ProfileFieldEntity } from "../entities/profileField.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserProfileEntity, ProfileFieldEntity]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
