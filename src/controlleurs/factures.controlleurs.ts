import * as factures from "./../routes/factures.routes"
/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 05/07/2024 - 19:52:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Request,Response } from "express";
import { HttpCode } from "../core/constants";
import { Prisma, PrismaClient } from "@prisma/client";
import chalk from "chalk";
const prisma = new PrismaClient()
// exécution de la fonction
const controlleursFactures = {
    getallFactures : async (req:Request,res:Response) => {
        try{
            const factures = await prisma.factures.findMany()
            res.send(factures).status(HttpCode.OK)

        }catch(error){
            console.log(chalk.red(error))
        }
    },
}
export default controlleursFactures
