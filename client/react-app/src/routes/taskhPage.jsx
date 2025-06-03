import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import { Plus } from "../lib/FontIcon";


function TaskPage(){
    return (
        <div className="bg-sky-300 flex flex-wrap justify-center gap-15  h-[100vh] overflow-y-scroll ">
           <Link to={'/create_task'}> <Plus/></Link>
            <TaskCard/>
                         
            </div>
    )
}
export default TaskPage;