$(document).ready(function() {
    $(".header__burger, .menu__list").click(function() {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

/* Intro print text */

const frontendText = ["Front-end developer ", "Front-end developer ", "Responsible         ", "Stress-tolerant     ", "Communicative       ", "Critical Thinking   ", "Willingness to learn", "And other good words"];

// [
//     ["F", "r", "o", "n", "t", "-", "e", "n", "d", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"],
//     ["J", "u", "s", "t", " ", "a", " ", "G", "o", "o", "d", " ", "g", "u", "y", " ", " ", " ", " "],
//     ["F", "r", "o", "n", "t", "-", "e", "n", "d", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", " "],
//     ["G", "o", "o", "d", " ", "g", "u", "y", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
// ];
let rowNumber = 0;
const printText = () => {
    document.querySelector(".intro__text_frontend").innerHTML = "";
    let counter = 0;  

    if (rowNumber < frontendText.length - 1) {
setInterval(() => {            
        if (counter < frontendText[rowNumber].length) {
            document.querySelector(".intro__text_frontend").innerHTML += frontendText[rowNumber][counter];    
            counter++;
        }
    }, 150);
    rowNumber++;
    console.log("rowNumber ", rowNumber);    
    console.log("frontendText ", frontendText);   


     
    } else {
        rowNumber = 0;
    }

     

};

setInterval(() => {        
    printText();         
}, 5000);