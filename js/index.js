// Your code goes here

//Variables

const header = document.querySelector('header');
const nav = document.querySelector('nav')
const body = document.querySelector('body');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const funnerBus = document.querySelector('header, nav, button');
const creeperNav = document.querySelector('main-navigation');

console.log(funnerBus);


//New Nav appendChild
let newNav = document.createElement('button');
newNav.textContent = 'FUNNER BUS';
nav.appendChild(newNav);
newNav.style.fontFamily = "Eater";
newNav.style.fontSize = "20px";

//Fix Nav Style

nav.style.width ="80%";


//Event Listener 1
funnerBus.addEventListener ('click', e => {
    header.style.backgroundColor = "red";
    body.style.fontFamily = "Eater";
    body.style.backgroundColor = "Black";
    body.style.color = "white";
    headings.style.fontFamily = "Creepster";
})

//Event Listener 2


