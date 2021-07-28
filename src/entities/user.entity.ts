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
import { MatchersEntity } from "./matcher.entity";

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  email: string;

  @Column()
  encodePassword: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: PhotoEntity[];

  @OneToMany(() => UserProfileEntity, (profileData) => profileData.user)
  profileData: UserProfileEntity[];

  @OneToMany(() => MatchersEntity, (matcher) => matcher.user1)
  matchers1: MatchersEntity[];

  @OneToMany(() => MatchersEntity, (matcher) => matcher.user2)
  matchers2: MatchersEntity[];

  @CreateDateColumn()
  create: string;

  @UpdateDateColumn()
  update: string;
}
