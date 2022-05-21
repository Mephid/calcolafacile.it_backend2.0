import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { ValueType } from '../enum/value-types.enum';

export class GetCalculatedValueDTO {
  @IsEnum(ValueType, { message: 'Insert a valid type.' })
  calculate_value: ValueType;

  @IsNumber({}, { message: 'Insert a valid number.' })
  @Transform(({ value }) => +value)
  x: number;

  @IsNumber({}, { message: 'Insert a valid number.' })
  @Transform(({ value }) => +value)
  y: number;
}
