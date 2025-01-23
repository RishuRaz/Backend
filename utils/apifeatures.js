// class ApiFeatures {
//     constructor(query,queryStr){  //we passed querystr as a parameter to be used in the url of our api like ?keyword=anything here  {keyword : 'anything'} is querystr.
//         // console.log("--> ",querystr,"<--");
//         this.query = query,
//         this.querystr = queryStr
//     }

//     search(){
//         const keyword = this.queryStr.keyword ? {  //take the value from  user input and assign it to variable 'keyword'
//             name: {
//                 $regex: this.queryStr.keyword,
//                 $options: "i",
//             },
//         } : {};

//         console.log("keyword-> ",keyword);

//         this.query = this.query.find({...keyword})
//         console.log("thiss- ",this);
//         return this;
//     }

//     filter(){
//         console.log("filter start:-");
//         // const queryCopy = this.querystr // querystr ia an object so if we  modify it here it will affect the original object because in javascript every object is passed by reference
//         const queryCopy = {...this.queryStr}; //so by doing like this, it will  not affect the original object and make copy of original object .
        
//         console.log("before queryCopy:- ", queryCopy);

//         //removing some fields for category
//         // const removeFields = ["keyword","page","limit"];
//         const removeFields = ["keyword","page","limit"];

//         removeFields.forEach((key=>delete queryCopy[key]));
//         // console.log("after remvoing field : ",queryCopy); 

//         //for filtering pricing 
//         let queryStr = JSON.stringify(queryCopy);
//         queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        
//         console.log("after removing:- ",queryStr);
        
//         // this.query = this.query.find(queryCopy); //
//         this.query = this.query.find(JSON.parse(queryStr));
//         return this;
     
//     }

//     pagination(resultPerPage){
//         const currentPage = Number(this.queryStr.page) || 1;

//         const skip = resultPerPage * (currentPage - 1);

//         this.query = this.query.limit(resultPerPage).skip(skip);
//         return this;

//     }
// }

// module.exports = ApiFeatures;
class ApiFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search() {
      const keyword = this.queryStr.keyword
        ? {
            name: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          }
        : {};
  
      this.query = this.query.find({ ...keyword });
      return this;
    }
  
    filter() {
      const queryCopy = { ...this.queryStr };
      //   Removing some fields for category
      const removeFields = ["keyword", "page", "limit"];
  
      removeFields.forEach((key) => delete queryCopy[key]);
  
      // Filter For Price and Rating
  
      let queryStr = JSON.stringify(queryCopy);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  
      this.query = this.query.find(JSON.parse(queryStr));
  
      return this;
    }
  
    pagination(resultPerPage) {
      const currentPage = Number(this.queryStr.page) || 1;
  
      const skip = resultPerPage * (currentPage - 1);
  
      this.query = this.query.limit(resultPerPage).skip(skip);
  
      return this;
    }
  }
  
  module.exports = ApiFeatures;