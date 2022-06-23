import {NavLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function Header ({searchTask}) {
   const [inputValue, setInputValue] = useState('');
   const navigate = useNavigate();


   const handleSearchTask = (e, value) => {
      e.preventDefault()
      
      if(inputValue == ''){
         alert("Please write something to search!")
      } else {
         navigate('/searchresult')
         searchTask(value)
         setInputValue('');
      }
   }


   const handleInputKeyUp = (e) => {
      e.preventDefault();
      
      if(e.key == 'Enter'){
         handleSearchTask(e, inputValue);
      }
   }


   return (
      <div className="header">
         <button className="createBtn">
            <NavLink to='/createTask'>Create New Task</NavLink>
         </button>

         <input 
            className="input-area" 
            type="text" 
            placeholder="Type something to search"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyUp={handleInputKeyUp}
         />
         
         <button 
            className="searchBtn"
            onClick={(e)=>handleSearchTask(e,inputValue)}
         >
            Search
         </button>
      </div>
   )
}