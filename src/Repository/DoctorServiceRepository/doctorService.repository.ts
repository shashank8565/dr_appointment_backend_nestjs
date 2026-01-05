import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DoctorServiceDto } from 'src/dto/doctorServiceDto/doctorService.dto';

@Injectable()
export class DoctorServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createDoctorService(
    doctorServiceData: DoctorServiceDto,
    doctorId: string,
  ) {
    return this.prisma.service.create({
      data: {
        name: doctorServiceData.name,
        price: doctorServiceData.price,
        durationMinutes: doctorServiceData.durationMinutes,
        doctor: {
          connect: { id: doctorId },
        },
      },
    });
  }

  async getServicesByDoctorId(doctorId: string) {
    return this.prisma.service.findMany({
      where: {
        doctorId: doctorId,
      },
    });
  }

  async getServiceById(serviceId: string) {
    return this.prisma.service.findUnique({
      where: {
        id: serviceId,
      },
    });
  }
}
