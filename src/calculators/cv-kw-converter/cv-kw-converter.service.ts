import { Injectable } from '@nestjs/common';
import { GetConvertedPowerValueDto } from './dto/get-converted-power-value.dto';

@Injectable()
export class CvKwConverterService {
  public getCookedPastaWeight(
    getConvertedPowerValueDto: GetConvertedPowerValueDto,
  ): number {
    let convertedValue = null;

    const { powerValue, quantity } = getConvertedPowerValueDto;

    switch (powerValue) {
      case 'CV':
        convertedValue = this.convertCvToKw(quantity);
        break;
      case 'KW':
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
