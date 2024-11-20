import mongoose, { connect } from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return; // udah terkoneksi
  try {
    await mongoose.connect(process.env.URI_DATABASE);
    console.log("database connection");
  } catch (error) {
    console.log("database connection error", error);
  }
}

export default connectDB;
