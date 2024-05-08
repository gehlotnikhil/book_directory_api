const mongoose = require("mongoose")
const mongodbUrl = "mongodb://localhost:27017/test"

const connect = ()=>{
    console.log("1")
    mongoose.connect(mongodbUrl)
    .then(()=>{console.log("Connection Establised")})
    .catch(()=>{console.log("Connection not Established")})
    console.log("2")
}
module.exports = connect


