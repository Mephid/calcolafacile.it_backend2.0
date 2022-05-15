import { Transform } from 'class-transformer';
import { IsIn, IsNumber } from 'class-validator';

export class GetConvertedPowerValueDto {
  @IsIn(['CV', 'KW'], { message: 'Insert a valid power value' })
  powerValue: 'CV' | 'KW';

  @IsNumber({}, { message: 'Insert a valid quantity.' })
  @Transform(({ value }) => +value)
  quantity: number;
}
