import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { Unit } from '../enum/units.enum';
import { EuroCategory } from '../enum/euro-categories.enum';
import { Region } from '../enum/regions.enum';

export class GetCarTaxDTO {
  @IsEnum(Unit, { message: 'Insert a valid power value.' })
  power_value: Unit;

  @IsNumber({}, { message: 'Insert a valid quantity.' })
  @Transform(({ value }) => +value)
  quantity: number;

  @IsEnum(EuroCategory, { message: 'Insert a valid euro category.' })
  euro_category: EuroCategory;

  @IsEnum(Region, { message: 'Insert a valid region.' })
  region: Region;
}
