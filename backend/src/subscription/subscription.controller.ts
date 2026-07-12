import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  getAll() {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.subscriptionService.findOne(id);
  }
}
