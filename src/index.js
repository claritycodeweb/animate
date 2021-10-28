import "./styles.css";

function randomRgba(i) {
    const r = i * 15;
    const g = 255 - i * 40; 
    const b = 255 - i;
    return `rgb(${r} ${g} ${b})`;
}

window.onload = function() {
 setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
 }, 1000);
}

var navItems = document.querySelectorAll('.menu-item');
var viewsItems = document.querySelectorAll('.view');

const onViewChange = (evt)=> {
    transform(evt.target.dataset.id);
}

const transform = (to=(location.hash || 1)) => {
    for (let i = 0; i < viewsItems.length; i++) {
        const element = viewsItems[i];
        const negative =  i - to;   
        element.style.transform = `translateY(${negative*100}%)`;
        element.style.backgroundColor = randomRgba(i);
    }
}

transform();

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', onViewChange, false);
}



