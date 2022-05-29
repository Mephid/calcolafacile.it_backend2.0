import { Module } from '@nestjs/common';
import { EmailSenderController } from './email-sender.controller';
import { EmailSenderService } from './email-sender.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [EmailSenderController],
  providers: [EmailSenderService],
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const isDev =
          process.env.NODE_ENV == 'development' ||
          process.env.NODE_ENV == 'test';

        console.log({
          user: config.get('SMTP_USER'),
          pass: config.get('SMTP_PSW'),
        });

        return {
          transport: {
            host: 'smtps.aruba.it',
            port: 465,
            logger: isDev,
            debug: isDev,
            secure: true,
            auth: {
              user: config.get('SMTP_USER'),
              pass: config.get('SMTP_PSW'),
            },
            tls: {
              minVersion: 'TLSv1.2',
              rejectUnauthorized: !isDev,
            },
          },
          defaults: {
            to: config.get('CONTACT_EMAIL'),
          },
        };
      },
    }),
  ],
})
export class EmailSenderModule {}
