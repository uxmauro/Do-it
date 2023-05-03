export function createElementType(id, typeOfElement) {
    const elementType = document.createElement(typeOfElement);
    elementType.setAttribute('id', id);   
    return elementType;
}
