const ErrorHandler = require('../utils/errorhander');

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //wrong Mongodb id Error
    if(err.name == "CastError"){  //if the id is invalid then it shows cast error and we handle it like this,
        const message = `Resource not found. Invalid:${err.path}`;
        err = new ErrorHandler(message,404);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    });

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        console.log(message ,"thatsit");
        err = new ErrorHandler(message, 400);

      }
    
      // Wrong JWT error
      if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again `;
        err = new ErrorHandler(message, 400);
      }
    
      // JWT EXPIRE error
      if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired, Try again `;
        err = new ErrorHandler(message, 400);
      }
    
      res.status(err.statusCode).json({
        success: false,
        message: err.message,
      });
};

