import { Column , Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";
import { AuthorEntity as Author } from "./author.entity";

@Entity()
export class SubscriberEntity extends BaseEntity{

    @Column({type : 'varchar' , length : 200 , nullable : false})
    email : string;

    @Column({type : 'varchar' , length : 20 ,nullable : true})
    sname : string;

    @ManyToMany(() => Author , authors => authors.subscribers)
    @JoinTable({name : 'subscriber_authors'})
    authors : Author

}