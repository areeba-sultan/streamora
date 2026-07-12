import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async signup(data: any) {
    return this.userRepo.save(data);
  }

  async login(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email, password } });

    if (!user) {
      return { success: false, message: 'Invalid credentials' };
    }

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: 'user',
      },
    };
  }
}
