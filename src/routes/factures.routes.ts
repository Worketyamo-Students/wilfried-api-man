import * as factures from "./../controlleurs/factures.controlleurs"
/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 05/07/2024 - 19:44:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import controlleursFactures from "./../controlleurs/factures.controlleurs";
import { Router } from "express";
import { get } from "http";
const routerFactures = Router()
// getfirst pour générer toutes les factures
routerFactures.get("/",controlleursFactures.getallFactures)



export default routerFactures