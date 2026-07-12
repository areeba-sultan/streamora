import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', nullable: true })
  title?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'int', nullable: true })
  releasedyear?: number;

  @Column({ type: 'varchar', nullable: true })
  category?: string;

  @Column({ type: 'varchar', nullable: true })
  type?: string;

  @Column({ type: 'varchar', nullable: true })
  genre?: string;

  @Column({ type: 'text', nullable: true })
  image?: string;

  @Column({ type: 'text', nullable: true })
  video?: string;

  @Column({ type: 'float', nullable: true })
  rating?: number;

  @Column({ type: 'jsonb', nullable: true })
  seasons?: object[];

  @Column({ type: 'float', nullable: true })
  imdb?: number;

  @Column({ type: 'varchar', nullable: true })
  director?: string;

  @Column({ type: 'varchar', nullable: true })
  language?: string;

  @Column({ type: 'text', nullable: true })
  casts?: string;
}
