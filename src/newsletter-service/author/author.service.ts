import { Injectable } from "@nestjs/common";
import { AuthorRepository } from "./author.repository";

@Injectable()
export class AuthorService {

    constructor(private authorRepository : AuthorRepository)
    {}

    async CreateAuthor(createAuthordto : any) : Promise<any>{

        try
        {
            const Created = await this.authorRepository.CreateAuthor(createAuthordto);
        
            return Created;
        }
        
        catch(error)
        {
            throw error;
        }
    }

    async GetAuthorById(id : any) : Promise<any>{

        const author = await this.authorRepository.GetAuthorById(id);

        return author;

    }

}