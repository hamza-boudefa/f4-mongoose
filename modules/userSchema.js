const mongoose=require('mongoose')

const {Schema}=mongoose;

const userSchema= new Schema({
    name:{type:String},
    age:Number,
    classes:[{type:String}]
})


module.exports=mongoose.model("user", userSchema)