import mongoose, { Document, Schema } from 'mongoose';

export interface IPlaces extends Document {
  name: string;
  imageUrl: string;
  country: string;
  description: DayInfo[];
  cost: number;
  reviews: number;
  numOfDaysToStay: number;
}

export interface DayInfo {
  dayHeading: string;
  dayContent: string;
}

const PlacesSchema = new Schema<IPlaces>({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: [
      {
        dayHeading: {
          type: String,
          required: true,
        },
        dayContent: {
          type: String,
          required: true,
        },
      },
    ],
    required: true, // Ensure entire description array is required
  },
  cost: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  numOfDaysToStay: {
    type: Number,
    required: true,
  },
});

export const Places = mongoose.model<IPlaces>('Places', PlacesSchema);
