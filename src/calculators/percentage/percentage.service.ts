import { Injectable } from '@nestjs/common';
import { GetCalculatedValueDTO } from './dto/get-calculated-value.dto';
import { ValueType } from './enum/value-types.enum';

@Injectable()
export class PercentageService {
  public getCookedPastaWeight(
    getCalculatedValueDTO: GetCalculatedValueDTO,
  ): number {
    let result = null;

    const { calculate_value: calculateValue, x, y } = getCalculatedValueDTO;

    switch (calculateValue) {
      case ValueType.PART:
        result = this.calculatePart(x, y);
        break;
      case ValueType.PERC:
        result = this.calculatePerc(x, y);
        break;
      case ValueType.WHOLE:
        result = this.calculateWhole(x, y);
        break;

      default:
        throw new Error('Unexpected value type.');
    }

    return result;
  }

  private calculatePart(x: number, y: number) {
    return (x / 100) * y;
  }

  private calculatePerc(x: number, y: number) {
    return (y / x) * 100;
  }

  private calculateWhole(x: number, y: number) {
    return (x * 100) / y;
  }
}
