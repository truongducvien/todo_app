import { useRef} from "react"
import { useNavigate } from "react-router-dom";

export default function CreateTask ({saveNewTask}){

   const titleElement = useRef();
   const creatorElement = useRef();
   const createTimeElement = useRef();
   const descriptionElement = useRef();

   const navigate = useNavigate();
   
   const handleSaveNewTask = (e) => {
      e.preventDefault();
      
      const newTask = {
         title: titleElement.current.value,
         status: 'NEW',
         creator: creatorElement.current.value,
         createTime: createTimeElement.current.value,
         description: descriptionElement.current.value
      }

      if(newTask.title !== '' &&
         newTask.creator !== '' &&
         newTask.createTime !== '' &&
         newTask.description !== ''
         ){
            saveNewTask(newTask);
            navigate('/')
      }else {
         alert("Please fill in all fields")
      }
   }
   

   return(
      <div className="createTask">
         <form action="#">
            <div className="form-item">
               <p>Title</p>
               <input type="text" placeholder="Title" ref={titleElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Creator</p>
               <input type="text" placeholder="Name of Creator" ref={creatorElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Create at</p>
               <input type="datetime-local" placeholder="" ref={createTimeElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Description</p>
               <input type="text" placeholder="Description detail" ref={descriptionElement}/>
               <span className="error-message"></span>
            </div>

            <button onClick={handleSaveNewTask}>Save</button>
         </form>
      </div>
   )
}
