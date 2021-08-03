import { Router } from "express";
import {CreateUsersController} from "./useCases/createUsers/createUsersController"

const router = Router()

const createUsersController = new CreateUsersController()



router.post("/users",createUsersController.handle);

export {router}

