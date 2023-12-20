const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connection Build: ${connect.connection.host}`);
  } catch (error) {
    console.log(error, "Error in connecting Mongoose");
    process.exit(1);
  }
};
module.exports = connectDb;
