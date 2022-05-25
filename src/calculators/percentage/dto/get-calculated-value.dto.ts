import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { ValueType } from '../enum/value-types.enum';

export class GetCalculatedValueDTO {
  @ApiProperty({ enum: ValueType })
  @IsEnum(ValueType, { message: 'Insert a valid type.' })
  calculate_value: ValueType;

  @ApiProperty()
  @IsNumber({}, { message: 'Insert a valid number.' })
  @Transform(({ value }) => +value)
  x: number;

  @ApiProperty()
  @IsNumber({}, { message: 'Insert a valid number.' })
  @Transform(({ value }) => +value)
  y: number;
}
