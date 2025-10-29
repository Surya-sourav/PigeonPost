import { Controller , Post , Get , Param, Body, Delete } from "@nestjs/common";
import { CreateNewsletter } from "./newsletter.DTO";

@Controller('newsletter')
export class NewsletterController{

    @Post('/:id/create')
    async CreateNewsletter( @Param('id') id : any , @Body() createnewsletterDto : CreateNewsletter) {

        // Invoke the Newsletter Service to Create a new Newsletter based on the authorId

    }   

    @Delete('/:id/delete')
    async DeleteNewsletter ( @Param('id') id : any ){

        // Invoke the newsletter service to delete a particular newsletterid !

    }

}