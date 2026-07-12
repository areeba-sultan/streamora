import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepo: Repository<Subscription>,
  ) {}

  findAll() {
    return this.subscriptionRepo.find();
  }

  findOne(id: number) {
    return this.subscriptionRepo.findOne({ where: { id } });
  }

  create(data: any) {
    return this.subscriptionRepo.save(this.subscriptionRepo.create(data));
  }

  update(id: number, data: any) {
    return this.subscriptionRepo.update(id, data);
  }

  delete(id: number) {
    return this.subscriptionRepo.delete(id);
  }
}
