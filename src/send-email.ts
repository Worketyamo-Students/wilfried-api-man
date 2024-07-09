/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 09/07/2024 - 15:35:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import nodemailer, { Transporter } from 'nodemailer';
import  dotenv  from 'dotenv';
dotenv.config();
const transporter: Transporter = nodemailer.createTransport({
  service:"gmail",
  // host: 'smtp.gmail.com',
  // port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendMail = async (to: string, subject:string,text:string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };
  await transporter.sendMail(mailOptions);
};