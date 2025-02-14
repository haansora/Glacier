let elements = ["years", "often", "centuries", "blank"];
let index = 0;

function showText(event) {
    event.preventDefault(); 

    if (index < elements.length) {
        let elem = document.getElementById(elements[index]);
        elem.style.display = "inline"; 
        setTimeout(() => {
            elem.style.opacity = "1"; 
        }, 10); 

        index++;
    }

    if (index === elements.length) {
        document.querySelector(".glacier a").removeEventListener("click", showText);
        setTimeout(() => {
            window.location.href = document.querySelector(".glacier a").href;
        }, 500); 
    }
}
