export function createElementType(id, typeOfElement, className) {
    const elementType = document.createElement(typeOfElement);
    if (id != "") {
        elementType.setAttribute('id', id);   
    }
    if (className != undefined) {
        elementType.setAttribute('class', className)
    }
    return elementType;
}
