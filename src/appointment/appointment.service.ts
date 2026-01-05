import { Injectable } from '@nestjs/common';
import {
  AcceptAppointmentDto,
  AppointmentDto,
} from 'src/dto/appointmentDto/appointment.dto';
import { AppointmentRepository } from 'src/Repository/appointmentRepository/appointment.repository';

@Injectable()
export class AppointmentService {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async getAppointmentByDoctorId(doctorId: string) {
    return this.appointmentRepository.getAppointmentByDoctorId(doctorId);
  }

  async createAppointment(appointment: AppointmentDto) {
    return this.appointmentRepository.createAppointment(appointment);
  }

  async acceptAppointment(acceptAppointmentDto: AcceptAppointmentDto) {
    return this.appointmentRepository.acceptAppointment(
      acceptAppointmentDto.id,
      acceptAppointmentDto.doctorId,
    );
  }
}
