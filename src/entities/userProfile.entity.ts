import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { profileFieldEntity } from './profileField.entity';

@Entity({ name: 'user_profile' })
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @ManyToOne(() => UserEntity, (user) => user.profileData)
  user: UserEntity;

  @ManyToOne(
    () => profileFieldEntity,
    (profileField) => profileField.profileData,
  )
  profileField: profileFieldEntity;
}
