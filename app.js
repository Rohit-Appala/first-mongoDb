const express = require("express")
const {connectToDb,getDb} = require('./db')

const app = express()

// db connection
let db
connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log("app listening on port number 3000")
        })
        db = getDb()
    }
})


//routes
app.get("/books",(requestObject,responseObject)=>{
    responseObject.send("Welcome")
})


export default app;