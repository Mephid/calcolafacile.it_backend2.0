import { Controller, Get, Query } from '@nestjs/common';
import { CookedPastaWeightConverterService } from './cooked-pasta-weight-converter.service';
import { GetConvertedWeightDto } from './dto/get-converted-weight.dto';

@Controller('cooked-pasta-converted-weight')
export class CookedPastaWeightConverterController {
  constructor(
    private readonly cookedPastaWeightConverterService: CookedPastaWeightConverterService,
  ) {}

  @Get()
  getConvertedWeight(@Query() getConvertedWeightDto: GetConvertedWeightDto): {
    convertedWeight: number;
  } {
    const convertedWeight =
      this.cookedPastaWeightConverterService.getCookedPastaWeight(
        getConvertedWeightDto,
      );

    return { convertedWeight };
  }
}
