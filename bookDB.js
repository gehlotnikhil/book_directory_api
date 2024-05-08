require("dotenv").config()
const connectDB = require("./database/connect")
const bookJson = require("./bookDB.json")
const book = require("./model/Book")

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await book.deleteMany();
        await book.create(bookJson);
        console.log("Success")
    }catch(error){
        console.log(error)
}}
start()
