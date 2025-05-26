import nodemailer from 'nodemailer'
export const mailSender = async(email, body)=>{
      try {
        console.log('body', body)
        const transport = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASS
                
            }
        })
        transport.sendMail({
            from:process.env.EMAIL,
            to:email,
            subject:"User verification",
            html:body
        }, (err)=>{
            if(err){
                console.log('this mail sender error', err)
            }
            console.log('mail sent successfully')
        })

        
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
        
    }
}
