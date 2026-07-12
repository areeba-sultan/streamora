import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  async updateAdmin(id: number, data: any) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });

    if (!admin) {
      return {
        success: false,
        message: 'Admin not found',
      };
    }
    await this.adminRepo.update(id, data);
    return {
      success: true,
      message: 'Admin updated successfully',
    };
  }
  async deleteAdmin(id: number) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });
    if (!admin) {
      return {
        success: false,
        message: 'Admin not found',
      };
    }
    await this.adminRepo.delete(id);
    return {
      success: true,
      message: 'Admin deleted successfully',
    };
  }
  async getAllAdmins() {
    return this.adminRepo.find({
      order: {
        id: 'ASC',
      },
    });
  }
  private adminKey: string | null = null; // simple session

  constructor(
    @InjectRepository(Admin)
    private readonly adminRepo: Repository<Admin>,
  ) {}
  async createAdmin(data: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!data.role) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      data.role = 'ADMIN';
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.adminRepo.save(data);
  }

  async login(email: string, password: string) {
    const admin = await this.adminRepo.findOne({
      where: { email, password },
    });

    if (!admin) {
      return {
        success: false,
        message: 'Invalid credentials',
      };
    }

    this.adminKey = `ADMIN-${Date.now()}`;
    return {
      success: true,
      adminKey: this.adminKey,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    };
  }
  isAdmin(key: string) {
    return key === this.adminKey;
  }
}
