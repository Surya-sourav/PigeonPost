import { Entity , Column  } from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";

@Entity()
export class NewsletterEntity extends BaseEntity
{
    
    @Column({type : 'varchar' , length : 1000 , nullable : true})
    nlheader : string;

    @Column({type : 'varchar' , length : 10000 , nullable : true})
    nlbody : string;
    
    @Column({type : 'varchar' , length : 500 , nullable : true})
    nlsig : string;

    

}