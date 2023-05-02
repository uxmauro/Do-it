

export function createElementType(id, typeOfElement) {
    const elementType = document.createElement(typeOfElement);
    elementType.setAttribute('id', id);   
    return elementType;
}




/* 
export function createButton(id) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    return button;
} */



const TodoBtn ={
    main: createElementType('sideNavTodoBtn', 'button'),    
    icon: createElementType('todo-icon', 'div'),
    p:    createElementType('', 'p'),
} 
TodoBtn.main.appendChild(TodoBtn.icon)
TodoBtn.main.appendChild(TodoBtn.p)
TodoBtn.p.textContent = 'ToDos';

const CalendarBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('calendar-icon', 'div'),
   p:    createElementType('', 'p'),
}
CalendarBtn.main.appendChild(CalendarBtn.icon)
CalendarBtn.main.appendChild(CalendarBtn.p)
CalendarBtn.p.textContent = 'Calendar';

const PriorityBtn = {
   main: createElementType('sideNavTodoBtn', 'button'),
   icon: createElementType('priority-icon', 'div'),
   p:    createElementType('', 'p'),
}
PriorityBtn.main.appendChild(PriorityBtn.icon)
PriorityBtn.main.appendChild(PriorityBtn.p)
PriorityBtn.p.textContent = 'Priority';

const mainButtons = createElementType('mainButtonArea', 'div')


mainButtons.appendChild(TodoBtn.main)
mainButtons.appendChild(CalendarBtn.main)
mainButtons.appendChild(PriorityBtn.main)

const Divider = createElementType('dotted-lines', 'div')

const FoldersArea = createElementType('folder-area', 'div')

const AddFolderBtn ={ 
    
    main: createElementType('Newfolder', 'button'),
    icon: createElementType('priority-icon', 'div'),
    p:    createElementType('', 'p'),

}
AddFolderBtn.main.appendChild(AddFolderBtn.icon)
AddFolderBtn.main.appendChild(AddFolderBtn.p)
AddFolderBtn.p.textContent = 'New Folder';


export const sideNav  = createElementType('sideNav', 'div')

sideNav.appendChild(mainButtons)
sideNav.appendChild(Divider)
sideNav.appendChild(FoldersArea)
sideNav.appendChild(AddFolderBtn.main)
