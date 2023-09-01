import { createElementType } from "./Components/utils";
import { addTaskModal} from "./Components/modal"; 



const addFirstTask = () => {   
   document.getElementById('app').appendChild(addTaskModal.taskInput)
   }


let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");


export const contentSection  = createElementType('content', 'div')

export const taskElement = (task) => {
    // Create a div for each task
    const taskDiv = createElementType('task','div'); 
    const titleElement = document.createElement('h2');
    titleElement.textContent = task.title;
    taskDiv.appendChild(titleElement);
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = task.description; 
    taskDiv.appendChild(descriptionElement);
    
    const dateElement = document.createElement('button');
    dateElement.textContent = task.dueDate; 
    taskDiv.appendChild(dateElement);
    
    const priorityElement = document.createElement('button');
    priorityElement.textContent = task.priority; 
    taskDiv.appendChild(priorityElement);
    
    const folderElement = document.createElement('button');
    folderElement.textContent = task.folder; 
    taskDiv.appendChild(folderElement);
    
    const addTaskBtn = createElementType('', 'button', 'addTaskBtn');

    addTaskBtn.addEventListener('click',addFirstTask)
    allTasks.main.appendChild(taskDiv);
    taskDiv.appendChild(addTaskBtn);
    contentSection.appendChild(allTasks.main)
}


 const allTasks = {
   main: createElementType('allTasks', 'div'),


   showTasks: () => {
      let tasklist = myTasks;
      tasklist.forEach(task => { 
         taskElement(task)   
   
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
   

