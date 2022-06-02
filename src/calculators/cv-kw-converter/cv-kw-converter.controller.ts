import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CvKwConverterService } from './cv-kw-converter.service';
import { GetConvertedPowerValueDto } from './dto/get-converted-power-value.dto';
import { Unit } from './enum/units.enum';

@ApiTags('Calculators')
@Controller('converted-power-value')
export class CvKwConverterController {
  constructor(private readonly cvKwConverterService: CvKwConverterService) {}

  @Get()
  getConvertedPowerValue(
    @Query() getConvertedPowerValueDto: GetConvertedPowerValueDto,
  ): { powerValue: Unit; quantity: number } {
    const { convertedPowerValue, convertedQuantity } =
      this.cvKwConverterService.getCookedPastaWeight(getConvertedPowerValueDto);

    return { powerValue: convertedPowerValue, quantity: convertedQuantity };
  }
}
