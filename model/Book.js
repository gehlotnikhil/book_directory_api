const mongoose  = require("mongoose")

const bookSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    url:{
        type:String,
        required: true
    },
    edition:{
        type:String,
        required: true
    }
})
module.exports = mongoose.model("Book",bookSchema)
