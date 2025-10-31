import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { NewsletterServiceModule } from './newsletter-service/newsletter.module';
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
    synchronize : true,
    logging : true,
    ssl : true ,
    poolErrorHandler(err) {
      throw new err;
    },

  }) , 
  NewsletterServiceModule
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
