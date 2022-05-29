import {
  BadRequestException,
  Controller,
  InternalServerErrorException,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import SendMailDTO from './dto/send-mail.dto';
import { EmailSenderService } from './email-sender.service';
import { MailNotSentException } from './exception/mail-not-sent.exception';

@ApiTags('Contact')
@Controller('email-sender')
export class EmailSenderController {
  constructor(private readonly emailSenderService: EmailSenderService) {}

  @Post()
  public async sendMail(@Body() sendMailDTO: SendMailDTO): Promise<void> {
    console.dir(sendMailDTO);
    try {
      await this.emailSenderService.sendMail(sendMailDTO);
    } catch (err: unknown) {
      if (err instanceof MailNotSentException) {
        throw new BadRequestException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
