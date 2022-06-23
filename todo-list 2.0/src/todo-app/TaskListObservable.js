import { makeObservable } from "mobx"



class TaskListStore {
   taskList = []

   constructor(){
      makeObservable( this, {
         
      })
   }
}