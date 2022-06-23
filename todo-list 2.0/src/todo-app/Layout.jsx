import { useState, useEffect, createContext } from "react";
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
import SearchResult from "./Components/SearchResult";

export const taskListContext = createContext()

export default function Layout () {
   const sideBarList = [
      {name: 'All Task', path:'/'},
      {name: 'New Task', path:'/newtask'},
      {name: 'Doing Task', path:'/doingtask'},
      {name: 'Done Task', path:'/donetask'}
   ]

   const [taskList, setTaskList] = useState([]);
   const [searchKey, setSearchKey] = useState('');


   useEffect(() => {
      const storedTaskList = localStorage.taskList;
      
      if(storedTaskList === undefined){
         setTaskList([])
      } else {
         setTaskList(JSON.parse(storedTaskList))
      }
   }, [])




   const saveNewTask = (newTask) => {
      let newTaskList = [newTask, ...taskList]
      setTaskList(newTaskList)
      
      newTaskList.map((item, index) => item.id = index)

      localStorage.setItem('taskList', JSON.stringify(newTaskList));
   }


   const updateTask = (taskItem, action) => {
      switch (action) {
         case 'saveChange':
            setTaskList(taskList => {
               taskList[taskItem.id] = taskItem;
               return taskList;
            })
            break;

         case 'deleteTask':
            setTaskList(taskList => {
               taskList.splice(taskItem.id, 1);
               return taskList;
            })
            break;

         default:
            console.log('Error'); 
      }

      taskList.map((item, index) => item.id = index)
      localStorage.setItem('taskList', JSON.stringify(taskList));
   }


   const searchTask = (inputVal) => {
      setSearchKey(inputVal)
   }


   return (
      <taskListContext.Provider value={taskList}>
         <div className="app-area">
            <BrowserRouter>
               <Header searchTask={searchTask}/>
               <SideBar sideBarList={sideBarList}/>

               <div className="content">
                  <Routes>
                     <Route 
                        path='/createTask' 
                        element={<CreateTask saveNewTask={saveNewTask}/>} 
                     />

                     <Route 
                        path='/' 
                        element={<AllTask />} 
                     />

                     <Route 
                        path='/newtask' 
                        element={<NewTask />} 
                     />

                     <Route 
                        path='/edittask' 
                        element={<EditTask 
                        updateTask={updateTask}/>} 
                     />

                     <Route 
                        path='/doingtask' 
                        element={<DoingTask />} 
                     />

                     <Route 
                        path='/donetask' 
                        element={<DoneTask />} 
                     />

                     <Route 
                        path='/searchresult' 
                        element={<SearchResult searchKey={searchKey}/>} 
                     />
                  </Routes> 
               </div>
            </BrowserRouter>
         </div>
      </taskListContext.Provider>
   )
}