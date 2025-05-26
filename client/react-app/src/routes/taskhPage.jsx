import TaskCard from "../components/TaskCard";

function TaskPage(){
    return (
        <div className="bg-sky-300 flex flex-wrap justify-center gap-20  h-[100vh] overflow-y-scroll">
            <TaskCard/>
             <TaskCard/>
              <TaskCard/>
               <TaskCard/>
                <TaskCard/>
                 <TaskCard/>
                  <TaskCard/>
                   <TaskCard/>
              
            </div>
    )
}
export default TaskPage;