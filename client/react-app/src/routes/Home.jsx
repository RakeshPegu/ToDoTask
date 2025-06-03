import { useEffect } from "react";
import { apiRequest } from "../lib/apiRequest";
import { Link } from "react-router-dom";
function Home(){
    useEffect(()=>{
       const fetchData = async()=>{
        const res = await apiRequest.get('/message')
        console.log(res.data)
       }
       fetchData()
    }, [])
    return (
        <div className="bg-gray-800 text-white h-[100vh] flex justify-center items-center">
           <Link to={'/register'}> <button className="bg-blue-600 w-[150px] h-[50px] text-xl rounded-2xl cursor-pointer"> Start </button></Link>                 
        </div>
    );
}
export default Home;