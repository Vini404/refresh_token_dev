import {client} from "../../prisma/client"
import {hash} from "bcryptjs"

interface IUserRequest {
    name: string;
    password: string;
    username: string;
}

class CreateUsers {

    async execute({name,username,password}:IUserRequest){


       
        const userAlreadyExists = await client.user.findFirst({
            where:{
                username
            }
        })

        if(userAlreadyExists){

            throw new Error("User already exists")
  
            
        }

        const passwordHash = await hash(password,8)

        const user = await client.user.create({
            data:{
                name,
                username,
                password:passwordHash,
            }
        })


        return user
    }
}

export {CreateUsers}