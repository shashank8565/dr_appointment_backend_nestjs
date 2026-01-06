import { IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ScheduleDto {
  @ApiProperty()
  @IsString()
  doctorId: string;

  @ApiProperty()
  @IsString()
  date: Date;

  @ApiProperty()
  @IsString()
  startTime: Date;

  @ApiProperty()
  @IsString()
  endTime: Date;

  @ApiProperty()
  @IsNumber()
  slotDuration: number;
}
