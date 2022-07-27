// Toggle Style Switcher 

const styleSwitcherToggle  = document.querySelector('.style-switch-toggler');
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll 

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


// Theme colors 

const alternateStyle = document.querySelectorAll(".alternate-style");


function setActiveStyle(color) {
    alternateStyle.forEach(style => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}