import { Module } from '@nestjs/common';
import { CarTaxService } from './car-tax.service';
import { CarTaxController } from './car-tax.controller';

@Module({
  providers: [CarTaxService],
  controllers: [CarTaxController],
})
export class CarTaxModule {}
