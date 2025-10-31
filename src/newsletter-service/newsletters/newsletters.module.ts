import { Module } from "@nestjs/common";
import { NewsletterEntity as Newsletter } from "../entities/newsletter.entity";
import { NewsletterController } from "./newsletter.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewsletterRepository } from "./newsletters.repository";

@Module({

    imports : [ TypeOrmModule.forFeature([Newsletter])],
    controllers : [NewsletterController], 
    providers : [NewsletterRepository],
    exports : []
})
export class NewsletterModule {}