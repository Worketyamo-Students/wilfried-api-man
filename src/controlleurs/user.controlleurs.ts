
/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 08/07/2024 - 19:16:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Request,Response } from "express";
import { HttpCode } from "../core/constants";
import { Prisma, PrismaClient } from "@prisma/client";
import chalk from "chalk";
import { create } from "domain";
import bcrypt from 'bcrypt';
import { sendMail } from "../send-email";
import  otpGenerator  from 'otp-generator';
const prisma = new PrismaClient()
// exécution de la fonction
const controlleursUser = {
    getallUser : async (req:Request,res:Response) => {
        try{
            const user = await prisma.user.findMany()
            res.send(user).status(HttpCode.OK)

        }catch(error){
            console.log(chalk.red(error))
        }
    },

    getoneUser : async (req:Request,res:Response) => {
        const {id} = req.params; // Assuming the user ID is passed as a parameter in the request
    
        try {
            const user = await prisma.user.findUnique({
                where: {
                    user_id: id 
                },
            });
    
            if (!user) {
                res.status(HttpCode.NOT_FOUND).send({ message: "User not found" });
            } else {
                res.send(user).status(HttpCode.OK);
            }
        } catch (error) {
            console.log(chalk.red(error));
            res.status(HttpCode.INTERNAL_SERVER_ERROR).send({ message: "Internal server error" });
        }
    },

    // creer user avec bcrypt
     createUser : async(req:Request,res:Response) =>{
        try{
        const {name,email,password,age} =req.body
        const passhash = await bcrypt.hash(password,10)
        const otpsend = otpGenerator.generate(6,{upperCase:false,specialChars:false});
        const user = await prisma.user.create(
            {
                data: {
                    name,
                    email,
                    password:passhash,
                    age,
                    otp :{
                        code : parseInt(otpsend),
                        expired :false,
                        expireAt : new Date  
                      
                    }
                },
            }
        );
        await sendMail(email,'Email verification',`your OTP is : ${otpsend}`)
            if (user) {
                res.json({ "message": "user successfully created" })
                console.log(user)
            } else res.send({ msg: "could not create user" })
        }catch(error) {
          console.log(chalk.red(error))
        }
     },


     updateUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, email, password, age, role } = req.body;
            const modify = await prisma.user.update({
                where: {
                    user_id: id,
                },
                data: {
                    name,
                    email,
                    password,
                    age,
                    role
                },
            })
            if (modify) {
                res.json({ "message": "user's info successfully modify" })
                console.log(modify)
            }
            else res.send({ msg: "could not create certification" })
        } catch (error) {
            console.error(chalk.red(error))
        }
    },
    

    deleteUser: async (req: Request, res: Response) => {
        const { id } = req.params; // Assuming the user ID is passed as a parameter in the request
    
        try {
            const userToDelete = await prisma.user.findUnique({
                where: {
                    user_id: id,
                },
            });
    
            if (!userToDelete) {
                res.status(HttpCode.NOT_FOUND).send({ message: "User not found" });
            } else {
                await prisma.user.delete({
                    where: {
                        user_id: id,
                    },
                });
    
                res.status(HttpCode.NO_CONTENT).send();
            }
        } catch (error) {
            console.log(chalk.red(error));
            res.status(HttpCode.INTERNAL_SERVER_ERROR).send({ message: "Internal server error" });
        }
    },
}
 
export default controlleursUser