import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pelicula extends Document {
    @Prop()
    titulo: string;

    @Prop()
    director: string;

}

export const PeliculaSchema = SchemaFactory.createForClass(Pelicula);
