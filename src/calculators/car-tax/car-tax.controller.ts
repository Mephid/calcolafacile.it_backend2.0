import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarTaxService } from './car-tax.service';
import { GetCarTaxDTO } from './dto/get-car-tax.dto';

@ApiTags('Calculators')
@Controller('car-tax')
export class CarTaxController {
  constructor(private readonly carTaxService: CarTaxService) {}

  @Get()
  public getCarTax(@Query() getCarTaxDTO: GetCarTaxDTO): { carTax: number } {
    const carTax = this.carTaxService.getCarTax(getCarTaxDTO);

    return { carTax };
  }
}
