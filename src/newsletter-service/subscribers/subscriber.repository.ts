import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { SubscriberEntity as Subscriber} from "../entities/subscriber.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SubscriberRepository{

    constructor(@InjectRepository(Subscriber) private subsRepository : Repository<Subscriber>)
    {}


    async getSubscribersofAuthor() : Promise<any> {



    }

}