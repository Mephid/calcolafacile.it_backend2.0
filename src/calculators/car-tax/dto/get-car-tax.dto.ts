import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { Unit } from '../enum/units.enum';
import { EuroCategory } from '../enum/euro-categories.enum';
import { Region } from '../enum/regions.enum';
import { ApiProperty } from '@nestjs/swagger';

export class GetCarTaxDTO {
  @ApiProperty({ enum: Unit })
  @IsEnum(Unit, { message: 'Insert a valid power value.' })
  power_value: Unit;

  @ApiProperty()
  @IsNumber({}, { message: 'Insert a valid quantity.' })
  @Transform(({ value }) => +value)
  quantity: number;

  @ApiProperty({ enum: EuroCategory })
  @IsEnum(EuroCategory, { message: 'Insert a valid euro category.' })
  euro_category: EuroCategory;

  @ApiProperty({ enum: Region })
  @IsEnum(Region, { message: 'Insert a valid region.' })
  region: Region;
}
