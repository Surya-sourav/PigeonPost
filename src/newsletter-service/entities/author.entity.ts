import { Entity , Column , PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { BaseEntity } from "../newsletter.base-entity";


@Entity()
export class AuthorEntity extends BaseEntity{


    @Column({type : 'varchar' , length : 30 , nullable : false })
    author_name : string;

    @Column({type : 'varchar' , length : 300 , nullable : true})
    author_bio : string;

    @Column({type : 'varchar' , length : 400 , nullable : true})
    author_social : string;


}