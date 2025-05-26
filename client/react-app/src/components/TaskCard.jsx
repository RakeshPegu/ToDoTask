function TaskCard(){
    return (
        <div className="bg-cyan-950 text-blue-50 flex rounded-3xl cursor-pointer  items-center flex-col w-[400px] h-[300px] relative left-3 top-5 " >
            <h1 className="text-3xl bg-white w-[100%]  text-black text-center rounded-tl-3xl rounded-tr-3xl pb-2">
                code101
            </h1>
            <div className="mt-10 w-[100%]">
                <div className="">
                   <p className="text-xl text-center">
                    i will write code for the uncomplete chat project
                </p>
                </div>
                <div className=" absolute bottom-2 flex flex-col w-[100%]"> 
                <p className="text-2xl text-center  w-[100%]">
                    start time: 10:0 -- end time : 12:0
                </p>
                <p className="text-lg text-center w-[100%]">
                    total time reserved for the task is: 2 hours
                </p>
                </div>           
             
               </div>
        </div>
    );
}
export default TaskCard;