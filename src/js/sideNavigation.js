import { createElementType } from "./Components/utils"
import { folderModal, closeModal } from "./Components/modal"

const resetInput =() =>{
   let addbtn = document.getElementById("foldermodal-add");
   addbtn.style.cursor = 'not-allowed'
   addbtn.style.opacity = '10%'
}


const openModal = () =>  {
   document.getElementById('app').appendChild(folderModal.fullModal)
   resetInput()
   }   


   let myFolders = JSON.parse(localStorage.getItem("folders") || "[]");

   function Folder(name, tasks) {
      this.name = name,
      this.tasks = tasks 
      this.returnFolder = function(){
          console.log( title, description)
      }
  }

  const addFolder = ()  =>{

   let name = document.getElementById('folderInput').value
   myFolders.push(new Folder(name, [1,2] ))
   localStorage.setItem("folders", JSON.stringify(myFolders));
 }



export const createFolder = () =>  {
   const folderBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('folder-icon', 'div'),
   p:    createElementType('', 'p')

   }
   folderBtn.main.appendChild(folderBtn.icon)
   folderBtn.main.appendChild(folderBtn.p)
   folderBtn.p.textContent = document.getElementById('folderInput').value
   FoldersArea.div.appendChild(folderBtn.main)
   addFolder()
   closeModal()
}








const TodoBtn ={
    main: createElementType('sideNavTodoBtn', 'button'),    
    icon: createElementType('todo-icon', 'div'),
    p:    createElementType('', 'p'),
} 
TodoBtn.main.appendChild(TodoBtn.icon)
TodoBtn.main.appendChild(TodoBtn.p)
TodoBtn.p.textContent = 'ToDos';

/*
   //Calendar Btn
   const CalendarBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('calendar-icon', 'div'),
   p:    createElementType('', 'p'),
}
CalendarBtn.main.appendChild(CalendarBtn.icon)
CalendarBtn.main.appendChild(CalendarBtn.p)
CalendarBtn.p.textContent = 'Calendar';
 */
const PriorityBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('priority-icon', 'div'),
   p:    createElementType('', 'p'),
}
PriorityBtn.main.appendChild(PriorityBtn.icon)
PriorityBtn.main.appendChild(PriorityBtn.p)
PriorityBtn.p.textContent = 'Priority';

const mainButtons = createElementType('mainButtonArea', 'div')

const Divider = createElementType('dotted-lines', 'div')

mainButtons.appendChild(TodoBtn.main)
/* 
//Calendar Btn
mainButtons.appendChild(CalendarBtn.main)

 */mainButtons.appendChild(PriorityBtn.main)
mainButtons.appendChild(Divider)


const FoldersArea = {
   div: createElementType('folder-area', 'div'),
   label: createElementType('', 'p', 'folders-area-label'),

   get folders() {
      this.label.textContent = 'Folders'
      this.div.appendChild(this.label)
      return this.div
   }

}

const AddFolderBtn ={ 
    
    main: createElementType('Newfolder', 'button'),
    icon: createElementType('add-icon', 'div'),
    p:    createElementType('', 'p'),
}

AddFolderBtn.main.appendChild(AddFolderBtn.icon)
AddFolderBtn.main.appendChild(AddFolderBtn.p)
AddFolderBtn.p.textContent = 'New Folder';
AddFolderBtn.main.addEventListener("click", openModal)


export const sideNav  = createElementType('sideNav', 'div')

sideNav.appendChild(mainButtons)
sideNav.appendChild(FoldersArea.folders)
sideNav.appendChild(AddFolderBtn.main)