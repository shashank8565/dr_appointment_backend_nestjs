import { SignUpDto } from '../dto/authDto/signup.dto';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/Repository/userRepository/user.repository';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwtService.sign({ userId: user.id });
    return { token };
  }

  async register(SignUpDto: SignUpDto) {
    const {
      email,
      password,
      role,
      name,
      phone,
      specialization,
      isAvailable,
      latitude,
      longitude,
    } = SignUpDto;
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }
    const user = await this.userRepository.createUser(email, password, role);

    if (user) {
      const userId = user.id;

      if (userId) {
        if (user.role === 'DOCTOR') {
          const doctor = await this.userRepository.createDoctor(
            userId,
            name,

            specialization,

            isAvailable,

            latitude,
            longitude,
          );

          if (doctor) {
            return doctor;
          }
        }
      }

      if (user.role === 'PATIENT') {
        const patient = await this.userRepository.createPatient(
          userId,
          name,
          phone,
          latitude,
          longitude,
        );

        if (patient) {
          return patient;
        }
      }
    }
  }
}
