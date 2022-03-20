import { Module } from '@nestjs/common';
import { CalculatorsModule } from './calculators/calculators.module';

@Module({
  imports: [CalculatorsModule],
})
export class AppModule {}
