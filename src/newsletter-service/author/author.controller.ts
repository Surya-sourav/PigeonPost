import { Controller , Post , Get, Body, Param } from "@nestjs/common";
import { CreateAuthorDTO } from "./author.interface";
import { AuthorService } from "./author.service";

@Controller('author')
export class AuthController{

    constructor(private readonly AuthorService : AuthorService){

    }

    
    @Post('/create')
    async CreateAuthor(@Body() createAuthordto : CreateAuthorDTO)
    {
        // Invoke the Author Service to create the Author ! 

        const creation = await  this.AuthorService.CreateAuthor(createAuthordto);

        console.log('Created Author Successfully' , creation);
        return {
            success : true,
            creation
        }
    }

    @Get('/:id')
    async GetAuthorById( @Param('id') id : string){

        // Invoke the Author Service to Fetch the AuthorId 
        const author = await this.AuthorService.GetAuthorById(id);
        return {
            fetched : true,
            author
    };

    }

    @Get('/:id/subscribers')
    async GetSubscribersPerAuthor( @Param('id') id : any){

        // A Paginated API that would call the Subscriber Servcie to fetch all the Subscribers based on this AuthorID

        
    }


}