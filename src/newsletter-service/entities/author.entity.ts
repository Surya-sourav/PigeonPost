import { Entity , Column , OneToMany, ManyToMany} from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";
import { NewsletterEntity as Newsletter} from "./newsletter.entity";
import { SubscriberEntity as Subscriber } from "./subscriber.entity";

@Entity()
export class AuthorEntity extends BaseEntity{


    @Column({type : 'varchar' , length : 30 , nullable : false })
    author_name : string;

    @Column({type : 'varchar' , length : 300 , nullable : true})
    author_bio : string;

    @Column({type : 'varchar' , length : 400 , nullable : true})
    author_social : string;

    @Column({type : 'varchar' , length : 300 , nullable : true})
    author_signature : string;

    @OneToMany(()=> Newsletter , nl => nl.author)
    newsletters : Newsletter[]

    @ManyToMany(()=> Subscriber , subscriber => subscriber.authors )
    subscribers : Subscriber[]
}