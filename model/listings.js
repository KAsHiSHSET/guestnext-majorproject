const mongoose=require("mongoose");
//storing mongoose.schema as shorthand for schema
const Schema =mongoose.Schema;
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    price: Number,
    location:  String,
    images: {
        type:String,
        required:true,
        default:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        set:(v)=> v ===""?"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" : v,
    }, 
    country: String,
});
//creating a collection
const listing=mongoose.model("listing",listingSchema);
module.exports=listing