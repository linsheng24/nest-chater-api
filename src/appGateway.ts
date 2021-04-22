import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any) {
    console.log('accepted message');
  }
}
