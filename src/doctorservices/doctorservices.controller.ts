import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DoctorservicesService } from './doctorservices.service';
import { DoctorServiceDto } from 'src/dto/doctorServiceDto/doctorService.dto';

@Controller('doctorservices')
export class DoctorservicesController {
  constructor(private readonly doctorservicesService: DoctorservicesService) {}

  @Post('create')
  async createDoctorService(@Body() dto: DoctorServiceDto) {
    return this.doctorservicesService.createDoctorService(dto);
  }

  @Get(':doctorId')
  async getServicesByDoctorId(@Param('doctorId') doctorId: string) {
    return this.doctorservicesService.getServicesByDoctorId(doctorId);
  }

  @Get(':serviceId')
  async getServiceById(@Param('serviceId') serviceId: string) {
    return this.doctorservicesService.getServiceById(serviceId);
  }
}
