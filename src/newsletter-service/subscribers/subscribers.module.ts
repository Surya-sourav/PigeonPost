import { Module } from "@nestjs/common";
import { SubscriberEntity as Subscriber } from "../entities/subscriber.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubscriberRepository } from "./subscriber.repository";

@Module({

    imports: [TypeOrmModule.forFeature([Subscriber])],
    providers : [SubscriberRepository],
    exports : []
    
})

export class SubscriberModule {}