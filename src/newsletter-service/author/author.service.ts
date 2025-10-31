import { Injectable } from "@nestjs/common";
import { AuthorRepository } from "./author.repository";
import { CreateAuthorRequest } from "./author.interface";

@Injectable()
export class AuthorService {

    constructor(private authorRepository : AuthorRepository)
    {}

    async CreateAuthor(createAuthorReq : CreateAuthorRequest) : Promise<any>{

    try{
        const Created = await this.authorRepository.CreateAuthor(createAuthorReq);
        
        return Created;
    }
    
    catch(error)
    {
        throw error;
    }
}

}