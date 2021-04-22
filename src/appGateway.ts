import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway({ namespace: 'chat' })
export class AppGateway {
  @WebSocketServer()
  server;

  handleConnection() {
    console.log('new connection!');
  }

  @SubscribeMessage('join')
  joinChannel(client: Socket, room: string) {
    client.join(room);
  }

  @SubscribeMessage('leave')
  leaveChannel(client: Socket, room: string) {
    client.leave(room);
  }

  @SubscribeMessage('test')
  testChannel(client: Socket, room: string) {
    // 不包刮自己
    // client.broadcast.to('test_room').emit('test');
    this.server.to('test_room').emit('test');
  }
}
