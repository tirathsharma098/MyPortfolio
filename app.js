
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