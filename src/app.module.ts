import { Module } from '@nestjs/common';
import { CalculatorsModule } from './calculators/calculators.module';
import { CvKwConverterModule } from './calculators/cv-kw-converter/cv-kw-converter.module';

@Module({
  imports: [CalculatorsModule, CvKwConverterModule],
})
export class AppModule {}
