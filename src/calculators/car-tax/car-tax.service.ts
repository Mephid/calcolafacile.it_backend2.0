import { Injectable } from '@nestjs/common';
import { CarTaxTablesRepository } from './data/car-tax-tables.repository';
import { GetCarTaxDTO } from './dto/get-car-tax.dto';
import { Unit } from './enum/units.enum';

@Injectable()
export class CarTaxService {
  public getCarTax(getCarTaxDto: GetCarTaxDTO): number {
    const {
      euro_category: euroCategory,
      power_value: powerValue,
      quantity,
      region,
    } = getCarTaxDto;

    const kw = this.convertPowerValue(powerValue, quantity);
    const minAndMaxPrices = CarTaxTablesRepository.getRegionPrices(
      region,
      euroCategory,
      kw,
    );

    return this.calculateCarTax(minAndMaxPrices, kw);
  }

  private convertPowerValue(powerValue: Unit, quantity: number): number {
    let result = quantity;

    if (powerValue == Unit.CV) {
      result = quantity / 1.36;
    }

    return result;
  }

  private calculateCarTax(
    minAndMaxPrices: { min: number; max: number },
    quantity: number,
  ): number {
    let result = null;

    if (quantity <= 100) {
      result = quantity * minAndMaxPrices.min;
    } else {
      const lowPrice = 100 * minAndMaxPrices.min;
      const highPrice = (quantity - 100) * minAndMaxPrices.max;

      result = lowPrice + highPrice;
    }

    return result;
  }
}
