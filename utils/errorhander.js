// class ErrorHander extends Error {           //ErrorHander is inhereited from Error.
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode = statusCode
        
//         Error.captureStackTrace(this,this.constructor);
//     }
// }

// module.exports = ErrorHander;
class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);

    }
    
}

module.exports = ErrorHandler