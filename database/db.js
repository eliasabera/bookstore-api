const mongoose = require('mongoose');

const connectToBB= async ()=> {
    try {
        await mongoose
          .connect(
            process.env.MongooseURL || "mongodb://localhost:27017/bookstrore"
          )
          .then(() => {
            console.log("connected");
          })
          .catch((e) => console.log(e));
    }
    catch (e) {
        if(e) throw e
    }
}
module.exports=connectToBB