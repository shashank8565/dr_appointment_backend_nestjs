import { AppointmentStatus } from '@prisma/client';
import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import e from 'express';

export class AppointmentDto {
  @ApiProperty()
  @IsString()
  doctorId: string;

  @ApiProperty()
  @IsString()
  patientId: string;

  @ApiProperty()
  @IsString()
  serviceId: string;

  @ApiProperty()
  @IsString()
  appointmentDate: Date;

  @ApiProperty()
  @IsString()
  status: AppointmentStatus;

  @ApiProperty()
  @IsString()
  startTime: Date;

  @ApiProperty()
  @IsString()
  endTime: Date;
}

export class AcceptAppointmentDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  doctorId: string;
}
