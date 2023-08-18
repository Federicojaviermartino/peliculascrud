import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PeliculasService {
    private apiUrl = 'https://www.rakuten.tv/es/lists/free-peliculas-gratis';

    async getAllPeliculas(): Promise<any> {
        const response = await axios.get(`${this.apiUrl}/peliculas`);
        return response.data;
    }

    async createPelicula(peliculaData: any): Promise<any> {
        const response = await axios.post(`${this.apiUrl}/peliculas`, peliculaData);
        return response.data;
    }

    async deletePelicula(id: number): Promise<void> {
        await axios.delete(`${this.apiUrl}/peliculas/${id}`);
    }
}

