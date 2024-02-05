import { Country } from './src/models/countryModel';
import { CountryData } from './src/data/countryData';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Places } from './src/models/placesModel';
import { PlacesData } from './src/data/placesData';

dotenv.config({
  path: __dirname + '/.env',
});

// db connection
mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err.message));

const importPlacesData = async () => {
  try {
    await Places.insertMany(PlacesData);
    console.log('Data imported');
  } catch (error) {
    console.log(error);
    console.log('data not imported');
  }
};

const deletePlacesData = async () => {
  try {
    await Places.deleteMany();
    console.log('Data deleted');
  } catch (error) {
    console.log('data not deleted');
  }
};

if (process.argv[2] == '-d') deletePlacesData();
else importPlacesData();

// const importCountryData = async () => {
//   try {

//     await Country.insertMany(PlacesData)
//     console.log('Data imported');
//   } catch (error) {
//     console.log('data not imported');
//   }
// };
// const deleteCountryData = async () => {
//   try {
//     await Country.deleteMany();
//     console.log('Data deleted');
//   } catch (error) {
//     console.log('data not deleted');
//   }
// };
// if (process.argv[2] == '-d') deleteCountryData();
// else importCountryData();
