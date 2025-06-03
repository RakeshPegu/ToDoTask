import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import otpGenerator  from 'otp-generator'
import { Otp, User } from '../db.js'
export const register = async(req, res)=>{
    const {email, username, password, otp} = req.body
    try {
        if(!email || !username ||!password ||!otp){
            return res.status(400).json({success:false, message:"All the fields are mandatory "})
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(401).json({success:false, message:'Email address already exist'})
        }
        
        const response =await Otp.findOne({email})
        console.log('this is the response', typeof response.otp)
        console.log( typeof otp)
        if(!response){
            return res.status(401).json({success:false, message:"Otp is not valid"})
        }else if(otp !== response.otp){
            return res.status(401).json({success:false, message:"Otp is not valid"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({email, username, password:hashedPassword})
        res.status(200).json({success:false, message:'Registered successfully'})

        
    } catch (error) {
        console.log('error', error)
        res.status(500).json({success:false, message:"Something went wrong"})
    }
}
export const OtpVerification = async(req, res)=>{
    const {email} = req.body
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(403).json({message:'User already exist'})

        } 
            let otp = otpGenerator.generate(6, {
            specialChars:false,
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false
        })
        const result = await Otp.findOne({otp:otp})
        while(result){
            otp = otpGenerator.generate(6, {
                specialChars:false,
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false
            }
                
            )


        }
        console.log(typeof otp)
        const otpPayload = {email, otp}
        console.log(otpPayload)
        const otpBody = await Otp.create(otpPayload)
        console.log(otpBody)
        res.status(200).json({success:true, message:"Otp send successfully", otp})     


        
    } catch (error) {
        console.log('Otp sender error', error)
        
    }
}
export const login = async(req, res)=>{
    const {email, password} = req.body
    try {
        if(!email ||! password){
            return res.status(400).json({success:false, message:'All the fields are mandatory'})
        }
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(404).json({sucess:false, message:'Email address already exist'})
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return res.status(403).json({success:false, message:'Wrong password'})
        }
        const age = 1000*60*60*24*7
        const token = jwt.sign(req.userId = user.id,process.env.SECRET_KEY, {expiresIn:age} )
        res.cookie('token', token, {maxAge:age, secure:false}).status(200).json({success:true, message:'Logged in successfully'})
        
        
    } catch (error) {
        console.log('login errror', error)
        console.log('something went')
        
    }
}
export const logout = async(req, res)=>{
    try {
        res.clearCookie('token').json({ success:true, message:"Logged out successfully"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}