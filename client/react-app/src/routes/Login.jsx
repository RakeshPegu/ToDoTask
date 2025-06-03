import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){
       const [error, setError] = useState('')
          const [isLoading, setIsLoading] = useState(false)
        const handleSubmit = async(e)=>{     
            
            try {
                setIsLoading(true)
                setError('')
                const formData = new FormData(e.target)  
                const email = formData.get('email')
                const password = formData.get('password') 
                const res = await apiRequest.post('/auth/login', {email, password})
                console.log(res) 
                     
            } catch (error) {
                console.log(error)
                setError(error?.response?.message?.data ||'Something went wrong')
                
            }finally{
                setIsLoading(false)
            } }
            return(
             <div className=" bg-blue-300 h-[100vh] relative flex justify-center items-center">
                <div className="flex flex-col bg-gray-700 absolute top-[100px]  shadow-2xl rounded-xl w-[93%] pb-8">
                <h1 className="text-2xl text-center h-[50px] rounded-tl-xl rounded-tr-xl bg-blue-50"> Login Form</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 pt-15 justify-center items-center">
                    <input type="email" name="email" className="h-[40px] text-center bg-white w-[96%]"  placeholder="Enter your email address" required/>
                    <input type="password" name="password" className="h-[40px] text-center bg-white w-[96%]" placeholder="Enter your password" required/>
                    <button type="submit" disabled={isLoading} className="bg-blue-600 h-[40px] w-[130px] rounded-2xl cursor-pointer hover:bg-blue-300 disabled:bg-blue-100"> Login here</button>
                    <h3 className="text-center"> Don't have an account? <Link to={'/register'} className="text-blue-600 text-xl"> Signup</Link></h3>
                </form>
            </div>          
        </div>
            );
    
}
export default Login;