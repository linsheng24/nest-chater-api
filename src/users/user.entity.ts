import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PhotoEntity } from '../photo/photo.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  encodePassword: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: PhotoEntity[];
}
