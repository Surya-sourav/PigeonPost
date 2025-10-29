import Module from "module";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    import : [TypeOrmModule.forFeature([])]
})