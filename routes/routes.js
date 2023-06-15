let express=require("express");
let router=express.Router();
let {getAllProducts,testingAllProducts}=require("../countrollers/countroller")
router.route("/").get(getAllProducts);
router.route("/testing").get(testingAllProducts);
module.exports=router;