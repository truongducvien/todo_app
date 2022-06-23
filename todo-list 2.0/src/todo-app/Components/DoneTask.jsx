import { useContext } from "react";

import { taskListContext } from "../Layout";
import Pagination from "./Pagination";

export default function DoneTask () {
   const taskList = useContext(taskListContext);
   const doneTaskList = taskList.filter((item) => item.status === 'DONE')
   
   return(
      <div className="container">
         <Pagination 
            taskList={doneTaskList}
            taskClassName='doneTask'
            itemsPerPage={12}
         />
      </div>
   )
}