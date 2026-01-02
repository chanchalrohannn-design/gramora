const mongoose=require('mongoose')

const proSchema=mongoose.Schema({
    productImage:String,
    productTitel:String,
    productPrice:String,


}
)
module.exports=mongoose.model("cropes",proSchema);