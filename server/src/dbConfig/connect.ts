import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected Successfully');
    });

    connection.on('error', (err: Error) => {
      console.log(
        'Something goes wrong. Please make sure that MongoDB is running' + err
      );
      process.exit();
    });
  } catch (error) {
    console.log('Something goes wrong');
    console.log(error);
  }
};
