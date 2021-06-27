import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PhotoEntity } from './entities/photo.entity';
import { profileFieldEntity } from './entities/profileField.entity';
import { UserProfileEntity } from './entities/userProfile.entity';
import { InterestEntity } from './entities/interest.entity';
import { InterestModule } from './interest/interest.module';
import { AppGateway } from './appGateway';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [
        UserEntity,
        PhotoEntity,
        profileFieldEntity,
        UserProfileEntity,
        InterestEntity,
      ],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost'),
    AuthModule,
    UserModule,
    InterestModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
