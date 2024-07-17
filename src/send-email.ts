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
import { envs } from './core/config/env';
dotenv.config();
const transporter: Transporter = nodemailer.createTransport({
  service:"gmail",
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: envs.EMAIL_USER,
    pass: envs.EMAIL_PASS
  }
});

export const sendMail = async (to: string, subject:string,text:string) => {
  const mailOptions = {
    from: envs.EMAIL_USER,
    to,
    subject,
    text:"salut ! Bien "
  };
  await transporter.sendMail(mailOptions);
};