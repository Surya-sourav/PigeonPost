import { Entity , Column , OneToMany, ManyToMany} from "typeorm";
import { BaseEntity } from "../base-entity";
import { NewsletterEntity as Newsletter} from "./newsletter.entity";
import { SubscriberEntity as Subscriber } from "./subscriber.entity";
import { SubscriiptionsEntity as Subscriptions } from "./subscriptions.entity";

@Entity()
export class AuthorEntity extends BaseEntity{

    @Column({type : 'varchar' , length : 30 , nullable : false })
    author_name : string;

    @Column({type : 'text' , nullable : true})
    author_bio : string;

    @Column({type : 'jsonb' , nullable : true})
    author_social : string;

    @Column({type : 'text' , nullable : true})
    author_signature : string;

    @Column({type : 'varchar' , unique : true})
    author_email : string;


    @OneToMany(()=> Subscriptions , s => s.author)
    subscriptions : Subscriptions[];

    
    @OneToMany(()=> Newsletter , nl => nl.author)
    newsletters : Newsletter[]

}