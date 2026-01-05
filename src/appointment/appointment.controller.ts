import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {
  AcceptAppointmentDto,
  AppointmentDto,
} from 'src/dto/appointmentDto/appointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('/create')
  async createAppointment(@Body() appointment: AppointmentDto) {
    return this.appointmentService.createAppointment(appointment);
  }

  @Get('/:doctorId')
  async getAppointmentByDoctorId(@Param('doctorId') doctorId: string) {
    return this.appointmentService.getAppointmentByDoctorId(doctorId);
  }

  @Patch('/accept')
  async acceptAppointment(@Body() acceptAppointmentDto: AcceptAppointmentDto) {
    return this.appointmentService.acceptAppointment(acceptAppointmentDto);
  }
}
