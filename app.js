'use strict'

let modalBtn = document.querySelector('.modal1');
let modalBtn2 = document.querySelector('.modal2');
let modalBtn3 = document.querySelector('.modal3');

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

let closeBtn = document.querySelector('.closeBtn');
let body = document.querySelector('body');


const addModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const removeModal = function(e) {
    if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden')
            overlay.classList.add('hidden')}
}




modalBtn.addEventListener("click", addModal);
modalBtn2.addEventListener("click", addModal);
modalBtn3.addEventListener("click", addModal);

closeBtn.addEventListener('click', removeModal);
overlay.addEventListener('click', removeModal);

document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        removeModal();
    }
});





