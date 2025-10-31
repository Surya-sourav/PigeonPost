import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { AuthorEntity as Author } from "../entities/author.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAuthorRequest } from "./author.interface";

@Injectable()
export class AuthorRepository{

    constructor(@InjectRepository(Author) 
    private authorRepository : Repository<Author>)
    {}

    async CreateAuthor(authorDetails : CreateAuthorRequest ) : Promise<CreateAuthorRequest>
    {   
        try {
            await this.authorRepository.create({
                author_name : authorDetails.author_name,
                author_bio : authorDetails.author_bio,
                author_signature : authorDetails.author_signature,
                author_social : authorDetails.author_socials,
            })

            return authorDetails
        }
        catch(error){
            return error;
        }
    }

    async GetAuthorById(id : string) : Promise<Author>{

        const author = await this.authorRepository.findOne({
                where : {
                    id 
                }
        })

        if(!author){ throw new Error('Author Not Found !'); }

        return author ;
    }

}