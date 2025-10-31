import { Controller , Post , Get, Body, Param } from "@nestjs/common";
import { CreateAuthorDTO, CreateAuthorRequest } from "./author.interface";
import { AuthorService } from "./author.service";

@Controller('author')
export class AuthController{

    constructor(private AuthorService : AuthorService){

    }

    
    @Post('/create')
    async CreateAuthor(@Body() createAuthordto : any)
    {
        // Invoke the Author Service to create the Author ! 

        const creation = this.AuthorService.CreateAuthor(createAuthordto);
        return {
            success : true,
            creation
        }
    }



    @Get('/:id')
    async GetAuthorById( @Param('id') id : any){

        // Invoke the Author Service to Fetch the AuthorId 

    }

    @Get('/:id/subscribers')
    async GetSubscribersPerAuthor( @Param('id') id : any){

        // A Paginated API that would call the Servcie to fetch all the Subscribers based on this AuthorID
    }


}