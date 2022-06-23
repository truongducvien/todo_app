import { useContext } from "react";
import { taskListContext } from '../Layout'

import Pagination from "./Pagination";

export default function AllTask () {

   const taskList = useContext(taskListContext)

   if(taskList != null){
      return(
         <> 
            <div className="container">
               <Pagination 
                  taskList={taskList}
                  taskClassName='allTask'
                  itemsPerPage={12}
               />
               
            </div>
         </>
      )
   }
   else return (
      <div className="allTask">
            
      </div>
   )
}