import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import cors from 'cors'
import taskRoute from './routes/task.js'
const app = express()
app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT || 5500
mongoose.connect(process.env.DATA_BASE_URL).then(()=>{
    console.log('conneted to database successfully')
}).catch(err=>{
    console.log('connection err', err)
})
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use('/api/v1/message', (req, res)=>{
    res.status(200).json({message:'HELLO THIS MESSAGE FROM BACKEND'})
})
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/task',taskRoute)
app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`)
})