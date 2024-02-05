import { createElementType } from "./Components/utils"
import { folderModal, closeFolderModal } from "./Components/modal"
import { taskElement, addTaskBtn } from "./content";


export const sideNav  = createElementType('sideNav', 'div')


const removeAllTasks = (element) => {
   while (element.firstChild) {
      removeAllTasks(element.firstChild);
      element.removeChild(element.firstChild);
   }
}



const setPriorities = () => {
   //Side Nav Selection
   const priority = document.getElementById('priorityBtn')
   const todo = document.getElementById('todoBtn')
   const taskArea = document.getElementById('content')
   todo.classList.remove('started')
   priority.classList.add('started')

   if(taskArea.firstChild){
      removeAllTasks(taskArea);
   }

   // Filter tasks with priority "High"
   let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
   let tasklist = myTasks
   let highPriorityTasks = tasklist.filter(task => task.priority === "High");
   highPriorityTasks.forEach(task => {
      taskElement(task);
   });

}

const setTodos = () => {
   const priority = document.getElementById('priorityBtn')
   const todo = document.getElementById('todoBtn')
   const taskArea = document.getElementById('content')
   priority.classList.remove('started')
   todo.classList.add('started')

  if(taskArea.firstChild){
      removeAllTasks(taskArea);
   }

   let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
   addTaskBtn()
   myTasks.forEach(task => {
      taskElement(task); })
}




const openModal = () =>  {
   document.getElementById('app').appendChild(folderModal.fullModal)
   resetInput()
   }

const TodoBtn ={
   main: createElementType('todoBtn', 'button', 'sideNavTodoBtn' )
}
TodoBtn.main.innerHTML = `<div id="todo-icon"></div><p>ToDos</p></button>`;
TodoBtn.main.classList.add('started')
TodoBtn.main.innerHTML = `<div id="todo-icon"></div><p>ToDos</p></button>`;
TodoBtn.main.addEventListener('click', setTodos)



const PriorityBtn = {
   main: createElementType('priorityBtn', 'button', 'sideNavTodoBtn'),
}
PriorityBtn.main.innerHTML=`<div id="priority-icon"></div><p>Priority</p>`
PriorityBtn.main.addEventListener('click', setPriorities)

const mainButtons = createElementType('mainButtonArea', 'div')

const Divider = createElementType('dotted-lines', 'div')

mainButtons.appendChild(TodoBtn.main)
mainButtons.appendChild(PriorityBtn.main)
mainButtons.appendChild(Divider)




const AddFolderBtn ={

    main: createElementType('Newfolder', 'button'),
    icon: createElementType('add-icon', 'div'),
    p:    createElementType('', 'p'),
}

AddFolderBtn.main.appendChild(AddFolderBtn.icon)
AddFolderBtn.main.appendChild(AddFolderBtn.p)
AddFolderBtn.p.textContent = 'New Folder';
AddFolderBtn.main.addEventListener("click", openModal)




const resetInput =() =>{
   let addbtn = document.getElementById("foldermodal-add");
   addbtn.style.cursor = 'not-allowed'
   addbtn.style.opacity = '10%'
}

const FoldersArea = {
   div: createElementType('folder-area', 'div'),
   label: createElementType('', 'p', 'folders-area-label'),

   get folders() {
      this.label.textContent = 'Folders'
      this.div.appendChild(this.label)
      return this.div
   }
}


sideNav.appendChild(mainButtons)
sideNav.appendChild(FoldersArea.folders)
sideNav.appendChild(AddFolderBtn.main)



let myFolders = JSON.parse(localStorage.getItem("folders") || "[]");

   function Folder(name, tasks) {
      this.name = name,
      this.tasks = tasks
      this.returnFolder = function(){
          console.log( title, description)
      }
  }

  export const addFolder = ()  =>{

   let name = document.getElementById('folderInput').value
   if(name != ''){
   myFolders.push(new Folder(name, [1,2] ))
   localStorage.setItem("folders", JSON.stringify(myFolders));
   createFolder(new Folder(name, [1,2] ))
   closeFolderModal()
   } else{
      resetInput()
   }
 }



   export const createFolder = (folder) =>  {
   const folderBtn = {
   main: createElementType('folderBtn', 'button', 'sideNavTodoBtn'),
   icon: createElementType('folder-icon', 'div'),
   p:    createElementType('', 'p')

   }

   folderBtn.main.appendChild(folderBtn.icon)
   folderBtn.main.appendChild(folderBtn.p)
   folderBtn.p.textContent = folder.name;
   FoldersArea.div.appendChild(folderBtn.main)
}




const checkFolders = () => {
   if(myFolders.length < 1){
     return
   }else {
      let showAll = () => {
         let folderLists = myFolders;
         folderLists.forEach(folder => {
            createFolder(folder)
         })
      }
      showAll()
   }

}

checkFolders()

