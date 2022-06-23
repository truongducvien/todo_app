import { useContext } from "react";

import { taskListContext } from "../Layout";
import Pagination from "./Pagination";


export default function DoingTask () {
   const taskList = useContext(taskListContext)
   const doingTaskList = taskList.filter((item) => item.status === 'DOING')
   
   return(
      <div className="container">
         <Pagination 
            taskList={doingTaskList}
            taskClassName='doingTask'
            itemsPerPage={12}
         />
      </div>
   )
}