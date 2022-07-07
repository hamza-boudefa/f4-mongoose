const mongoose=require('mongoose')
const connectDB=()=>{
    mongoose.connect("mongodb+srv://f4:1234@cluster0.a2heici.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log('db connected...')).catch((err)=>console.log(err))
}
module.exports=connectDB