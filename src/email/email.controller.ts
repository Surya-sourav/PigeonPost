import { Post , Controller } from "@nestjs/common";


@Controller()
export class EmailController{

    @Post('/send-email')
    async sendEmail()
    {
        
    }

}