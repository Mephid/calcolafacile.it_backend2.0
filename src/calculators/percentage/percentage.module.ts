import { Module } from '@nestjs/common';
import { PercentageController } from './percentage.controller';
import { PercentageService } from './percentage.service';

@Module({
  controllers: [PercentageController],
  providers: [PercentageService],
})
export class PercentageModule {}
