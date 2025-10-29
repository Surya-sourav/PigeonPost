import { Column , Entity } from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";

@Entity()
export class SubscriberEntity extends BaseEntity{

    @Column({type : 'varchar' , length : 200 , unique : true , nullable : false})
    email : string;

    @Column({type : 'varchar' , length : 20 ,nullable : true})
    sname : string;

}