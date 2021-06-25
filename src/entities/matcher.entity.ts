import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'matchers' })
export class MatchersEntity {
  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  create: string;

  @UpdateDateColumn()
  update: string;
}
