import { Entity , Column, ManyToOne, JoinColumn  } from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";
import { AuthorEntity as Author } from "./author.entity";

@Entity()
export class NewsletterEntity extends BaseEntity
{
    
    @Column({type : 'varchar' , length : 1000 , nullable : true})
    nlheader : string;

    @Column({type : 'varchar' , length : 10000 , nullable : true})
    nlbody : string;
    
    @Column({type : 'varchar' , length : 500 , nullable : true})
    nlsig : string;

    @ManyToOne(()=> Author , author => author.newsletters)
    @JoinColumn({name : 'id'})
    author : Author

}