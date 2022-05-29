import { Module } from '@nestjs/common';
import { EmailSenderController } from './email-sender.controller';
import { EmailSenderService } from './email-sender.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  controllers: [EmailSenderController],
  providers: [EmailSenderService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtps.aruba.it',
        port: 465,
        // logger: isDev,
        // debug: isDev,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PSW,
        },
        tls: {
          minVersion: 'TLSv1.2',
          // rejectUnauthorized: !isDev,
        },
      },
      defaults: {
        to: process.env.CONTACT_EMAIL,
      },
    }),
  ],
})
export class EmailSenderModule {}
