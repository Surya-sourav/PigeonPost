import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthorModule } from "./author/author.module";
import { SubscriberModule } from "./subscribers/subscribers.module";
import { NewsletterModule } from "./newsletters/newsletters.module";

@Module({

    imports : [AuthorModule , SubscriberModule , NewsletterModule],

})

export class NewsletterServiceModule{}