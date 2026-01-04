import { SignUpDto } from './../dto/signup.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/dto/signin.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiBody({ type: SignUpDto })
  async Signup(@Body() dto: SignUpDto) {
    return this.authService.register(dto);
  }

  @Post('signin')
  @ApiBody({ type: SignInDto })
  async Signin(@Body() dto: SignInDto) {
    return this.authService.login(dto.email, dto.password);
  }
}
