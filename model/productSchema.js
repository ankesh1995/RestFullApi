let mongoose=require("mongoose");
let productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price most be provide"]
    },
    featured:{
        type:Boolean,
        default:true,
    },
    rating:{
        type:Number,
        default:3.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        // enum:{
        //     values:["apple","vivo","nokia","samsung","mi"],
        //     message:`${value} is not supported`

        // }
    }
})

let productModel=mongoose.model("Product",productSchema);
module.exports=productModel;