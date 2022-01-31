const ham = document.querySelector(".menu-mobile");
const mobileMenu = document.querySelector(".menu-bar");
const close = document.querySelector(".menu-mobile__close");

ham.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

close.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
/*
let nombre = prompt("Cual es tu nombre?");
let yearOfBirth = parseInt(prompt("Ingresa Año de nacimiento"));

let mensaje = "Mi nombre es " + nombre + " y tengo " + (2022 - yearOfBirth);
alert(mensaje);

let i = 0;

i = i + 1;

console.log(i);

const r = 0;

r = r + 1;

console.log(r);*/
