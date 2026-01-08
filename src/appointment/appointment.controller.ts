import { Body, Controller, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import {
  AcceptAppointmentDto,
  AppointmentDto,
} from 'src/dto/appointmentDto/appointment.dto';
import { AppointmentService } from './appointment.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@UseGuards(AuthGuard('jwt'))
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
