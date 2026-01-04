import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  createUser(email: string, password: string, role: Role) {
    return this.prisma.user.create({
      data: { email, password, role },
    });
  }

  async createDoctor(
    userId: string,
    name: string,
    specialization?: string,
    isAvailable?: boolean,
    latitude?: number,
    longitude?: number,
  ) {
    return this.prisma.doctor.create({
      data: {
        userId,
        name,
        specialization: specialization ?? '',
        isAvailable: isAvailable ?? true,
        latitude: latitude ?? 0,
        longitude: longitude ?? 0,
      },
    });
  }

  async createPatient(
    userId: string,
    name: string,
    phone?: string,
    latitude?: number,
    longitude?: number,
  ) {
    return this.prisma.patient.create({
      data: {
        userId,
        name,
        phone: phone ?? '',
        latitude: latitude ?? 0,
        longitude: longitude ?? 0,
      },
    });
  }
}
