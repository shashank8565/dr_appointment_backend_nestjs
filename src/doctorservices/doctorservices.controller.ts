import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { DoctorservicesService } from './doctorservices.service';
import { DoctorServiceDto } from 'src/dto/doctorServiceDto/doctorService.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@UseGuards(AuthGuard('jwt'))
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
