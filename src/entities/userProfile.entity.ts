import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { UserEntity } from './user.entity';
import { ProfileFieldEntity } from './profileField.entity';

@Entity({ name: 'user_profile' })
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @ManyToOne(() => UserEntity, (user) => user.profileData)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  @RelationId((userProfile: UserProfileEntity) => userProfile.user)
  userId: number;

  @ManyToOne(
    () => ProfileFieldEntity,
    (profileField) => profileField.profileData,
  )
  @JoinColumn({ name: 'profileFieldId' })
  profileField: ProfileFieldEntity;

  @Column()
  @RelationId((userProfile: UserProfileEntity) => userProfile.profileField)
  profileFieldId: number;
}
