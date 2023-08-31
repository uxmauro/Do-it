import { createElementType } from "./Components/utils";
import { addTaskModal} from "./Components/modal"; 
import { myTasks } from "./Components/modal"; 

   const addFirstTask = () => {   
   document.getElementById('app').appendChild(addTaskModal.taskInput)
   }


export const contentSection  = createElementType('content', 'div')

const allTasks = {
   main: createElementType('allTasks', 'div'),
 /*   title: createElementType('', 'h2'),
   description: createElementType('', 'p'),
   dueDate: createElementType('', 'button'),
   priority: createElementType('', 'button'), 
   folder: createElementType('', 'button'), */




   showTasks: () => {
      let tasklist = myTasks;
      tasklist.forEach(task => { 
   
         // Create a div for each task
         const taskDiv = document.createElement('div'); 
         const titleElement = document.createElement('h2');
         titleElement.textContent = task.title;
         taskDiv.appendChild(titleElement);
         
         const descriptionElement = document.createElement('p');
         descriptionElement.textContent = task.description; 
         taskDiv.appendChild(descriptionElement);
         
         
         allTasks.main.appendChild(taskDiv);
         contentSection.appendChild(allTasks.main)
        
   })
   } 
}


 const noTask = {
    main: createElementType('noTaskDiv', 'div'),
    button: createElementType('noTaskBtn', 'button'),
    header: createElementType('noTaskH3', 'h3'),

     showNoTask: () => {
      noTask.header.textContent = 'Create your first ToDo'
      noTask.button.addEventListener('click',addFirstTask) 
      noTask.main.appendChild(noTask.header)
      noTask.main.appendChild(noTask.button)
      return noTask.main
    }
 
   }


   const content = () => {
      if (myTasks.length < 1) {
   
         
        contentSection.append(noTask.showNoTask())
      
      } else {
       allTasks.showTasks()
       }
     }
   
   content()
   

