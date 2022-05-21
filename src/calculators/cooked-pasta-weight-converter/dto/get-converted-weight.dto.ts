import { Transform } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { PastaType } from '../enum/pasta-types.enum';

export class GetConvertedWeightDto {
  @IsEnum(PastaType, { message: 'Insert a valid pasta type' })
  pasta_type: PastaType;

  @IsNumber({}, { message: 'Insert a valid weight.' })
  @Transform(({ value }) => +value)
  weight: number;
}
