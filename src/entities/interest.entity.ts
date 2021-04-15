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

@Entity({ name: 'interests' })
export class InterestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  text: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  create: string;

  @UpdateDateColumn()
  update: string;
}
