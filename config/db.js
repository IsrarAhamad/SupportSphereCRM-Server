// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// const connectDB = async () => {
//   try {
//     console.log(process.env.MONGO_URI);
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const dns = require("dns");

// Force Node to use Google's DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;