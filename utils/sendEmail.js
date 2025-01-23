const nodeMailer = require("nodemailer");

// host: process.env.SMPT_HOST,
const sendEmail = async (options) => {
    // console.log("email send");
  const transporter = nodeMailer.createTransport({
    host:process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
//   console.log("transporter :- ", transporter);

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message, 
  };
  console.log("mailoptions:- ",mailOptions)

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMPT_HOST,
//       port: process.env.SMPT_PORT,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMPT_MAIL,
//         pass: process.env.SMPT_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.SMPT_MAIL,
//       to: options.email,
//       subject: options.subject,
//       text: options.message,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error; // Rethrow the error to be caught by the calling function
//   }
// };

// module.exports = sendEmail;
