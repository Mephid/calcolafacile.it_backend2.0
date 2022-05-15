import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CookedPastaWeightConverterModule } from './cooked-pasta-weight-converter/cooked-pasta-weight-converter.module';
import { CvKwConverterModule } from './cv-kw-converter/cv-kw-converter.module';

/* Applies "calculators" prefix to every route contained in modules*/

const modules = [CookedPastaWeightConverterModule, CvKwConverterModule];

const routerModulesPrefixed = RouterModule.register(
  modules.map((module) => ({ path: 'calculators', module })),
);

@Module({
  imports: [...modules, routerModulesPrefixed],
})
export class CalculatorsModule {}
