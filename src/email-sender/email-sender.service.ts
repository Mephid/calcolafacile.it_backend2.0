import { Injectable } from '@nestjs/common';
import SendMailDTO from './dto/send-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { MailNotSentException } from './exception/mail-not-sent.exception';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {}

  public sendMail(sendMailDTO: SendMailDTO): Promise<any> {
    const { content, senderEmail, senderName, subject } = sendMailDTO;

    const checkedSenderName =
      senderName || senderEmail.match(/.+?(?=@)/).toString();

    const sendMailOptions = {
      from: { name: checkedSenderName, address: senderEmail },
      subject,
      text: content,
    };

    return this.mailerService.sendMail(sendMailOptions).catch((err) => {
      throw new MailNotSentException(err);
    });
  }
}
