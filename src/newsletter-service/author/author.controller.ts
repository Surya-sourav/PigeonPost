import { Controller , Post , Get, Body, Param } from "@nestjs/common";
import { CreateAuthorDTO } from "./author.DTO";

@Controller('author')
export class AuthController{
    
    @Post('/create')
    async CreateAuthor(@Body() createAuthordto : CreateAuthorDTO)
    {
        // Invoke the Author Service to create the Author ! 
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