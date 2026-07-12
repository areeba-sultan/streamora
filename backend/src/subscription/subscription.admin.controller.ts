import {
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Headers,
  ForbiddenException,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { AdminService } from '../admin/admin.service'; // aapka AdminService

@Controller('admin/subscription')
export class SubscriptionAdminController {
  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly adminService: AdminService,
  ) {}

  private checkAdmin(key: string) {
    if (!this.adminService.isAdmin(key)) {
      throw new ForbiddenException(
        'You are not allowed to perform this action',
      );
    }
  }

  @Post()
  create(@Body() body: any, @Headers('admin-key') adminKey: string) {
    this.checkAdmin(adminKey);
    return this.subscriptionService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() body: any,
    @Headers('admin-key') adminKey: string,
  ) {
    this.checkAdmin(adminKey);
    return this.subscriptionService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Headers('admin-key') adminKey: string) {
    this.checkAdmin(adminKey);
    return this.subscriptionService.delete(id);
  }
}
