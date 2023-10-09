import { createElementType } from "./utils";
import { addFolder } from "../sideNavigation";
import { taskElement } from "../content";


export const closeModal  = () =>  {
   let app = document.getElementById('app')
   let modal = document.getElementById('foldermodal-bg')
   let input = document.getElementById('folderInput')
   input.value = ''
   app.removeChild(modal)


}
export const closeTaskModal  = () =>  {
   let app = document.getElementById('app')
   let modal = document.getElementById('addtaskmodal')
   let title = document.getElementById('taskInput-input')
   let description = document.getElementById('taskInput-textarea')

   title.value = ''
   description.value = ''

   app.removeChild(modal)


}




let myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function Task(title, description, dueDate, priority, folder, completed) {
    this.title = title,
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.folder = folder
    this.completed = completed,
    this.returnTask = function(){
        console.log( title, description)
    }
}


 export const addTask  = () =>  {
   let title = document.getElementById('taskInput-input').value
   let description = document.getElementById('taskInput-textarea').value
   let dueDate = "Not Set"
   let priority = "notSpecified"
   let folder = "notSpecified"
   let app = document.getElementById('content')
   let modal = document.getElementById('noTaskDiv')
   let completed = false

   if(title.input != '' && description != ''){
   myTasks.push(new Task(title, description, dueDate, priority, folder, completed))
   localStorage.setItem("tasks", JSON.stringify(myTasks));
   closeTaskModal()
   taskElement(new Task(title, description, dueDate, priority, folder, completed))
   } else{
    console.log('working')
   }
}


//Add Task Modal
export const addTaskModal = {


    main: createElementType('addtaskmodal', 'div', 'addtaskmodal-bg'),
    mainModal: createElementType('mainModal', 'div'),
    modal: createElementType('taskInput-main', 'form'),
    firstRow: createElementType('taskRow', 'div'),
    secondRow: createElementType('taskRow', 'div'),
    thirdRow: createElementType('', 'div', 'btnRow'),
    addCancelRow: createElementType('', 'div', 'addCancelRow'),
    titleInput: createElementType('taskInput-input', 'input'),
    textArea: createElementType('taskInput-textarea', 'textarea'),
    btnAreaBottom: createElementType('taskInput-btnArea-Bottom', 'div'),
    selectFolderBtn: createElementType('taskInput-selectBtn', 'select', 'selectDrop'),
    setPriorityBtn: createElementType('taskInput-selectBtn', 'select', 'selectDrop'),
    addBtn: createElementType('addBtn', 'button', ''),
    cancelBtn: createElementType('cancelBtn', 'button', ''),
    setDate: createElementType('taskInput-selectBtn', 'button', 'date-select'),

    get taskInput() {
        let noTaskDiv = document.getElementById('noTaskDiv')
        if(noTaskDiv){
        noTaskDiv.style.display ='none'}

        let folders = document.querySelectorAll('.folderBtn')

        folders.forEach( folder => {
            let pEl = folder.querySelector('p');
            let text = pEl.textContent;
            console.log(text);
        })

        this.titleInput.placeholder = "Title"
        this.titleInput.addEventListener('input', this.checkInput);
        this.textArea.placeholder = "Description"
        this.textArea.addEventListener('input', this.checkInput);
        this.setDate.innerText = "Due Date"
        this.selectFolderBtn.innerText = "Folder"
        this.setPriorityBtn.innerText = "Priority"
        this.cancelBtn.innerText = "Cancel"
        this.addBtn.innerText = "Add"
        this.cancelBtn.addEventListener('click',closeTaskModal)
        this.modal.appendChild(this.firstRow);
        this.modal.appendChild(this.secondRow);
        this.modal.appendChild(this.thirdRow);
        this.firstRow.appendChild(this.titleInput)
        this.secondRow.appendChild(this.textArea)
        this.thirdRow.appendChild(this.setDate)
        this.thirdRow.appendChild(this.setPriorityBtn)
        this.thirdRow.appendChild(this.selectFolderBtn)
        this.thirdRow.appendChild(this.btnAreaBottom)
        this.addCancelRow.appendChild(this.cancelBtn)
        this.addCancelRow.appendChild(this.addBtn)
        this.main.appendChild(this.mainModal)
        this.mainModal.appendChild(this.modal)
        this.mainModal.appendChild(this.addCancelRow)
        return this.main;
      },
      checkInput(){
        if(this.titleInput != '' && this.textArea != '' ){
            let addbtn = document.getElementById("addBtn");
            addbtn.style.cursor = 'pointer'
            addbtn.style.opacity = '100%'
            addbtn.addEventListener('click',addTask)
        }

    },
}




//Folder Modal
export const folderModal = {

    main: createElementType('foldermodal-bg', 'div'),
    modal: createElementType('foldermodal', 'div'),
    modalelement: createElementType('', 'div', 'foldermodalelement'),
    inputSection: createElementType('inputSection', 'div'),
    label: createElementType('folderLabel', 'label'),
    inputField:  createElementType('folderInput', 'input'),
    ctabuttons: createElementType('', 'div', 'foldermodalcta'),
    addBtn: createElementType('foldermodal-add', 'button'),
    cancelBtn: createElementType('foldermodal-cancel', 'button'),


    get fullModal() {
        this.label.setAttribute('for', 'folderName');
        this.inputField.setAttribute('type', 'text');
        this.inputField.setAttribute('placeholder', 'Folder');
        this.inputField.addEventListener('input', this.checkInput);
        this.addBtn.textContent = 'Add'
        this.cancelBtn.textContent = 'Cancel'
        this.cancelBtn.addEventListener('click',closeModal)
        this.main.appendChild(this.modalelement);
        this.modalelement.appendChild(this.modal)
        this.modal.appendChild(this.inputSection)
        this.inputSection.appendChild(this.inputField)
        this.modalelement.appendChild(this.ctabuttons)
        this.ctabuttons.appendChild(this.cancelBtn)
        this.ctabuttons.appendChild(this.addBtn)

        return this.main;
      },
      checkInput(){
        if(this.inputField !== ''){
            let addbtn = document.getElementById("foldermodal-add");
            addbtn.style.cursor = 'pointer'
            addbtn.style.opacity = '100%'
            addbtn.addEventListener('click',addFolder)
        }

    },
}