const mongoose = require('mongoose');

const connectToDB= async ()=> {
    try {
        await mongoose
          .connect(
            "mongodb://localhost:27017/bookstore"
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
module.exports=connectToDB