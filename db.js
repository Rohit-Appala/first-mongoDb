const {MongoClient} = require("mongodb")

let dbConnection;
module.exports={
    connectToDb: (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/bookstore')// url copied from local computer from mongoDB compass
          .then((client)=>{
            dbConnection=client.db()
            return cb() // call back function
          })
          .catch(err=>{
            console.log(err)
            return cb(err) // call back function
          })
    },//establish a connection to database 

    getDb:()=> dbConnection //return our database connection after we have already connected to it and that database will allow us to communicate with database 
}