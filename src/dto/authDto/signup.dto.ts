import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export enum RoleEnum {
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
  ADMIN = 'ADMIN',
}

export class SignUpDto {
  @ApiProperty({ example: 'newuser@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'superSecret123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: RoleEnum.PATIENT, enum: RoleEnum })
  @IsEnum(RoleEnum)
  role: RoleEnum;

  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: '+15551234567', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 'Cardiology', required: false })
  @IsString()
  @MinLength(10)
  @IsOptional()
  specialization?: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;

  @ApiProperty({ example: 37.7749, required: false })
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @ApiProperty({ example: -122.4194, required: false })
  @IsNumber()
  @IsOptional()
  longitude?: number;
}
