import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionAdminController } from './subscription.admin.controller';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription]), AdminModule],
  controllers: [SubscriptionController, SubscriptionAdminController],
  providers: [SubscriptionService],
})
export class SubscriptionModule {}
