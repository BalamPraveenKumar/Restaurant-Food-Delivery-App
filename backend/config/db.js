import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://praveen:Praveen123@cluster0.pnxjg9q.mongodb.net/food-del?retryWrites=true&w=majority')
        .then(() => console.log("DB connected"));
}