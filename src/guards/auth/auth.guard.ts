import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService  } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    const BearerToken = request.headers['authorization'];

    const token = BearerToken.split(' ')[1];

    const decoded = this.jwtService.verify(token);

    if (decoded) {
      request.user = decoded;
      return true;
    }
    return false;
  }
}

