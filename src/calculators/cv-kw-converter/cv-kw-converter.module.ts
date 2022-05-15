import { Module } from '@nestjs/common';
import { CvKwConverterController } from './cv-kw-converter.controller';
import { CvKwConverterService } from './cv-kw-converter.service';

@Module({
  controllers: [CvKwConverterController],
  providers: [CvKwConverterService],
})
export class CvKwConverterModule {}
