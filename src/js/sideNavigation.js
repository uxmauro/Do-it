import { createElementType } from "./Components/utils"
import { folderModal, closeFolderModal } from "./Components/modal"
import { taskElement, addTaskBtn } from "./content";
import { v4 as uuidv4 } from 'uuid';



export const sideNav  = createElementType('sideNav', 'div')


const removeAllTasks = (element) => {
   while (element.firstChild) {
      removeAllTasks(element.firstChild);
      element.removeChild(element.firstChild);
   }
}

const getFolders = (e) => {
   //Find Folder ID
   const button = e.target.closest('#folderBtn');
   button.children[1].classList.add('started')
   // Remove class from all other folderBtns
   const folderBtns = document.querySelectorAll('.sideNavTodoBtn');
   folderBtns.forEach(btn => {
      if (btn !== button) {
            btn.children[1].classList.remove('started');
            btn.classList.remove('started');
      }
   });

   const taskArea = document.getElementById('content')
   if(taskArea.firstChild){
      removeAllTasks(taskArea);
   }

   if (button) {
      const dataId = button.dataset.id;
       // Filter tasks with priority "High"
  let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  let selectedFolderTasks = myTasks.filter(task => task.folderId === dataId);
  selectedFolderTasks.forEach(task => {
     taskElement(task);
  });
  }



}

const getPriorities = () => {
   const priority = document.getElementById('priorityBtn')
   priority.classList.add('started')
   // Remove class from all other SideButtons
   const TasksBtns = document.querySelectorAll('.sideNavTodoBtn');
   TasksBtns.forEach(btn => {
      if (btn !== priority) {
            btn.children[1].classList.remove('started');
            btn.classList.remove('started');
      }
   });

   const taskArea = document.getElementById('content')
   if(taskArea.firstChild){
      removeAllTasks(taskArea);
   }

   // Filter tasks with priority "High"
   let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
   let highPriorityTasks = myTasks.filter(task => task.priority === "High");
   highPriorityTasks.forEach(task => {
      taskElement(task);
   });

}

const getTodos = () => {
   const todo = document.getElementById('todoBtn')
   todo.classList.add('started')
   const TasksBtns = document.querySelectorAll('.sideNavTodoBtn');
   TasksBtns.forEach(btn => {
      if (btn !== todo) {
            btn.children[1].classList.remove('started');
            btn.classList.remove('started');
      }
   });
   const taskArea = document.getElementById('content')
  if(taskArea.firstChild){
      removeAllTasks(taskArea);
   }

   let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
   addTaskBtn()
   myTasks.forEach(task => {
      taskElement(task); })
}




const openFolderModal = () =>  {
   document.getElementById('app').appendChild(folderModal.fullModal)
   resetInput()
   }

const TodoBtn ={
   main: createElementType('todoBtn', 'button', 'sideNavTodoBtn' )
}
TodoBtn.main.innerHTML = `<div id="todo-icon"></div><p>ToDos</p></button>`;
TodoBtn.main.classList.add('started')
TodoBtn.main.innerHTML = `<div id="todo-icon"></div><p>ToDos</p></button>`;
TodoBtn.main.addEventListener('click', getTodos)



const PriorityBtn = {
   main: createElementType('priorityBtn', 'button', 'sideNavTodoBtn'),
}
PriorityBtn.main.innerHTML=`<div id="priority-icon"></div><p>Priority</p>`
PriorityBtn.main.addEventListener('click', getPriorities)

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
AddFolderBtn.main.addEventListener("click", openFolderModal)




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

   function Folder(name, id) {
      this.name = name,
      this.id = id
      this.returnFolder = function(){
          console.log( title, description)
      }
  }

  export const addFolder = ()  =>{

   let name = document.getElementById('folderInput').value
   let id = uuidv4()
   if(name != ''){
   myFolders.push(new Folder(name, id ))
   localStorage.setItem("folders", JSON.stringify(myFolders));
   createFolder(new Folder(name, id))
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
   folderBtn.main.setAttribute('data-id', folder.id);
   folderBtn.main.addEventListener('click',(e) => { getFolders(e)});
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

