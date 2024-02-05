import mongoose, { Document, Schema } from 'mongoose';

export interface ICountry extends Document {
  name: string;
  imageUrl: string;
  numOfPlaces: number;
}

const CountrySchema = new Schema<ICountry>({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  numOfPlaces: {
    type: Number,
    required: true,
  },
});

export const Country = mongoose.model<ICountry>('Country', CountrySchema);
