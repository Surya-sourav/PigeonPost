import { Column , Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";
import { AuthorEntity as Author } from "./author.entity";

@Entity()
export class SubscriberEntity extends BaseEntity{

    @Column({type : 'varchar' , length : 200 , nullable : false})
    email : string;

    @Column({type : 'varchar' , length : 20 ,nullable : true})
    sname : string;

    @ManyToOne(() => Author , authors => authors.subscribers)
    @JoinColumn({name : 'author_id'})
    author : Author

}