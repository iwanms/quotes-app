import mongoose, { mongo } from "mongoose";

const conMongoDb = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default conMongoDb;
