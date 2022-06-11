import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  easyExams(): string {
    return 'EasyExams';
  }
}
