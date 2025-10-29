import Module from "module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    import : [TypeOrmModule.forFeature([])]
})