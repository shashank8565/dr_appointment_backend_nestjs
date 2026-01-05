import { Test, TestingModule } from '@nestjs/testing';
import { DoctorservicesController } from './doctorservices.controller';

describe('DoctorservicesController', () => {
  let controller: DoctorservicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorservicesController],
    }).compile();

    controller = module.get<DoctorservicesController>(DoctorservicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
