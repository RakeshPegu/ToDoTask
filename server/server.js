import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
const app = express()
app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT || 5500
mongoose.connect(process.env.DATA_BASE_URL).then(()=>{
    console.log('conneted to database successfully')
}).catch(err=>{
    console.log('connection err', err)
})
app.use('/api/auth/v1',authRouter)
app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`)
})