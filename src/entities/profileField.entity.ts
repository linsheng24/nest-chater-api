import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserProfileEntity } from './userProfile.entity';

@Entity({ name: 'profile_fields' })
export class profileFieldEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  text: string;

  @Column()
  type: string;

  @Column({ default: false })
  require: boolean;

  @Column({ default: false })
  editable: boolean;

  @OneToMany(() => UserProfileEntity, (profileData) => profileData.profileField)
  profileData: UserProfileEntity[];
}
