import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

type UserRole = 'employee' | 'admin';

@Entity()
export class User extends CoreEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}
