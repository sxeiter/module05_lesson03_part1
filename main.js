'use strict';

const lists = document.querySelector('.list');

const addLink = () => {
    const userInput = prompt('Введите что-нибудь')
    const createLI = () => {
        lists.insertAdjacentHTML('beforeend', `<li>${userInput}</li>`);
    };
    const delLI = () => {
        lists.removeChild(lists.lastChild)
    };
    const clearUL = () => {
        lists.replaceChildren();
    }

    if (userInput === 'del') {
        delLI();
    } else if (userInput === 'clear') {
        clearUL();
    } else if (userInput === null || userInput === 'exit') {
        return null;
    } else if (userInput.trim() !== '') {
        createLI();        
    }
    addLink();
}
addLink();