import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movie.service';
import { MoviesController } from './movie.controller';
import { Movie } from './movie.entity';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), AdminModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
