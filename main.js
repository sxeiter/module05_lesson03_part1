'use strict';
const lists = document.querySelector('.list');
while (true) {
    let userInput = prompt("Введите строку:");

    if (userInput === null || userInput.toLowerCase() === "exit") {
      break;
    }
    
    userInput = userInput.trim();

    if (userInput.length > 0) {
      const list = document.querySelector(".list");
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(userInput));
      list.appendChild(listItem);
    } else if (userInput.toLowerCase() === "del") {
      const listItems = document.getElementsByTagName("li");
      if (listItems.length > 0) {
        listItems[listItems.length - 1].remove();
      }
    } else if (userInput.toLowerCase() === "clear") {
      const list = document.getElementById("list");
      list.innerHTML = "";
    }
  }