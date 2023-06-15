let express=require("express");
let app=express();
require("dotenv").config();
const connectDB=require("./db/connctions")
let PORT=process.env.PORT||4000
let products_routes=require("./routes/routes");
app.use("/api",products_routes)
// app.get("/",(req,res)=>{
//     res.status(200).json({message:"hello"});
// });
server();
async function server(){
    try{
        await connectDB();
        app.listen(PORT,()=>console.log("server start...."));
    }catch(err){
        console.log(err);
    }  
}
