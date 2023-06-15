require("dotenv").config();
let productModel=require("./model/productSchema");
let connectDB=require("./db/connctions");
let ProductJson=require("./Product.json")

let start=async()=>{
  try{
     await connectDB(process.env.MONGODB_URI);
     let a=await productModel.create(ProductJson);
     console.log("success",a);
  }
  catch(err){
     console.log(err);
  }
}
start();