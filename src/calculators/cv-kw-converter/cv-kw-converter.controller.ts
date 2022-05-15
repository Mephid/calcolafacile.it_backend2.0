import { Controller, Get, Query } from '@nestjs/common';
import { CvKwConverterService } from './cv-kw-converter.service';
import { GetConvertedPowerValueDto } from './dto/get-converted-power-value.dto';

@Controller('converted-power-value')
export class CvKwConverterController {
  constructor(private readonly cvKwConverterService: CvKwConverterService) {}

  @Get()
  getConvertedPowerValue(
    @Query() getConvertedPowerValueDto: GetConvertedPowerValueDto,
  ): { convertedValue: number } {
    const convertedValue = this.cvKwConverterService.getCookedPastaWeight(
      getConvertedPowerValueDto,
    );

    return { convertedValue };
  }
}
