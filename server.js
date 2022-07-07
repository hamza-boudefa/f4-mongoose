
// 1. import express
const express=require('express')
const connectDB = require('./config/connectDB')
const user = require('./modules/UserSchema')

// 2.create express app
const app=express()

connectDB()

const addUser=async()=>{
    const amine=new user({name:"amine",age:25,classes:["js","css","ydasker"]})
    await amine.save()
}

// addUser()

const addUser2=async()=>{
    const mouna=new user({name:"mouna",age:22,classes:["dormir","dormiirr","tmangi"],lastname:"khorma"})
    await mouna.save()
}

addUser2()
const updateUser=async()=>{
    await user.findByIdAndUpdate("62c7288b27051f849b3b1930",{$set:{name:"hamza"}})
}
// updateUser()

const deleteUser=async()=>{
    await user.findByIdAndDelete('62c7288b27051f849b3b1930')
}
deleteUser()
// 3. port

const port=4000

// 4. listning

app.listen(port,(err)=>err?console.log(err):console.log(`app listning on ${port}`))

