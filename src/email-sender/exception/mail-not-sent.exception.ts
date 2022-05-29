export class MailNotSentException extends Error {
  constructor(error: Error) {
    super(error.message);
    this.name = 'MailNotSentException';
    this.stack = error.stack;
  }
}
