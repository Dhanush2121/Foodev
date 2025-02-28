import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('Your MongoDB Secret Key ').then(()=>console.log("DataBase Connected"));
}
