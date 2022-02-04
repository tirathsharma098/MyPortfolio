
// This code is for showing the current year in the footer
document.getElementById("currentYear").innerText=new Date().getFullYear();

// When User click on social media icon

const socialIcon = document.querySelectorAll("footer .platform .platformItem img");

socialIcon.forEach( icon => 
    icon.addEventListener( 'click', ()=>{
        icon.style.backgroundColor = "#ffb5a7";
        icon.style.border = "2px solid #ffb5a7";
    })    
);

// Here is code to make heading's title radius change every time

const shapes = document.querySelectorAll(".shapeConvert");

changeShape();

function changeShape(){
    let firstNum = Math.floor( Math.random()*150 ) + 50;
    let secondNum = Math.floor( Math.random()*150 ) + 50;
    let thirdNum = Math.floor( Math.random()*150 ) + 50;
    let fourthNum = Math.floor( Math.random()*150 ) + 50;
    let fifthNum = Math.floor( Math.random()*150 ) + 50;
    let sixthNum = Math.floor( Math.random()*150 ) + 50;
    let seventhNum = Math.floor( Math.random()*150 ) + 50;
    let eighthNum = Math.floor( Math.random()*150 ) + 50;
    shapes.forEach( shape =>
        shape.style.borderRadius = `${firstNum}px ${secondNum}px ${thirdNum}px ${fourthNum}px/${fifthNum}px ${sixthNum}px ${seventhNum}px ${eighthNum}px`
    );
    
}

setInterval(changeShape, 2000);


// Here is a code to provide an alert of nobeckend right now
// And to prevent default of form

const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', e => {
    e.preventDefault();    
    window.alert("Ohhh Oooo! I Apologise but have't added Backend Right now Hence This form does't Work.\n ):");
});
