import mongoose from "mongoose";

export const dbConnection =()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName:"bgi_blog_web",
  }).then(()=>{
    console.log("Connected to database!");
  }).catch(err=>{
    console.log(`some error occured while connecting to database:${err}`);
  })
};