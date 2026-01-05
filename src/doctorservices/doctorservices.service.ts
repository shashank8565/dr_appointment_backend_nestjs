import { Injectable } from '@nestjs/common';

import { DoctorServiceDto } from 'src/dto/doctorServiceDto/doctorService.dto';
import { DoctorServiceRepository } from 'src/Repository/DoctorServiceRepository/doctorService.repository';

@Injectable()
export class DoctorservicesService {
  constructor(private readonly doctorServiceRepo: DoctorServiceRepository) {}

  async createDoctorService(dto: DoctorServiceDto) {
    return this.doctorServiceRepo.createDoctorService(dto, dto.doctorId);
  }

  async getServicesByDoctorId(doctorId: string) {
    return this.doctorServiceRepo.getServicesByDoctorId(doctorId);
  }

  async getServiceById(serviceId: string) {
    return this.doctorServiceRepo.getServiceById(serviceId);
  }
}
