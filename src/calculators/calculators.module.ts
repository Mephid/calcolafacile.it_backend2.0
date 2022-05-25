import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CookedPastaWeightConverterModule } from './cooked-pasta-weight-converter/cooked-pasta-weight-converter.module';
import { CvKwConverterModule } from './cv-kw-converter/cv-kw-converter.module';
import { PercentageModule } from './percentage/percentage.module';
import { CarTaxModule } from './car-tax/car-tax.module';

/* Applies "calculators" prefix to every route contained in modules*/

const modules = [
  CookedPastaWeightConverterModule,
  CvKwConverterModule,
  PercentageModule,
  CarTaxModule,
];

const routerModulesPrefixed = RouterModule.register(
  modules.map((module) => ({ path: 'calculators', module })),
);

@Module({
  imports: [...modules, routerModulesPrefixed],
})
export class CalculatorsModule {}
