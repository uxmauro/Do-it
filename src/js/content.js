import { createElementType } from "./Components/utils";


 const noTask = {
    main: createElementType('noTaskDiv', 'div'),
    button: createElementType('noTaskBtn', 'button'),
    header: createElementType('noTaskH3', 'h3')
 }

noTask.header.textContent = 'Create your first ToDo'
noTask.main.appendChild(noTask.header)
noTask.main.appendChild(noTask.button)







export const contentSection  = createElementType('content', 'div')

contentSection.appendChild(noTask.main)