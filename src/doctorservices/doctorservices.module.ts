import { Module } from '@nestjs/common';
import { DoctorservicesController } from './doctorservices.controller';
import { DoctorservicesService } from './doctorservices.service';
import { DoctorServiceRepository } from 'src/Repository/DoctorServiceRepository/doctorService.repository';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorservicesController],
  providers: [DoctorservicesService, DoctorServiceRepository],
})
export class DoctorservicesModule {}
