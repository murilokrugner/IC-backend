import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

class Mail {
  constructor() {
    const { service, host, port, secure, auth, authMethod } = mailConfig;

    this.transporter = nodemailer.createTransport({
      service,
      host,
      port,
      secure,
      auth,
      authMethod
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();