const  mongoose = require("mongoose")
const connectDB = (url)=>{
    console.log("connect db")
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports =connectDB