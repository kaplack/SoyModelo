const ham = document.querySelector('.menu-mobile');
const mobileMenu= document.querySelector('.menu-bar');
const close = document.querySelector('.menu-mobile__close');


ham.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
});

close.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
})