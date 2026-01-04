import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DoctorRepository {
  constructor(private readonly prisma: PrismaService) {}

  getAllDoctors() {
    return this.prisma.doctor.findMany();
  }
}
