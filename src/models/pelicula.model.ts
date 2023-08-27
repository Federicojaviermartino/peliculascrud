import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pelicula extends Document {
    @Prop()
    titulo: string;

    @Prop()
    director: string;

    @Prop()
    año: number;

}

export const PeliculaSchema = SchemaFactory.createForClass(Pelicula);
