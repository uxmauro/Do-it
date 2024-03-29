import { createElementType } from "./utils.js";
import { addFolder } from "../sideNavigation.js";
import { taskElement, noTask } from "../content.js";
import { v4 as uuidv4 } from 'uuid';






export const closeFolderModal  = () =>  {
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
   let curentTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
   title.value = ''
   description.value = ''

   app.removeChild(modal)
   /* Fix removing no Task Btn when clicking cancel on first task modal */
   if (curentTasks.length < 1) {
    if(noTaskDiv){
      noTaskDiv.style.display =''}
  }


}



// Get Tasks //
const myTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function Task(title, description, dueDate, priority, folder, completed, id, folderId) {
    this.title = title,
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.folder = folder
    this.completed = completed
    this.id = id;
    this.folderId = folderId;
}

// Set Tasks //
 export const addTask  = () =>  {

  let selectElement = document.getElementById('SelectFolder');
  let selectedOption = selectElement.options[selectElement.selectedIndex];

   let title = document.getElementById('taskInput-input').value
   let description = document.getElementById('taskInput-textarea').value
   let dueDate = document.getElementById('taskInput-selectBtn').value
   let priority = document.getElementById('setPriority').value
   let folder = selectElement.value
   let app = document.getElementById('content')
   let modal = document.getElementById('noTaskDiv')
   let completed = false
   let id = uuidv4()
   let folderId = selectedOption.getAttribute('data-id')

   if(title.input != '' && description != ''){
   myTasks.push(new Task(title, description, dueDate, priority, folder, completed, id, folderId))
   localStorage.setItem("tasks", JSON.stringify(myTasks));
   closeTaskModal()
   taskElement(new Task(title, description, dueDate, priority, folder, completed, id, folderId))
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
    selectFolderBtn: createElementType('SelectFolder', 'select', 'selectDrop'),
    setPriorityBtn: createElementType('setPriority', 'select', 'selectDrop'),
    addBtn: createElementType('addBtn', 'button', ''),
    cancelBtn: createElementType('cancelBtn', 'button', ''),
    setDate: createElementType('taskInput-selectBtn', 'input', 'date-select'),


    get taskInput() {
        let noTaskDiv = document.getElementById('noTaskDiv')
        if(noTaskDiv){
        noTaskDiv.style.display ='none'}
        const folders = JSON.parse(localStorage.getItem("folders") || "[]");

        this.titleInput.placeholder = "Title"
        this.titleInput.addEventListener('input', this.checkInput);
        this.textArea.placeholder = "Description"
        this.textArea.addEventListener('input', this.checkInput);
        this.setDate.innerText = "Due Date"
        this.setDate.type = "date"
        let setFolders = false;
        let folderSelect = ''
        folders.forEach( folder => {
          folderSelect += `<option data-id='${folder.id}' value='${folder.name}'> ${folder.name}</option>`;
          return folderSelect
        }
        )
        this.selectFolderBtn.innerHTML = `
        <option value="Not Set"selected>Not Set</option>${folderSelect}`

        this.setPriorityBtn.innerHTML = `
        <option value="Not Set"selected>Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      `;

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
        this.cancelBtn.addEventListener('click',closeFolderModal)
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