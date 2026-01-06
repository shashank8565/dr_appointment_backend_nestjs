import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ScheduleDto } from 'src/dto/scheduleDto/schedule.dto';

@Injectable()
class ScheduleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createSchedule(scheduleData: ScheduleDto): Promise<any> {
    return this.prisma.schedule.create({
      data: scheduleData,
    });
  }
}
