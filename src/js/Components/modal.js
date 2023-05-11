import { createElementType } from "./utils";
import { createFolder } from "../sideNavigation";


export const closeModal  = () =>  {
   let app = document.getElementById('app')
   let modal = document.getElementById('foldermodal-bg')
   let input = document.getElementById('folderInput')
   input.value = ''
   app.removeChild(modal)
   
   
}

export const folderModal = {
    main: createElementType('foldermodal-bg', 'div'),
    modal: createElementType('foldermodal', 'div'),
    h3: createElementType('', 'h3'),
    inputSection: createElementType('inputSection', 'div'),
    label: createElementType('folderLabel', 'label'),
    inputField:  createElementType('folderInput', 'input'),
    addBtn: createElementType('foldermodal-add', 'button'),
    cancelBtn: createElementType('foldermodal-cancel', 'button'),
   

    get fullModal() {
        this.h3.textContent = 'New Folder'
        this.label.setAttribute('for', 'folderName');
        this.inputField.setAttribute('type', 'text');
        this.inputField.addEventListener('input', this.checkInput);
        this.label.textContent = 'Folder Name'
        this.addBtn.textContent = 'Add'
        this.cancelBtn.textContent = 'Cancel'
        this.cancelBtn.addEventListener('click',closeModal)
        this.main.appendChild(this.modal);
        this.modal.appendChild(this.h3)
        this.modal.appendChild(this.inputSection)
        this.inputSection.appendChild(this.label)
        this.inputSection.appendChild(this.inputField)
        this.inputSection.appendChild(this.addBtn)
        this.inputSection.appendChild(this.cancelBtn)
       
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


