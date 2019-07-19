const nodeMailer = require('nodemailer');

/**
 * Send email.
 * @param {*} from .
 * @param {*} to .
 * @param {*} subject .
 * @param {*} htmlbody .
 * @param {*} plainbody  .
  */
function sendEmail(from, to, subject, htmlbody, plainbody) {
  const transporter = nodeMailer.createTransport({
    host: process.env.email_host,
    port: process.env.email_port,
    secure: true,
    auth: {
      user: process.env.email_user,
      pass: process.env.email_pass,
    },
  });
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: plainbody,
    html: htmlbody,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
module.exports =sendEmail;
