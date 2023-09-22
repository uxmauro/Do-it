import { createElementType } from "./Components/utils"
import { folderModal, closeModal } from "./Components/modal"

export const sideNav  = createElementType('sideNav', 'div')


const removeAcitve = (clickedButton) => {
   const buttons = document.querySelectorAll("#sideNavTodoBtn");

   buttons.forEach(button => {
         button.classList.remove("started");
       })
/*
          clickedButton.classList.add("started") */
}



const openModal = () =>  {
   document.getElementById('app').appendChild(folderModal.fullModal)
   resetInput()
   }

const TodoBtn ={
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('todo-icon', 'div'),
   p:    createElementType('', 'p'),
}
TodoBtn.main.classList.add('started')
TodoBtn.main.appendChild(TodoBtn.icon)
TodoBtn.main.appendChild(TodoBtn.p)
TodoBtn.p.textContent = 'ToDos';

const PriorityBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('priority-icon', 'div'),
   p:    createElementType('', 'p'),
}

PriorityBtn.main.appendChild(PriorityBtn.icon)
PriorityBtn.main.appendChild(PriorityBtn.p)
PriorityBtn.main.addEventListener('click', removeAcitve(PriorityBtn.main))
PriorityBtn.p.textContent = 'Priority';

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
   closeModal()
   } else{
      resetInput()
   }
 }



export const createFolder = (folder) =>  {
   const folderBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
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




/*   //Calendar Btn
   const CalendarBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('calendar-icon', 'div'),
   p:    createElementType('', 'p'),
}
CalendarBtn.main.appendChild(CalendarBtn.icon)
CalendarBtn.main.appendChild(CalendarBtn.p)
CalendarBtn.p.textContent = 'Calendar';
 */
