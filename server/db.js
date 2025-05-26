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
    otp:Number,
    authorId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } ,
    email: {
        type: String,
        required:true,
        unique:true

    },
    expiration: {
        type:Date,
        default: Date.now + 6000
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
    timePeriod: {
        type: String
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
    try {
        await mailSender(email, "Verification Email",
			`<h1>Please confirm your OTP </h1>
             <p> here is your OTP code:-> ${otp} </p>`)      
        
        
    } catch (error) {
        console.log(error)
        
    }
}
otpSchema.pre('save', async(next)=>{
    if(this.isNew){
        await sendOtpVerification(this.email, this.otp)
    }
    next()
})
const User = mongoose.model('User', userSchema)
const Otp = mongoose.model('Otp', otpSchema)
const Task = mongoose.model('Task', taskSchema)
export {User, Otp, Task}