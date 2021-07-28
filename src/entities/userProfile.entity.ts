import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { ProfileFieldEntity } from './profileField.entity';

@Entity({ name: 'user_profile' })
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @ManyToOne(() => UserEntity, (user) => user.profileData)
  user: UserEntity;

  @ManyToOne(
    () => ProfileFieldEntity,
    (profileField) => profileField.profileData,
  )
  profileField: ProfileFieldEntity;
}
