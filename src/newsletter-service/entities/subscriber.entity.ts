import { Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { BaseEntity } from "../base-entity";
import { SubscriiptionsEntity as Subscriptions } from "./subscriptions.entity";

@Entity()
export class SubscriberEntity extends BaseEntity{

    @OneToMany(()=> Subscriptions ,(s)=> s.subscriber)
    subscriptions : Subscriptions[];

    @Column({type : 'varchar' , length : 200 , nullable : false})
    email : string;

    @Column({type : 'varchar' , length : 20 ,nullable : true})
    sname : string;

 

}