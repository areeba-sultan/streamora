import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string; // no hashing

  @Column({
    default: 'ADMIN',
  })
  role!: string; // ADMIN | SUPER_ADMIN
}
