import { Module } from '@nestjs/common';
import { CookedPastaWeightConverterService } from './cooked-pasta-weight-converter.service';
import { CookedPastaWeightConverterController } from './cooked-pasta-weight-converter.controller';

@Module({
  providers: [CookedPastaWeightConverterService],
  controllers: [CookedPastaWeightConverterController],
})
export class CookedPastaWeightConverterModule {}
