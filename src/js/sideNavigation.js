

export function createDiv(id) {
    const div = document.createElement('div');
    div.setAttribute('id', id);
    return div;
}


export const sideNav  = createDiv('sideNav')