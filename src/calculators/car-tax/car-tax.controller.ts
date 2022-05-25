import { Controller, Get, Query } from '@nestjs/common';
import { CarTaxService } from './car-tax.service';
import { GetCarTaxDTO } from './dto/get-car-tax.dto';

@Controller('car-tax')
export class CarTaxController {
  constructor(private readonly carTaxService: CarTaxService) {}

  @Get()
  public getCarTax(@Query() getCarTaxDTO: GetCarTaxDTO): { carTax: number } {
    const carTax = this.carTaxService.getCarTax(getCarTaxDTO);

    return { carTax };
  }
}
