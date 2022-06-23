Plan: Item view with pagination:

1. Initiate the parameters:
   - offset: starting point
   - perpage: number of items on a single page
   - pagecount: number of total pages = Math.ceil(taskList.length/perpage)

2. Fetch data (taskList array) => Calc the number of pages
3. Set the current player values by slicing the array:
   - Click the number of pagination - fill the result array

   setPageCount
   setPlayerData( taskList.splice( offset,  ) )




   offset = 0
   perpage = 4
   taskList = [ |1, 2, 3, 4,| 5, 6, 7, 8,| 9, 10]

   => pageCount = 3
   setPlayerData( taskList.splice( offset, offset + perpage ) )