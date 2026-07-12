import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  planName: string;

  @Column()
  price: string;

  @Column()
  quality: string;

  @Column()
  screens: string;

  @Column()
  download: string;

  @Column({ default: true })
  active: boolean;
}
