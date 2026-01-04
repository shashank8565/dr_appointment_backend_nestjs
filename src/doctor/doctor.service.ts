import { Injectable } from '@nestjs/common';
import { DoctorRepository } from 'src/Repository/DoctorRepository/doctor.repository';

@Injectable()
export class DoctorService {
  constructor(private doctorRepository: DoctorRepository) {}

  async getDoctorList() {
    const allDoctorsUnderArea = this.doctorRepository.getAllDoctors();

    return allDoctorsUnderArea;
  }
}
