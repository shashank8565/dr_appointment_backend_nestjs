import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppointmentStatus } from '@prisma/client';

@Injectable()
export class DoctorRepository {
  constructor(private readonly prisma: PrismaService) {}

  getAllDoctors() {
    return this.prisma.doctor.findMany();
  }

  getDoctorById(id: string) {
    return this.prisma.doctor.findUnique({
      where: { id },
    });
  }
}
