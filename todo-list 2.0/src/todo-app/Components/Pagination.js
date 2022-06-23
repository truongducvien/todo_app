import { useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

import TaskItem from "./TaskItem";

function Pagination({ taskList, taskClassName, itemsPerPage }) {

   
   const [currentTaskList, setCurrentTaskList] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      
      const endOffset = itemOffset + itemsPerPage;
      
      setCurrentTaskList(taskList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(taskList.length / itemsPerPage));
   }, [taskList, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % taskList.length;
      
      setItemOffset(newOffset);
   };

   return (
      <>
         <TaskItem 
            currentTaskList={currentTaskList}
            taskClassName={taskClassName}
         />

         <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName='paginationButton'
         />
      </>
   );
}

export default Pagination;