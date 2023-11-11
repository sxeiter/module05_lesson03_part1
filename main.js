'use strict';

const ul = document.createElement('ul');
const body = document.querySelector('body');
body.append(ul);

const userInput = () => {
   const ttt = prompt('Введите что-нибудь');
   return ttt;
};
const createLI = (text) => {
    ul.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
};
const delLI = () => {
    ul.removeChild(ul.lastChild)
};
const clearUL = () => {
    ul.replaceChildren();
};

const addLink = () => {
   const text = userInput();

    if (text === 'del') {
        delLI();
    } else if (text === 'clear') {
        clearUL();
    } else if (text === null || text === 'exit') {
        return null;
    } else if (text.trim() !== '') {
        createLI(text);        
    }
    addLink();
};
addLink();