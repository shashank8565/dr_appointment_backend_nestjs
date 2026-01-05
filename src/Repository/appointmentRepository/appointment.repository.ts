import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppointmentDto } from 'src/dto/appointmentDto/appointment.dto';
import { AppointmentStatus } from '@prisma/client';

@Injectable()
export class AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createAppointment(appointment: AppointmentDto) {
    return this.prisma.appointment.create({
      data: {
        ...appointment,
      },
    });
  }

  async acceptAppointment(id: string, doctorId: string) {
    return this.prisma.appointment.update({
      where: { id },
      data: { status: AppointmentStatus.CONFIRMED, doctorId },
    });
  }

  async getAppointmentByDoctorId(doctorId: string) {
    return this.prisma.appointment.findMany({
      where: { doctorId },
    });
  }
}
