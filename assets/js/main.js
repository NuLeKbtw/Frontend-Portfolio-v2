console.log("check about working")

let namemy = document.querySelector(".name")


namemy.addEventListener ("mouseenter", function() {
    namemy.style.transition = "0.5s"
    namemy.style.fontSize = "52px"

});

namemy.addEventListener ("mouseleave", function() {
    namemy.style.transition = "0.5s"
    namemy.style.fontSize = "48px"
    
});


let melogo = document.querySelector(".logo")

melogo.addEventListener ("mouseenter", function() {
    melogo.style.transition = "0.5s"
    melogo.style.boxShadow = "0px 0px 20px white";
});

melogo.addEventListener ("mouseleave", function() {
    melogo.style.transition = "0.5s"
    melogo.style.boxShadow = "0px 0px 0px white";
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

let project1 = document.querySelector(".project1");
let project2 = document.querySelector(".project2");
let project3 = document.querySelector(".project3");


project1.addEventListener ("mouseenter", function() {
    project1.style.transition = "0.5s"
    project1.style.scale = "110%"
});

project1.addEventListener ("mouseleave", function() {
    project1.style.transition = "0.5s"
    project1.style.scale = "100%"
});

project2.addEventListener ("mouseenter", function() {
    project2.style.transition = "0.5s"
    project2.style.scale = "110%"
});

project2.addEventListener ("mouseleave", function() {
    project2.style.transition = "0.5s"
    project2.style.scale = "100%"
});

project3.addEventListener ("mouseenter", function() {
    project3.style.transition = "0.5s"
    project3.style.scale = "110%"
});

project3.addEventListener ("mouseleave", function() {
    project3.style.transition = "0.5s"
    project3.style.scale = "100%"
});

let skill = document.querySelectorAll("#skills")
let htmlskl = document.querySelector(".html-name")
let cssskl = document.querySelector(".css-name")
let jsskl = document.querySelector(".js-name")


skill.forEach(skills => {
    skills.addEventListener("mouseenter", function(){
        this.style.transition = "0.5s"
        this.style.scale = "110%"
        htmlskl.style.textShadow = "0 0 20px orange"
        htmlskl.style.transition = "0.5s"
        cssskl.style.textShadow = "0 0 20px cyan"
        cssskl.style.transition = "0.5s"
        jsskl.style.textShadow = "0 0 20px yellow"
        jsskl.style.transition = "0.5s"

    })
    skills.addEventListener("mouseleave", function(){
        this.style.transition = "0.5s"
        this.style.scale = "100%"
        htmlskl.style.textShadow = "0 0 0 orange"
        htmlskl.style.transition = "0.5s"
        cssskl.style.textShadow = "0 0 0 cyan"
        cssskl.style.transition = "0.5s"
        jsskl.style.textShadow = "0 0 0 orange"
        jsskl.style.transition = "0.5s"
    })
})

$('#name').hover(function() {
    $(this)
    .css('width', '300%')
    .css('transition', '0.5s')
    .css('cursor', 'pointer')
    },
    function(){
    $(this)
    .css('width', '200%')
    .css('transition', '0.5s')
    .css('cursor', 'pointer')
})

$('#e-mail').hover(function() {
    $(this)
    .css('width', '300%')
    .css('transition', '0.5s')
    .css('cursor', 'pointer')
    },
    function(){
    $(this)
    .css('width', '200%')
    .css('transition', '0.5s')
    .css('cursor', 'pointer')
})

$('.sendd').hover(function(){
    $(this)
    .css({
        'width': '300px',
        'transition': '0.5s',
    })
    },
    function(){
        $(this).css({
            'width': '200px',
            'transition': '0.5s',
        })
    }
)