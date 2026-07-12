import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movie/movie.module';
import { Movie } from './movie/movie.entity';
import { Admin } from './admin/admin.entity';
import { AdminModule } from './admin/admin.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { Subscription } from './subscription/subscription.entity';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'mydatabase',
      entities: [Movie, Admin, Subscription, User],
      synchronize: true, // Dev mode: auto create table
    }),
    MoviesModule,
    AdminModule,
    SubscriptionModule,
    UserModule,
  ],
})
export class AppModule {}
