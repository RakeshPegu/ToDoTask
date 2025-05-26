import jwt from 'jsonwebtoken'
export const verification = async(req, res, next)=>{
    const token = req.cookies.token
    try {
        if(!token){
            return res.status(403).json({success:false, message:'not authenticated'})
        }
        jwt.verify(token, process.env.SECRET_KEY, async(err, payload)=>{
            if(err){
                return res.status(403).json({success:false , message:'Unauthorized'})
            }
            req.userId = payload.userId,
            next()
        })
        
    } catch (error) {
        console.log('jwt token verification error', error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}