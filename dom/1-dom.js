"use strict";

let footer = document.querySelector('footer#footer');

// let footer2 = document.getElementById('footer');
// console.log(footer2);

footer.classList.add('footer');

let main = document.querySelector('main#main');
// main.innerHTML = main.innerHTML + '<p>Ceci est un contenu <strong>très important</strong></p>';

let newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Ceci est un contenu <strong>très important</strong>';

main.appendChild(newParagraph);

let paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = '#FF0000';
    paragraphs[i].classList.replace('paragraph', 'text');
}

let newList = document.createElement('ul');
newList.setAttribute('id', 'important-list');
newList.classList.add('list');

for (let j = 0; j < 4; j++) {
    let newLi = document.createElement('li');
    newLi.classList.add('list__element');
    newLi.dataset.num = j + 1;
    newLi.textContent = "Ceci est l'élément n°" + j;
    newList.appendChild(newLi);
}

let header = document.getElementById('header');
header.appendChild(newList);
