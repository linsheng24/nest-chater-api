import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'photos' })
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.photos)
  user: UserEntity;

  @Column()
  url: string;

  @Column({ default: false })
  isMain: boolean;
}
