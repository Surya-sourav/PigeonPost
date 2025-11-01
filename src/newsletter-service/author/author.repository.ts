import { Auth, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { AuthorEntity as Author } from "../entities/author.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAuthorDTO } from "./author.interface";

@Injectable()
export class AuthorRepository{

    constructor(@InjectRepository(Author) 
    private authorRepository : Repository<Author>)
    {}

    async CreateAuthor(authorDetails : CreateAuthorDTO ) : Promise<Author>
    {   
       
            const new_author = this.authorRepository.create({
                author_name : authorDetails.author_name,
                author_bio : authorDetails.author_bio,
                author_signature : authorDetails.author_signature,
                author_social : authorDetails.author_social,
            })

            return this.authorRepository.save(new_author);
        
    }

    async GetAuthorById(id : string) : Promise<any>{

        const author = await this.authorRepository.findOne({
            where : {id}
        });

        if(!author){ throw new Error('Author Not Found !'); }
        
        return author;
    }

}