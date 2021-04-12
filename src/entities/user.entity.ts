import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { UserProfileEntity } from './userProfile.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  firstName: string;

  @Column({ default: null })
  lastName: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  intro: string;

  @Column({ default: null })
  status: string;

  @Column({ type: 'date', default: null })
  birth: string;

  @Column()
  encodePassword: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: PhotoEntity[];

  @OneToMany(() => UserProfileEntity, (profileData) => profileData.user)
  profileData: UserProfileEntity[];

  @CreateDateColumn()
  create: string;

  @UpdateDateColumn()
  update: string;
}
