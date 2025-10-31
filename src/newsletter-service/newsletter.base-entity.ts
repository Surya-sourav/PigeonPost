import { PrimaryGeneratedColumn , DeleteDateColumn , CreateDateColumn , UpdateDateColumn, Entity } from "typeorm";
import { Injectable } from "@nestjs/common";
import { BaseEntity  as TypeOrmBaseEntity } from "typeorm";

@Entity()
@Injectable()
export abstract class BaseEntity extends TypeOrmBaseEntity {

    @PrimaryGeneratedColumn()
    id : string;

    @CreateDateColumn({type : 'timestamp' , default:() => 'CURRENT_TIMESTAMP'})
    createdAt : Date;

    @UpdateDateColumn({type : 'timestamp' , default:()=> 'CURRENT_TIMESTAMP'})
    updatedAt : Date;

    @DeleteDateColumn({type : 'timestamp' , default:()=> 'CURRENT_TIMESTAMP' })
    deletedAt : Date;

}
