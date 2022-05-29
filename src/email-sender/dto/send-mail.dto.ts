import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

import * as sanitizeHtml from 'sanitize-html';

export default class SendMailDTO {
  @ApiProperty()
  @IsEmail()
  senderEmail: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  senderName: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  subject: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  content: string;
}
