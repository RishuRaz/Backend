// const mongoose = require('mongoose');
// username: cc11 , password: cartel123

const mongoose = require('mongoose');


// mongodb://localhost:27017/moti-database
// mongodb+srv://classy123:classy123@cluster0.udnfppb.mongodb.net/classy?retryWrites=true&w=majority&appName=Cluster0
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((err) => {   //here we can remove catch because we already handle the error in server.js file .
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectDatabase;


// const connectDatabase = ()=>{
//     mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{           // mongoose.connect("mango://localhost:27017/Ecommerce",{})
//         console.log(`Mongodb connected with server: ${data.connection.host}`);
    
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// module.exports = connectDatabase;

//---///

// const mongoose = require('mongoose');
// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true }).then((data) => {
//         console.log(`MongoDB connected with server: ${data.connection.host}`);
//     }).catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });
// }

// module.exports = connectDatabase;



// const mongoose = require('mongoose');
// mongoose.connect("mango://localhost:27017/Ecommerce",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then()=>{
    
// };
// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;