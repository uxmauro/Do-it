import { createElementType } from "./Components/utils";
import { addTaskModal} from "./Components/modal";



const addFirstTask = () => {
   document.getElementById('app').appendChild(addTaskModal.taskInput)
   }


const optionsBtnClick = (e) => {
    const optionBtns =  document.querySelectorAll('#optionsBtn')

    optionBtns.forEach((button, index) => {
 const clickedIndex = Array.from(optionBtns).indexOf(e.target);
    optionBtns[clickedIndex].appendChild(optionsMenu)
})
   }

   const optionsMenu =
   createElementType('optionsMenu', 'div')



let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");


export const contentSection  = createElementType('content', 'div')




  const taskChecked = (e) => {
    const taskId = e.target.parentNode.parentNode.getAttribute('data-id');
    let myTaskEdit = JSON.parse(localStorage.getItem("tasks")) || [];
    // Find the task with the corresponding ID
    const taskToUpdate = myTaskEdit.find(task => task.id === taskId);
    if (taskToUpdate) {
      // Update the completed status
      taskToUpdate.completed = e.target.checked;
      // Update local storage
      localStorage.setItem("tasks", JSON.stringify(myTaskEdit));
    }
  };




//Task ELement
export const taskElement = (task) => {
    // Create a div for each task
    const taskDiv = createElementType('task','div');
    taskDiv.setAttribute("data-id", task.id)
    const leftTaskSection = createElementType('','div', 'leftTaskSection');
    taskDiv.appendChild(leftTaskSection);
    const taskToggle = createElementType('taskToggle','input');
    taskToggle.type = "checkbox"
    if(task.completed){
      taskToggle.checked = true;
      taskDiv.classList.add('completed');

    }
    taskToggle.addEventListener('click', (e) => {
      e.target.parentNode.parentNode.classList.toggle('completed')
    })
    taskToggle.addEventListener('change', e => taskChecked(e))
    leftTaskSection.appendChild(taskToggle);

    const rightTaskSection = createElementType('','div', 'rightTaskSection');
    taskDiv.appendChild(rightTaskSection);

    const topTaskSection = createElementType('','div', 'topTaskSection');
    rightTaskSection.appendChild(topTaskSection);

    const titleElement = document.createElement('h2');
    titleElement.textContent = task.title;
    topTaskSection.appendChild(titleElement);

    const btnsTaskDiv = createElementType('','div', 'btnTaskDiv');
    topTaskSection.appendChild(btnsTaskDiv);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = task.description;
    rightTaskSection.appendChild(descriptionElement);

    const dateElement = document.createElement('p');
    dateElement.textContent = task.dueDate;
    btnsTaskDiv.appendChild(dateElement);

    const priorityElement = document.createElement('p');
    priorityElement.textContent = task.priority;
    btnsTaskDiv.appendChild(priorityElement);

    const folderElement = document.createElement('p');
    folderElement.textContent = task.folder;
    btnsTaskDiv.appendChild(folderElement);

    const optionsBtn = createElementType('optionsBtn','button','optionsBtn' );
    btnsTaskDiv.appendChild(optionsBtn);

    optionsBtn.addEventListener('click',optionsBtnClick)
    allTasks.main.appendChild(taskDiv);
    contentSection.appendChild(allTasks.main)
}


export const addTaskBtn = () => {
  const button = createElementType('addTaskBtn', 'button', 'addTaskBtn');
  button.addEventListener('click', addFirstTask);
  contentSection.appendChild(button);
}




 const allTasks = {
   main: createElementType('allTasks', 'div'),

   showTasks: () => {

    addTaskBtn()
      let tasklist = myTasks;
      tasklist.forEach(task => {
         taskElement(task)

   })
   }
}


export const noTask = {
    main: createElementType('noTaskDiv', 'div'),
    button: createElementType('noTaskBtn', 'button'),

     showNoTask: () => {
      noTask.main.innerHTML=`<h3 id="noTaskH3">Create your first ToDo</h3>`
      noTask.button.addEventListener('click',addFirstTask)
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


