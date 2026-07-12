import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() body: any) {
    return this.userService.signup(body);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.userService.login(body.email, body.password);
  }
}
