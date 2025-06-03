import mongoose from "mongoose";
import { mailSender } from "./utility/mailSender.js";
const userSchema = new mongoose.Schema({
    
    username: {
        type : String,
        required:true
    },
    email: {
        type:String,
        unique:true

    },
    phoneNo: {
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    created_at: {
        type:Date,
        default: Date.now

    }
})
const otpSchema = mongoose.Schema({
    otp:{
        type: String,
        unique:true

    },
    email: {
        type: String,
        required:true,
        unique:true

    },
    created_at: {
        type:Date,
        default: Date.now,
        expires:60*5
    }
})
const taskSchema = mongoose.Schema({
    title: {
        type:String,
     },
    isCompeleted: {
        type:Boolean,
        default:0
    },
    description: {
        type: String,
    },
    startTime: {
        type:Date
    }, 
    endTime: {
        type:Date
    },
    created_at: {
        type: Date,
        default: Date.now,
        
    },
    authorId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }



})
const sendOtpVerificationEmail = async(otp, email)=>{
    console.log(otp)
    console.log(email)
    try {
        await mailSender(email,
            `<h1>Please confirm your OTP </h1>
             <h3> here is your OTP code:-> ${otp} </h3>`)      
        
        
    } catch (error) {
        console.log(error)
        
    }
}
otpSchema.pre('save', async function(next){
    console.log('new document save to database')
    
    console.log(this.email, this.otp)
    await sendOtpVerificationEmail(this.otp, this.email)    
    next()
})
const User = mongoose.model('User', userSchema)
const Otp = mongoose.model('Otp', otpSchema)
const Task = mongoose.model('Task', taskSchema)
export {User, Otp, Task}