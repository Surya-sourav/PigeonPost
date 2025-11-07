import { Module } from "@nestjs/common";
import { AuthorEntity as Author} from "../entities/author.entity";
import { AuthorRepository } from "./author.repository";
import { AuthorService } from "./author.service";
import { AuthController } from "./author.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubscriiptionsEntity as Subscriptions} from "../entities/subscriptions.entity";

@Module({

    imports : [TypeOrmModule.forFeature([Author , Subscriptions])],
    controllers : [AuthController],
    providers : [AuthorService , AuthorRepository],
    exports : [ AuthorService]
})

export class AuthorModule {}