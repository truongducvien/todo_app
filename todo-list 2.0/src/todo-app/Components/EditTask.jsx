import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function EditTask ({updateTask}) {

   const location = useLocation();
   const taskItem = location.state;
   const navigate = useNavigate();
   
   const formElement = useRef();

   const [taskEditted, setTaskEditted] = useState({...taskItem})
   const statusList =['NEW', 'DOING', 'DONE']

   
   const handleInputChange = (e, type) => {
      setTaskEditted({
         ...taskEditted,
         [type]: e.target.value
      })
   }
   
   let handleStatusChange = (index) => {
      setTaskEditted({
         ...taskEditted,
         status: statusList[index]
      })
   }


   const handleSaveTask = (e) => {
      e.preventDefault();

      updateTask(taskEditted,'saveChange')
      navigate(-1)
   }


   const handleResetTask = (e) => {
      e.preventDefault();
      formElement.current.reset();
   }


   const handleDeleteTask = (e) => {
      e.preventDefault();
      if(window.confirm("Are you sure to delete this task?") === true){
         updateTask(taskEditted, 'deleteTask')
         navigate(-1)
      }
   }


   return(
      <div className="editTask">
         <form action="#" ref={formElement}>
            <div className="form-item">
               <p>Title</p>
               <input onChange={(e)=>handleInputChange(e, 'title')} type="text" placeholder={taskItem.title}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Creator</p>
               <input onChange={(e)=>handleInputChange(e, 'creator')} type="text" placeholder={taskItem.creator}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Create at</p>
               <input onChange={(e)=>handleInputChange(e, 'createTime')} type="datetime-local" defaultValue={taskItem.createTime} />
               <span className="error-message"></span>
            </div>

            <div className="form-item"> 
               <p>Description</p>
               <input onChange={(e)=>handleInputChange(e, 'description')} type="text" placeholder={taskItem.description} />
               <span className="error-message"></span>
            </div>

            <div className="form-item radio-box">
               {statusList.map((status, index) => (
                  <div key={index}>
                     <input 
                        type="radio" 
                        checked={status === taskEditted.status? true : false}
                        id={index} 
                        onChange={()=>handleStatusChange(index)}
                     /> 
                     <label htmlFor="status">{status}</label>   
                  </div>
               ))}
            </div>


            <button onClick={handleSaveTask}>Save</button>
            <button onClick={handleResetTask}>Reset</button>
            <button onClick={handleDeleteTask}>Delete</button>
         </form>
      </div>
   )
}