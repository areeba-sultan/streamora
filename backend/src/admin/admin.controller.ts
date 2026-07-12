import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // CREATE ADMIN
  @Post('create')
  createAdmin(@Body() body: any) {
    return this.adminService.createAdmin(body);
  }

  // LOGIN
  @Post('login')
  login(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return this.adminService.login(body.email, body.password);
  }
  // GET ALL ADMINS
  @Get('all')
  getAllAdmins() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.adminService.getAllAdmins();
  }
  // DELETE ADMIN
  @Delete(':id')
  deleteAdmin(@Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.adminService.deleteAdmin(Number(id));
  }

  // UPDATE ADMIN
  @Patch(':id')
  updateAdmin(@Param('id') id: string, @Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.adminService.updateAdmin(Number(id), body);
  }
}
