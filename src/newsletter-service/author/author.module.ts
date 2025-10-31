import { Module } from "@nestjs/common";
import { AuthorEntity as Author} from "../entities/author.entity";
import { AuthorRepository } from "./author.repository";
import { AuthorService } from "./author.service";
import { AuthController } from "./author.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({

    imports : [TypeOrmModule.forFeature([Author])],
    providers : [AuthorService , AuthorRepository],
    controllers : [AuthController],
    exports : [AuthorRepository , AuthorService]
})

export class AuthorModule {}