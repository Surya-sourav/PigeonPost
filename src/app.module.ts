import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthorEntity as Author } from './newsletter-service/entities/author.entity';
import { SubscriberEntity as Subscriber } from './newsletter-service/entities/subscriber.entity';
import { NewsletterEntity as Newsletter } from './newsletter-service/entities/newsletter.entity';

import { AuthorModule } from './newsletter-service/author/author.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath : '.env',
    isGlobal : true
  }) ,
  TypeOrmModule.forRoot({
    type : 'postgres',
    host : process.env.PGHOST,
    port : 5432,
    password : process.env.PGPASSWORD,
    username : process.env.PGUSER,
    database : process.env.PGDATABASE,
    entities : [Author , Subscriber , Newsletter],
    synchronize : true,
    logging : true,
    ssl : true ,
  }) , 

  AuthorModule
],
  controllers: [AppController ],
  providers: [AppService ],
  
})
export class AppModule {}
