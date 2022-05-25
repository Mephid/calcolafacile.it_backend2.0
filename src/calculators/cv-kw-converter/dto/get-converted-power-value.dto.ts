import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { Unit } from '../enum/units.enum';

export class GetConvertedPowerValueDto {
  @ApiProperty({ enum: Unit })
  @IsEnum(Unit, { message: 'Insert a valid power value' })
  power_value: Unit;

  @ApiProperty()
  @IsNumber({}, { message: 'Insert a valid quantity.' })
  @Transform(({ value }) => +value)
  quantity: number;
}
