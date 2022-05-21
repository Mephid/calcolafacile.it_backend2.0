import { Injectable } from '@nestjs/common';
import cookedWeightCoefficient from './data/cooked-weight-coefficient';
import { GetConvertedWeightDto } from './dto/get-converted-weight.dto';
import { PastaType } from './enum/pasta-types.enum';

@Injectable()
export class CookedPastaWeightConverterService {
  public getCookedPastaWeight(
    getConvertedWeightDto: GetConvertedWeightDto,
  ): number {
    const { pasta_type: type, weight } = getConvertedWeightDto;

    const weightCoefficient = cookedWeightCoefficient[PastaType[type]];

    return weightCoefficient * weight;
  }
}
