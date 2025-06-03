import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas, faPlus, faLineChart, faBars} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
library.add(fas,faPlus)
export  const Plus =()=><FontAwesomeIcon icon={faPlus} className='bg-gray-800 rounded-xl cursor-pointer flex justify-center z-20 items-center  fixed top-[600px] right-7' style={{ color:"wheat", height:"40px",width:"40px", }}/>
export  const ThreeLine = ()=><FontAwesomeIcon icon={faBars} style={{fontSize:"1.5em"}} className='cursor-pointer right-1 fixed top-1 z-50'/>
export const NLink = ({ name, link }) => {
  return (
    <NavLink
      to={link}
    className={({isPending, isActive, isTransitioning})=>{
        let baseClasses = "rounded-3xl w-[80px] flex justify-center items-center h-[30px]";
        let stateClass = isPending
          ? "bg-blue-600"
          :isTransitioning? 'bg-amber-500'
          : isActive
          ? "bg-orange-400"
          : "";
        return `${stateClass} ${baseClasses}`     
       
        
    }}
    >
      {name}
    </NavLink>
  );
};