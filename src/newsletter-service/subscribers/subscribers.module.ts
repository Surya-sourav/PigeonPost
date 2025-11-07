import { Module } from "@nestjs/common";
import { SubscriberEntity as Subscriber } from "../entities/subscriber.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubscriberRepository } from "./subscriber.repository";
import { SubscriiptionsEntity as Subscriptions } from "../entities/subscriptions.entity";

@Module({

    imports: [TypeOrmModule.forFeature([Subscriber , Subscriptions])],
    providers : [SubscriberRepository],
    exports : []
    
})

export class SubscriberModule {}