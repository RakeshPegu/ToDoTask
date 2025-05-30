import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas, faPlus} from '@fortawesome/free-solid-svg-icons'
library.add(fas,faPlus)
export  const Plus =()=><FontAwesomeIcon icon={faPlus} className='bg-gray-800 rounded-xl cursor-pointer flex justify-center z-20 items-center  fixed top-[600px] right-7' style={{ color:"wheat", height:"40px",width:"40px", }}/>