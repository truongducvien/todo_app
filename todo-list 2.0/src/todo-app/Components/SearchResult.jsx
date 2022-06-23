import { useContext } from "react";

import Pagination from './Pagination'; 
import { taskListContext } from "../Layout";


export default function SearchResult({searchKey}) {
   const taskList = useContext(taskListContext);
   const searchResultList = taskList.filter(
      (item) =>
         item.title.includes(searchKey) === true ||
         item.creator.includes(searchKey) === true
   );

   if (searchKey === null || searchKey === "") {
      return <h2>Search result is empty</h2>;
   }

   if ((searchResultList.length === 0)) {
      return <h3>Can't find '{searchKey}'. Try something else!</h3>;
   }

   return (
      <div className="container">
         <Pagination 
            taskList={searchResultList}
            taskClassName='searchResult'
            itemsPerPage={12}
         />
      </div>
   );

  // if(searchKey != ''){
  //    const searchResultList = taskList.filter(
  //       item => item.title.includes(searchKey) == true ||
  //                item.creator.includes(searchKey) == true
  //    )

  //    if(searchResultList != ''){
  //       return(
  //          <div className="allTask">
  //             {searchResultList.map((item, index) =>
  //                <div
  //                   className="task"
  //                   key={index}
  //                >
  //                   <Link
  //                      to='/edittask'
  //                      state={item}
  //                      style={{textDecoration: 'unset'}}
  //                   >
  //                      <p className="title">Title: {item.title}</p>
  //                      <p className="creator">Creator: {item.creator}</p>
  //                      <p className={`status ${item.status}`}>Status: {item.status}</p>
  //                      <p className="description">Description:</p>
  //                      <span title={item.description}>{item.description}</span>
  //                   </Link>
  //                </div>
  //             )}
  //          </div>
  //       )
  //    } else {
  //       return (
  //          <h3>Can't find '{searchKey}'. Try something else!</h3>
  //       )
  //    }

  // }else {
  //    return (
  //       <h2>Search result is empty</h2>
  //    )
  // };
}
