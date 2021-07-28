import {
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'matchers' })
export class MatchersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.matchers1)
  user1: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.matchers2)
  user2: UserEntity;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  create: string;

  @UpdateDateColumn()
  update: string;
}
