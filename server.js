const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require('./config/database') //for connecting database

//handling uncaught exception
process.on("uncaughtException",(err)=>{   //when ever an error occurs in any part which is not define 
  console.log(`Error :${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
})


//config
dotenv.config({path:"backend/config/config.env"});

//connection to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });


//unhandled Promise rejection
process.on("unhandledRejection",err=>{
  console.log(`Error: ${err.message}`);
  console.log('Shutting down Server due to unhandled Promise');

  try {
    server.close();
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
  

// const app = require("./app");
// const cloudinary = require("cloudinary");
// const connectDatabase = require("./config/database");

// // Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// });

// // Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// // Connecting to database
// connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });

// // Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });