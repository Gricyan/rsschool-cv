import { Project } from "../js/Project";
import data from "../js/projects";
import "./switcher";


window.onload = () => {
    renderProjectsToDom();
};

const renderProjectsToDom = () => {

    const projectsContainer = document.querySelector(".project__items");
    generateProjects(data).forEach(project => {
        projectsContainer.append(project.generateProject());
    });        
};

const generateProjects = (data) => {
    let projects = [];
    data.forEach(project => {
        projects.push(new Project(project));
    });
    return projects;
};


/* Mobile menu handler */

$(document).ready(function() {
    $(".header__burger, .menu__list").click(function() {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("menu-active");
    });
});

/* To top btn handler */

const toTopBtn = document.querySelector(".to-top-btn");
// const footer = document.querySelector(".footer");


window.addEventListener("scroll", () => {
    if (window.scrollY >= screen.height) {
        toTopBtn.classList.add("visible");
        
        let bodyHeight = document.querySelector("body").offsetHeight;       
        let bodyWidth = document.querySelector("body").offsetWidth;       
        let footerHeight = document.querySelector("footer").offsetHeight; 
        let totalHeight = bodyHeight - (screen.height + window.scrollY) + footerHeight; 

        if (totalHeight < 15 || bodyWidth < 425 && totalHeight < 40) {
            toTopBtn.classList.add("upper");
        } else {
            toTopBtn.classList.remove("upper");
        }
    } else {
        toTopBtn.classList.remove("visible");
    }
});

toTopBtn.addEventListener("click", toTopScroll);

function toTopScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Show date */

// const d = new Date();
// let year = d.getFullYear();
// document.getElementById("year").innerHTML = year;


/* Intro print text */


// const frontendText = ["Front-end developer ", "Front-end developer ", "Responsible         ", "Stress-tolerant     ", "Communicative       ", "Critical Thinking   ", "Willingness to learn", "And other good words"];

// let rowNumber = 0;
// const printText = () => {
//     document.querySelector(".intro__text_frontend").innerHTML = "";
//     let counter = 0;  

//     if (rowNumber < frontendText.length - 1) {
// setInterval(() => {            
//         if (counter < frontendText[rowNumber].length) {
//             document.querySelector(".intro__text_frontend").innerHTML += frontendText[rowNumber][counter];    
//             counter++;
//         }
//     }, 150);
//     rowNumber++;
     
//     } else {
//         rowNumber = 0;
//     }  
// };

// setInterval(() => {        
//     printText();         
// }, 5000);