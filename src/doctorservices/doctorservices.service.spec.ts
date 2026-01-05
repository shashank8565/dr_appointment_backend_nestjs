import { Test, TestingModule } from '@nestjs/testing';
import { DoctorservicesService } from './doctorservices.service';

describe('DoctorservicesService', () => {
  let service: DoctorservicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorservicesService],
    }).compile();

    service = module.get<DoctorservicesService>(DoctorservicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
