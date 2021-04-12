"use strict";

let wrapper = document.getElementById('wrapper');
let inner = document.getElementById('inner');
let email = document.getElementById('email');
let formResult = document.getElementById('form-result');
let form = document.querySelector('form.form');
let button = document.querySelector('form.form button');

wrapper.addEventListener('click', function (event) {
    let span = wrapper.querySelector('span');
    let clone = span.cloneNode(true);
    wrapper.appendChild(clone);
});

inner.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("Le lien a été cliqué");
});

email.addEventListener('keyup', fillFormResult);
email.addEventListener('change', fillFormResult);


button.setAttribute('type', 'submit');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    fillFormResult();
    console.log(email.value);
});

function fillFormResult() {
    formResult.textContent = email.value;
}
