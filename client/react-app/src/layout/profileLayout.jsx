import { Outlet } from "react-router-dom";
import { NLink, ThreeLine } from "../lib/FontIcon";
import { useState } from "react";

function ProfileLayout(){
    const [menu, setMenu] = useState(false)
    console.log('menue', menu)
    return(
       <div className="bg-gray-600 h-[100vh] flex flex-col items-center gap-10 relative">
         <div className="bg-gray-100 shadow-2xl h-[300px] mt-5 w-[90%] flex  justify-around ">
            <div className="flex-1 flex justify-center">
            <img src="/profile.png" alt="profile picture" className="bg-pink-500 w-[60%] h-[35%] mt-10 rounded-full mt-4"></img>
            </div>
            <div className=" w-[100%] flex-3 flex items-center mt-12 flex-col ">
                <h1 >
                    Hello, Rakesh pegu !
                </h1>
                <p> You have 10 tasks to complete</p>
            </div>
            <div>
                
            </div>
         </div>
         <div className="bg-pink-200 h-[100%] w-[90%]">
            <div className="flex ml-6 ">
                 <h2 className='text-2xl'>ToDo lists ||</h2>
                 <h5 className=" flex justify-center items-center ml-3"> 2-SEP-2025</h5>
            </div>
            
            <nav className=" flex gap-2 justify-center mt-6 items-center">
              <NLink name="daily" link={"daily"}/>
              <NLink name="week" link={"weekly"}/>
              <NLink name="month" link={'monthly'}/>
              
            </nav>
            <div>
                <Outlet/>
            </div>
         </div>
       </div>
    );

}
export default ProfileLayout;