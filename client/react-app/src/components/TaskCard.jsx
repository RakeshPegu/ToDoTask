function TaskCard(){
    return (
        <div className="bg-cyan-950 text-blue-50 flex rounded-3xl cursor-move items-center flex-col w-[94%] h-[300px] relative " >
            <h1 className="text-3xl bg-white w-[100%]  text-black text-center rounded-tl-xl rounded-tr-xl pb-2">
                code101
            </h1>
            <h2 className="text-2xl">3:23:00 </h2>
            <div className="mt-6 w-[100%] flex flex-col items-center">
                <div className="w-[96%]">
                   <p className=" text-center">
                    i will write code for the uncomplete chat project
                </p>
                </div>
                <div className="flex flex-col absolute bottom-5 gap-4">
                    <h3 className="text-center text-lg">Devoted time : 2 hours </h3>
                <div className=" bottom-5 flex gap-10  w-[100%] items-center justify-center "> 
                  <button className="bg-emerald-600 w-[100px] rounded-2xl cursor-pointer h-[35px]">Start</button>
                  <button className="bg-emerald-600 w-[100px] rounded-2xl cursor-pointer h-[35px]"> Edit</button>
                </div>  
                </div>         
             
               </div>
        </div>
    );
}
export default TaskCard;