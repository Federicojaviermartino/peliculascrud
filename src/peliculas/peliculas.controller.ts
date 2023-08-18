import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('peliculas')
@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly peliculasService: PeliculasService) { }

    @Get()
    async getAllPeliculas(): Promise<any> {
        return this.peliculasService.getAllPeliculas();
    }

    @Post()
    async createPelicula(@Body() peliculaData: any): Promise<any> {
        return this.peliculasService.createPelicula(peliculaData);
    }

    @Delete(':id')
    async deletePelicula(@Param('id') id: number): Promise<void> {
        return this.peliculasService.deletePelicula(id);
    }
}

