import { createElementType } from "./Components/utils";
import { addTaskModal} from "./Components/modal"; 

   const addFirstTask = () => {
      
   document.getElementById('noTaskDiv').remove()
   document.getElementById('content').appendChild(addTaskModal.taskInput)
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


export const contentSection  = createElementType('content', 'div')

contentSection.appendChild(noTask.showNoTask())