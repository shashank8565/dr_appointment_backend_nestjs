import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@UseGuards(AuthGuard('jwt'))
@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get('list')
  async getDoctors() {
    return this.doctorService.getDoctorList();
  }

  @Get(':id')
  async getDoctorById(@Param('id') id: string) {
    return this.doctorService.getDoctorById(id);
  }
}
