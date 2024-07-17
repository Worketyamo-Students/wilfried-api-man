
/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 08/07/2024 - 19:07:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Router } from "express";
import controlleursUser from "../controlleurs/user.controlleurs";
const routerUser = Router()
// all users
routerUser.get("/",controlleursUser.getallUser)
// one user 
routerUser.get("/",controlleursUser.getoneUser)
// create user
routerUser.post("/",controlleursUser.createUser)
// update user
routerUser.put("/",controlleursUser.updateUser)
// verifyotp
routerUser.post("/verify-otp", controlleursUser.verifyUserOTP);
export default routerUser
