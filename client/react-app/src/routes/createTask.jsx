import { useState } from "react";

function CreateTask (){
    const handleSubmit = async(e)=>{
        const [error, setError] = useState('')
        try {
            const formData = new FormData(e.target)
            const title = formData.get('title')
            const description = formData.get('description')
            const hours  = formData.get('hours')
            
        } catch (error) {
            setError(error?.response?.message?.data || 'Something went wrong')
            
        }
    }
    return (
        <div className="bg-green-300 h-[100vh] relative flex flex-col items-center ">
            <div className="absolute top-[100px] bg-blue-200 w-[90%] pb-[40px] shadow-2xl rounded-2xl ">        
            <h1 className="text-center text-3xl pt-[10px] ">
                Create a task 
            </h1>
            <form className="flex flex-col gap-5 justify-center pt-[40px] items-center" onSubmit={handleSubmit}>
                <input type="text" name="title" maxLength={10} className="text-center cursor-pointer h-[50px] bg-gray-100 focus:bg-white  w-[93%]" placeholder="Enter the name of the card"/>
                <textarea name="description" maxLength={100} className="text-center w-[93%]   bg-gray-100 focus:bg-white cursor-pointer h-[100px]" placeholder="write about the task"/>
                <input type="number" className="w-[93%]  bg-gray-100 h-[35px] focus:bg-white text-center cursor-pointer" name="hours" placeholder="Enter how many hours" />
                <button className="bg-blue-900 h-[40px] cursor-pointer w-[40%] rounded-2xl hover:bg-blue-600 ">
                    Submit
                </button>
            </form>
             </div>
        </div>
    )
}
export default CreateTask;