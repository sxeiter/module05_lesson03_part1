'use strict';

const lists = document.querySelector('.list');
const body = document.querySelector('body');
body.append(lists);

const addLink = () => {
    const userInput = prompt('Введите что-нибудь')
    if (userInput === 'del') {
        lists.removeChild(lists.lastChild)
    } else if (userInput === 'clear') {
        lists.replaceChildren();
    } else if (userInput === null || userInput === 'exit') {
        return null;
    } else if (userInput.trim() !== '') {
        lists.insertAdjacentHTML('beforeend', `<li>${userInput}</li>`);        
    }
    addLink();
}
addLink();