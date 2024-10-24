import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to the database ', error);
  }
};

export default connectDB;
