import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);

    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
