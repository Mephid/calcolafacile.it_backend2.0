import { Controller, Get, Query } from '@nestjs/common';
import { PercentageService } from './percentage.service';
import { GetCalculatedValueDTO } from './dto/get-calculated-value.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Calculators')
@Controller('percentage')
export class PercentageController {
  constructor(private readonly percentageService: PercentageService) {}

  @Get()
  getCalculatedValue(@Query() getCalculatedValueDTO: GetCalculatedValueDTO): {
    result: number;
  } {
    const result = this.percentageService.getCookedPastaWeight(
      getCalculatedValueDTO,
    );
    return { result };
  }
}
