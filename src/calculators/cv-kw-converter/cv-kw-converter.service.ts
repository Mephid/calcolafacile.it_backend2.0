import { Injectable } from '@nestjs/common';
import { GetConvertedPowerValueDto } from './dto/get-converted-power-value.dto';
import { Unit } from './enum/units.enum';

@Injectable()
export class CvKwConverterService {
  public getCookedPastaWeight(
    getConvertedPowerValueDto: GetConvertedPowerValueDto,
  ): number {
    let convertedValue = null;

    const { power_value: powerValue, quantity } = getConvertedPowerValueDto;

    switch (powerValue) {
      case Unit.CV:
        convertedValue = this.convertCvToKw(quantity);
        break;
      case Unit.KW:
        convertedValue = this.convertKwToCv(quantity);
        break;

      default:
        throw new Error('Unexpected power value.');
    }

    return convertedValue;
  }

  private convertCvToKw(quantity: number) {
    return quantity / 1.36;
  }

  private convertKwToCv(quantity: number) {
    return quantity * 1.36;
  }
}
