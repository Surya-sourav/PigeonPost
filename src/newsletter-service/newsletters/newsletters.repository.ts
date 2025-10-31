import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { NewsletterEntity as Newsletter } from "../entities/newsletter.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class NewsletterRepository {

    constructor(@InjectRepository(Newsletter) private newsletterRepository : Repository<Newsletter>)
    {}

}