import { createElementType } from "./utils";



export const taskInput = {
    main: createElementType('taskInput-main', 'div'),
    titleInput: createElementType('taskInput-input', 'input'),
    textArea: createElementType('taskInput-textarea', 'textarea'),
    btnArea: createElementType('taskInput-btnArea', 'div'),
    selectFolderBtn: createElementType('tasInput-selectBtn', 'button'),
    setPriorityBtn: createElementType('tasInput-selectBtn', 'button'),
    setDate: createElementType('tasInput-selectBtn', 'button'),

    get taskInput() {
        this.main.appendChild(this.titleInput);
        this.main.appendChild(this.textArea);
       
       
        return this.main;
      }
}