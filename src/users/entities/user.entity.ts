import { Column, Entity } from 'typeorm';

type UserRole = 'employee' | 'admin';

@Entity()
export class User {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}
