import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './Style/Layout.css'

import Header from "./Components/Header";
import SideBar from './Components/SideBar';
import CreateTask from "./Components/CreateTask";
import AllTask from './Components/AllTask';
import NewTask from './Components/NewTask';
import EditTask from "./Components/EditTask";
import DoingTask from './Components/DoingTask';
import DoneTask from './Components/DoneTask';


export default function Layout () {
   const [taskList, setTaskList] = useState([])

   useEffect(() => {
      const storedTaskList = localStorage.getItem('taskList');

      if(storedTaskList === null){
         setTaskList([])
         return;
      }

      setTaskList(JSON.parse(storedTaskList))
   }, [])

   const saveNewTask = (newTask) => {
      setTaskList([
         newTask,
         ...taskList
      ])
      localStorage.setItem('taskList', JSON.stringify(taskList));
      console.log('new task saved');
   }

   return (
         <div className="app-area">
            <BrowserRouter>
               <Header />
               <SideBar />

               <div className="content">
                  <Routes>
                     <Route 
                        path='/createTask' 
                        element={<CreateTask saveNewTask={saveNewTask}/>} 
                     />

                     <Route 
                        path='/' 
                        element={<AllTask taskList={taskList}/>} 
                     />

                     <Route path='/newtask' element={<NewTask />} />

                     <Route path='/edittask' element={<EditTask />} />

                     <Route path='/doingtask' element={<DoingTask />} />

                     <Route path='/donetask' element={<DoneTask />} />
                  </Routes> 
               </div>
            </BrowserRouter>
         </div>
   )
}
