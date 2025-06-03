
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
function BChart(){
    const data= [{
        day:'monday',
        completedTasks:2
    },
    {
        day:"tue",
        completedTasks:4

    },
    {
        day:"wedness",
        completedTasks:5
    },
    {
        day:'thurs',
        completedTasks:5

    },
    {
        day:"fri",
        completedTasks:5
    },
    {
        day:"sat",
        completedTasks:5
    },
    {
        day:'sun',
        completedTasks:6
    }
]
    return (
        <div >
            <BarChart width={600} height={300} data={data}>                
                <XAxis dataKey='day' stroke="#14dcff"/>
                <YAxis stroke="#ff14ad" />
                <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
                <Bar dataKey='completedTasks'  barSize={30} fill="#7fff00"/>
                <Tooltip/>
            </BarChart>

            
        </div>
    );
}
export default BChart;