console.log("check about working")

let namemy = document.querySelector(".name")


namemy.addEventListener ("mouseenter", function() {
    namemy.style.color = "red"
    namemy.style.transition = "0.5s"
    namemy.style.fontSize = "52px"

});

namemy.addEventListener ("mouseleave", function() {
    namemy.style.color = "white"
    namemy.style.transition = "0.5s"
    namemy.style.fontSize = "48px"
    
});

let melogo = document.querySelector(".logo")

melogo.addEventListener ("mouseenter", function() {
    melogo.style.transition = "0.5s"
    melogo.style.boxShadow = "0px 0px 20px red";
});

melogo.addEventListener ("mouseleave", function() {
    melogo.style.transition = "0.5s"
    melogo.style.boxShadow = "0px 0px 0px red";
});
// Counter HTML
let liczba = 0; 

const counter = document.querySelector(".progress-valuehtml")

const Interval = setInterval(() => {
    liczba++;
    counter.textContent = liczba + "%";

    if (liczba >= 100) {
        clearInterval(Interval);

    }
}, 50);
// Counter CSS
let liczbacss = 0; 

const countercss = document.querySelector(".progress-valuecss")

const Intervalcss = setInterval(() => {
    liczbacss++;
    countercss.textContent = liczbacss + "%";

    if (liczbacss >= 65) {
        clearInterval(Intervalcss);

    }
}, 50);
// Counter JS
let liczbajs = 0; 

const counterjs = document.querySelector(".progress-valuejs")

const Intervaljs = setInterval(() => {
    liczbajs++;
    counterjs.textContent = liczbajs + "%";

    if (liczbajs >= 15) {
        clearInterval(Intervaljs);

    }
}, 50);



