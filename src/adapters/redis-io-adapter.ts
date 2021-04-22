import { IoAdapter } from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const redisAdapter = redisIoAdapter({ host: 'localhost', port: 6379 });

    server.adapter(redisAdapter);
    return server;
  }
}
