import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pelicula } from './models/pelicula.model';

@Injectable()
export class PeliculasService {
    constructor(@InjectModel(Pelicula.name) private peliculaModel: Model<Pelicula>) { }

    async getAllPeliculas(): Promise<Pelicula[]> {
        return this.peliculaModel.find().exec();
    }

    async createPelicula(peliculaData: any): Promise<Pelicula> {
        const pelicula = new this.peliculaModel(peliculaData);
        return pelicula.save();
    }

    async deletePelicula(id: string): Promise<void> {
        await this.peliculaModel.findByIdAndRemove(id);
    }
}

