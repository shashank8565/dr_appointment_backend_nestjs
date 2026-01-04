import { Controller, Get } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get('list')
  async getDoctors() {
    return this.doctorService.getDoctorList();
  }
}
