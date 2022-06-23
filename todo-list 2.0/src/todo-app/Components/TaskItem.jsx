import { Link } from "react-router-dom"

export default function TaskItem ({ currentTaskList, taskClassName}) {

   return (
      <div className={taskClassName}>
         {currentTaskList.length != 0 && currentTaskList.map((item, index) => 
            <div className='task' key={index}>
               <Link 
                  to='/edittask' 
                  state={item}
                  style={{textDecoration: 'unset'}}
               >
                  <p className="title">Title: {item.title}</p>
                  <p className="creator">Creator: {item.creator}</p>
                  <p className={`status ${item.status}`}>Status: {item.status}</p>
                  <p className="description">Description:</p>
                  <span title={item.description}>{item.description}</span>
               </Link>
            </div>
         )}
      </div>
   )
}