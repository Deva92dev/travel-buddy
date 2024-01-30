import mongoose from 'mongoose';
import { log } from './logger';

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      log.info('MongoDB is connected successfully');
    });
    connection.on('error', (err: Error) => {
      log.error(
        'Something goes wrong. Please make sure that MongoDB is running' + err
      );
      process.exit();
    });
  } catch (error) {
    console.log('Something goes wrong');
    console.log(error);
  }
};
