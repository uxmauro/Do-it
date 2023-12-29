import { createElementType } from "./Components/utils";
import { addTaskModal} from "./Components/modal";



const addFirstTask = () => {
   document.getElementById('app').appendChild(addTaskModal.taskInput)
   }


const editTask = () => {
   document.getElementById('app').appendChild(addTaskModal.taskInput)
   }


let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");


export const contentSection  = createElementType('content', 'div')



//Change task completion in localstorage
const taskChecked = (e) => {

   let tasksDisplayed = Array.from(document.getElementById("allTasks").children)
   let taskIndex = (tasksDisplayed.indexOf(e.target.parentNode.parentNode))
   let myTaskEdit = JSON.parse(localStorage.getItem("tasks"))
   {
      if (e.target.checked){
      myTaskEdit[taskIndex].completed = true
        localStorage.setItem("tasks", JSON.stringify(myTaskEdit))
      }else{
        myTaskEdit[taskIndex].completed = false
        localStorage.setItem("tasks", JSON.stringify(myTaskEdit))
      }}
  }



export const taskElement = (task) => {
    // Create a div for each task
    const taskDiv = createElementType('task','div');
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

    const editBtn = createElementType('','button','editTaskBtn' );
    btnsTaskDiv.appendChild(editBtn);


    const addTaskBtnChck = document.getElementById('addTaskBtn')
    if(addTaskBtnChck == null){
    const addTaskBtn = createElementType('addTaskBtn', 'button', 'addTaskBtn');
    addTaskBtn.addEventListener('click',addFirstTask)
    taskDiv.appendChild(addTaskBtn);
    }
    editBtn.addEventListener('click',editTask)
    allTasks.main.appendChild(taskDiv);
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


