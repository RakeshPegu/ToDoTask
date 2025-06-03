import { useState } from "react";
import { apiRequest } from "../lib/apiRequest";
import { Link } from "react-router-dom";

function Register(){
      const [error, setError] = useState('')
      const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async(e)=>{     
        
        try {
            setIsLoading(true)
            setError('')
            const formData = new FormData(e.target)  
            const email = formData.get('email')
            const username = formData.get('username')
            const password = formData.get('password') 
            const res = await apiRequest.post('/auth/register', {email,username, password})
            console.log(res) 
                 
        } catch (error) {
            console.log(error)
            setError(error?.response?.message?.data ||'Something went wrong')
            
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <div className=" bg-blue-300 h-[100vh] relative flex justify-center items-center">
            <div className="flex flex-col bg-gray-700 absolute top-[100px] shadow-2xl rounded-xl w-[93%] pb-8">
             <h1 className="text-2xl text-center h-[50px] rounded-tl-xl rounded-tr-xl bg-blue-50"> Register Form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-12 justify-center items-center">
                <input type="text" className="h-[40px] text-center bg-white w-[96%]" name="username" maxLength={15} placeholder="Enter your username" required/>
                <input type="email" name="email" className="h-[40px] text-center bg-white w-[96%]"  placeholder="Enter your email address" required/>
                <input type="password" name="password" className="h-[40px] text-center bg-white w-[96%]" placeholder="Enter your password" required/>
                <button type="submit" disabled={isLoading} className="bg-blue-600 h-[40px] w-[130px] rounded-2xl cursor-pointer hover:bg-blue-300 disabled:bg-blue-100"> Register here</button>
                <h3 className="text-center"> have an account? <Link to={'/login'} className="text-blue-600 text-xl"> Login here</Link></h3>
            </form>

            </div>
          
        </div>
    )
}
export default Register;