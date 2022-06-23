import { useContext } from "react";

import { taskListContext } from "../Layout";
import Pagination from "./Pagination";


export default function NewTask () {
   const taskList = useContext(taskListContext)
   const newTaskList = taskList.filter((item) => item.status === 'NEW')
   
   return(
      <div className="container">
         <Pagination 
            taskList={newTaskList}
            taskClassName='newTask'
            itemsPerPage={12}
         />
      </div>
   )
}