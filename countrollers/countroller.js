let productModel=require("../model/productSchema")

const getAllProducts=async(req,res)=>{
   let {name,company,price,sort,select,page}=req.query;
   let obj={}
   // regex A a is equle
   if(name){
      obj.name={$regex:name, $options:"i"};
   }
   if(company){
      obj.company={ $regex:company, $options:"i"};

   }
   let data= productModel.find(obj);
  
   if(sort){
      let fixed=sort.replace(","," ");
      data=data.sort(fixed);
   }
   
   if(select){
      // let selectFixed=select.replace(","," ");
      let selectFixed=select.split(",").join(" ");
      data=data.select(selectFixed);
   }
   if(page){
      // let pageFixed=page.replace(","," ");
      let selectFixed=page.split(",").join(" ");
      // data=data.page(selectFixed);
   }
   let pages=Number(req.query.page)||1;
   let limit=Number(req.query.limit)||3;
   console.log(page,limit)
   let skip=(pages-1)*limit;

    data=data.find().skip(skip).limit(limit);
    let myData=await data;
   res.status(200).json({myData})
}
const testingAllProducts=async(req,res)=>{
   try{
      // let data= await productModel.find({price:{$gt:1000}}).count();
      // let data= await productModel.find().skip((req.query.page-1)*3).limit(req.query.limit);
      // console.log(req.query.data)
      let data= await productModel.find({ name: { $regex: `(?i)${req.query.data}(?-i)` } })


       res.status(200).json({data})
   }catch(err){
      res.send(err)
   }
   // let data= await productModel.find(req.query).sort("company name");
   // let data= await productModel.find(req.query).select("company name");
 }

 module.exports={getAllProducts,testingAllProducts}