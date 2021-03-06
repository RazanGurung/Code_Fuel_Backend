const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectDB = async () => {
    const conn = await mongoose.connect(
    process.env.MONGO_URI,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,});

    console.log(`MongoDB connected to : ${conn.connection.host}`);
};
module.exports = connectDB;