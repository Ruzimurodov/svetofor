const elRed = document.querySelector(".red");
const elYellow =document.querySelector(".yellow");
const elGreen = document.querySelector(".green");

let secund = 3;

setTimeout(() => {
    elRed.classList.add("red--active");
},2000)

setTimeout(() => {
    elYellow.classList.add("yellow--active");
    elRed.classList.remove("red--active");
},5000)

setTimeout(() => {
    elGreen.classList.add("green--active");
    elYellow.classList.remove("yellow--active");
},8000)

setTimeout(() => {
    elYellow.classList.add("yellow--active");
    elGreen.classList.remove("green--active");
},11000)

setTimeout(() => {
    elRed.classList.add("red--active");
    elYellow.classList.remove("yellow--active");
},14000)

setInterval(() => {
    setTimeout(() => {
        elRed.classList.add("red--active");
        elRed.textContent = --secund
    },2000)
    
    setTimeout(() => {
        elYellow.classList.add("yellow--active");
        elRed.classList.remove("red--active");
    },5000)
    
    setTimeout(() => {
        elGreen.classList.add("green--active");
        elYellow.classList.remove("yellow--active");
    },8000)
    
    setTimeout(() => {
        elYellow.classList.add("yellow--active");
        elGreen.classList.remove("green--active");
    },11000)
    
    setTimeout(() => {
        elRed.classList.add("red--active");
        elYellow.classList.remove("yellow--active");
    },14000)
},13000)

