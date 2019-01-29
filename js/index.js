// Your code goes here

//Variables

const header = document.querySelector('header');
const nav = document.querySelector('nav')
const body = document.querySelector('body');
//const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const funnerBus = document.querySelector('header, nav, button');
const busImage = document.querySelector('.intro img');
const intro = document.querySelector('.intro');
const mapImage = document.querySelector('.content-section img');
const boatImg = document.querySelector('.inverse-content img');
const destinationImg = document.querySelector('.content-destination img');


console.log(boatImg);


//New Nav appendChild
let newNav = document.createElement('button');
newNav.textContent = 'FUNNER BUS';
nav.appendChild(newNav);
newNav.style.fontFamily = "Eater";
newNav.style.fontSize = "20px";

//Fix Nav Style

nav.style.width = "80%";


//Event Listener 1
funnerBus.addEventListener('click', e => {
    header.style.backgroundColor = "red";
    body.style.fontFamily = "Eater";
    body.style.backgroundColor = "Black";
    body.style.color = "white";
    //headings.style.fontFamily = "Creepster";

    //Event Listener 2

    busImage.addEventListener('mouseover', e2 => {

        busImage.setAttribute('src', 'img/160906-clowns-in-nc-feature.jpg');
        // let newClown = document.createElement('img');
        // newClown.setAttribute('src', 'img/160906-clowns-in-nc-feature.jpg');
        // intro.appendChild(newClown);
        busImage.style.filter = "grayscale(100%)";
        busImage.style.borderRadius = "10px";

    });


    //Event Listener 3

    mapImage.addEventListener('mouseover', e3 => {

        mapImage.setAttribute('src', 'img/helium_red_ballon.jpg');
        mapImage.style.borderRadius = "10px";

    });

    //Event Listener 4

    boatImg.addEventListener('mouseover', e4 => {

        
        boatImg.setAttribute('src', 'img/Creepy-van.jpg');
        boatImg.style.borderRadius = "10px";

    });

    //Event Listener 5

    destinationImg.addEventListener('mouseover', e4 => {

        
        destinationImg.setAttribute('src', 'img/5f15e5c1ccd5b4a2cedbdf3a1250673a.jpg');
        destinationImg.style.borderRadius = "10px";
        destinationImg.style.textAlign = "Center";

    });


});






