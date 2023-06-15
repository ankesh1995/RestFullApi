let mongoose=require("mongoose");
const connectDB=async()=>{
    console.log("db is connected")
   return mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    })

}

module.exports=connectDB
