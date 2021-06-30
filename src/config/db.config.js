const mongoose = require('mongoose');
require('dotenv').config();
const stringConnect = process.env.STRING_CONNECTION;
const connectDB = async () => {
    try {
        await mongoose.connect(stringConnect, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("DB Conect succes");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;