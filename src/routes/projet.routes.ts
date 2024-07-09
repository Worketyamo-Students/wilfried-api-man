import * as projet from "./../controlleurs/projet.controlleurs"
/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 05/07/2024 - 15:25:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Router } from "express";
import Contolleurs from "../controlleurs/projet.controlleurs";

const routerProject = Router()

// CRUD Operations:

// GET method 1
routerProject.get("/",Contolleurs.getallProjects)
// GET method 2
routerProject.get("/:id",Contolleurs.getoneProject)
// CREATE method
routerProject.post("/",Contolleurs.createProject)
// UPDATE method
routerProject.put("/:id",Contolleurs.modifyProject)
// DELETE method 1
routerProject.delete("/:id",Contolleurs.deleteoneProject)

export default routerProject