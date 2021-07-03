import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestModule } from './interest/interest.module';
import { AppGateway } from './appGateway';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
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
