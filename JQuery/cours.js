"use strict";

let links = $('a');
// console.log(links);

let footers = $('#footer');
// console.log(footers);

let articles = $('.article');
// console.log(articles);

let paragraphs = $("article p:nth-child(2)");
// console.log(p);

links.on('click', function (event) {
    event.preventDefault();

    // return false; // équivalent au preventDefault, mais uniquement en JQuery
});

paragraphs.hover(event => {
    console.log('Vous entrez');
}, event => {
    console.log('Vous sortez');
});

// Equivalent avec 2 événements
//
// paragraphs.on('mouseenter', function () {
//     console.log('Vous entrez');
// });
//
// paragraphs.on('mouseleave', function () {
//     console.log('vous sortez');
// })
