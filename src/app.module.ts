import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://federicojaviermartino:Elefantes30.@cluster0.onswtba.mongodb.net/', {
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController, PeliculasController],
  providers: [AppService, PeliculasService],

})
export class AppModule { }
