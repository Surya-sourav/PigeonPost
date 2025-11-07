import { Entity, Column , JoinColumn, ManyToOne, Unique, Index } from "typeorm";
import { BaseEntity } from "../base-entity";
import { AuthorEntity } from "./author.entity";
import { SubscriberEntity } from "./subscriber.entity";


@Entity({name : 'subscriptions'})
@Unique(['author' , 'subscriber'])
export class SubscriiptionsEntity extends BaseEntity{

    @ManyToOne(()=> AuthorEntity , (author)=> author.subscriptions , {
        nullable : false,
        onDelete : "CASCADE"
    })
    @JoinColumn({name : 'author_id'})
    @Index()
    author : AuthorEntity;

    
    // Many to One Relationship with the Subscriber Entity 
    @ManyToOne(()=> SubscriberEntity , (subscriber)=> subscriber.subscriptions , {
        nullable : false,
        onDelete : 'CASCADE',
    })
    @JoinColumn({name : 'subscriber_id'})
    @Index()
    subscriber : SubscriberEntity;
    
}