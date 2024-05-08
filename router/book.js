const express = require("express")
const router = express.Router()
const Book = require("../model/Book")
const bcrypt = require("bcryptjs")
const { body, validationResult } = require("express-validator")

router.get("/get", async (req, res) => {
    return res.send({ "say": "Hi" })
})

router.post("/", [
    body("book_name", "Please Enter a Book Name").exists(),
    body("description", "Please Enter a description").exists(),
    body("author", "Please Enter a author name").exists(),
    body("pages", "Please Enter a number of page").exists(),
    body("category", "Please Enter a category of book").exists(),
    body("language", "Please Enter a language of book").exists(),
    body("edition", "Please Enter a edition of book").exists(),
], async (req, res) => {
    const { book_name, description, author, pages, category, language, url, edition } = req.body;
    const error = validationResult(req)
    // after checking credential, if error occur then execute if statement
    if (!error.isEmpty()) {
        return res.status(403).json({ error: error.array() })
    }
    const b1 = new Book({
        book_name: req.body.book_name,
        description: req.body.description,
        author: req.body.author,
        pages: req.body.pages,
        category: req.body.category,
        language: req.body.language,
        edition: req.body.edition,
        url: req.body.url
    })

    try {
        const result = await b1.save();
        console.log(result)
        res.send(result)
    } catch (err) {
        console.log(err)
        return res.status(501).send({ "error": err })
    }

})

router.get("/", async (req, res) => {
    const result = await Book.find({})
    res.send(result)
})
router.get("/:id", async (req, res) => {
    const result = await Book.findById(req.params.id)
    res.send(result)
    
})
router.delete("/:id", async (req, res) => {
    const result = await Book.findByIdAndDelete(req.params.id)
    res.send(result)
    
})
router.put("/:id", async (req, res) => {
    let q1 = await Book.findById(req.params.id)
    if(!q1){
        return res.send("Book not found")
    }
    let book = {}
    if(req.body.book_name){
        book.book_name = req.body.book_name
    }
    if(req.body.description){
        book.description = req.body.description
    }
    if(req.body.author){
        book.author = req.body.author
    }
    if(req.body.pages){
        book.pages = req.body.pages
    }
    if(req.body.category){
        book.category = req.body.category
    }
    if(req.body.language){
        book.language = req.body.language
    }
    if(req.body.edition){
        book.edition = req.body.edition
    }
    if(req.body.url){
        book.url = req.body.url
    }
    if(book == {}){
        return res.status(407).send("Empty Content")
    }
    try{
        const result = await Book.findByIdAndUpdate(req.params.id,{$set:book},{$new:true});
        console.log(result)
        res.send(result)
    }catch(err){
        return res.send({error:err})
    }


})


module.exports = router;