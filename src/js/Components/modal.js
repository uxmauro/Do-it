import { createElementType } from "./utils";
import { createFolder } from "../sideNavigation";


export const closeModal  = () =>  {
   let app = document.getElementById('app')
   let modal = document.getElementById('foldermodal-bg')
   let input = document.getElementById('folderInput')
   input.value = ''
   app.removeChild(modal)
   
   
}


//Add Task Modal
export const addTaskModal = {

    main: createElementType('taskInput-main', 'div'),
    firstRow: createElementType('taskRow', 'div'),
    secondRow: createElementType('taskRow', 'div'),
    topLeft: createElementType('','div', 'taskInput-topLeft' ),
    closeButton: createElementType('', 'button', 'taskInput-close'),
    titleInput: createElementType('taskInput-input', 'input'),
    textArea: createElementType('taskInput-textarea', 'textarea'),
    btnArea: createElementType('', 'div', 'taskInput-btnArea'),
    btnAreaTop: createElementType('taskInput-btnArea-Bottom', 'div'),
    btnAreaBottom: createElementType('taskInput-btnArea-Bottom', 'div'),
    selectFolderBtn: createElementType('taskInput-selectBtn', 'button'),
    setPriorityBtn: createElementType('taskInput-selectBtn', 'button'),
    setDate: createElementType('taskInput-selectBtn', 'button'),

    get taskInput() {
        this.titleInput.placeholder = "Title"
        this.textArea.placeholder = "Description"
        this.setDate.innerText = "Due Date"
        this.selectFolderBtn.innerText = "Folder"
        this.setPriorityBtn.innerText = "setPriorityBtn"
        this.main.appendChild(this.firstRow);
        this.main.appendChild(this.secondRow);
        this.firstRow.appendChild(this.topLeft)
        this.firstRow.appendChild(this.btnArea)
        this.topLeft.appendChild(this.closeButton)
        this.topLeft.appendChild(this.titleInput)
        this.secondRow.appendChild(this.textArea)
        this.btnArea.appendChild(this.setDate)
        this.btnAreaBottom.appendChild(this.setPriorityBtn)
        this.btnAreaBottom.appendChild(this.selectFolderBtn)
        this.btnArea.appendChild(this.btnAreaBottom)
        return this.main;
      }
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
            addbtn.addEventListener('click',createFolder)
        }
    
    },
} 


