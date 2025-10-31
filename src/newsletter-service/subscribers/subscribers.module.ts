import { Module } from "@nestjs/common";
import { SubscriberEntity as Subscriber } from "../entities/subscriber.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({

    imports: [TypeOrmModule.forFeature([Subscriber])],
    providers : [],
    exports : []
    
})

export class SubscriberModule {}