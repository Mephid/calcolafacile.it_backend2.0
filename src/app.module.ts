import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { CalculatorsModule } from './calculators/calculators.module';
import { CvKwConverterModule } from './calculators/cv-kw-converter/cv-kw-converter.module';
import { EmailSenderModule } from './email-sender/email-sender.module';

@Module({
  imports: [
    CalculatorsModule,
    CvKwConverterModule,
    EmailSenderModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
