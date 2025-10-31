import { Module } from "@nestjs/common";
import { AuthorEntity as Author} from "../entities/author.entity";
import { AuthorRepository } from "./author.repository";
import { AuthorService } from "./author.service";
import { AuthController } from "./author.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({

    imports : [TypeOrmModule.forFeature([Author])],
    controllers : [AuthController],
    providers : [AuthorService , AuthorRepository],
    exports : [ AuthorService]
})

export class AuthorModule {}