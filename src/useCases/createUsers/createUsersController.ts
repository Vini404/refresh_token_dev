import { Request, Response } from "express";
import { CreateUsers } from "./createUsers";

class CreateUsersController{
    async handle(request:Request,response:Response){
        
        const {name,username,password} = request.body
        const createUsers = new CreateUsers()
        if(!name || !username || !password){

          return response.status(204)

        }

        

        const user =  await createUsers.execute({
            username,
            name,
            password
        })

        console.log(user)
        return response.json(user)
    }
}
export {CreateUsersController}

    