// document.addEventListener("DOMContentLoaded", function () {
//     const crevasses = document.querySelector(".crevasses");
//     const crevassesDef = document.querySelector(".crevasses-def");

//     if (crevasses && crevassesDef) {
//         crevasses.addEventListener("mouseenter", function () {
//             crevassesDef.style.color = "red";
//         });

//         crevasses.addEventListener("mouseleave", function () {
//             crevassesDef.style.color = "white"; // Resets to default
//         });
//     }
// });

let crevasses = document.querySelector(".crevasses");
        let crevassesDef = document.querySelector(".crevasses-def");

        crevasses.addEventListener("mouseenter", function () {
          crevassesDef.style.display = "block";
        });

        // Hide the div when the mouse leaves both 
        crevasses.addEventListener("mouseleave", function () {
            setTimeout(() => {
                if (!crevassesDef.matches(":hover")) {
                    crevassesDef.style.display = "none";
                }
            }, 100); //for transition
        });

        crevassesDef.addEventListener("mouseleave", function () {
            crevassesDef.style.display = "none";
        });



let seracs = document.querySelector(".seracs");
        let seracsDef = document.querySelector(".seracs-def");

        seracs.addEventListener("mouseenter", function () {
            seracsDef.style.display = "block";
        });

        // Hide the div when the mouse leaves both 
        seracs.addEventListener("mouseleave", function () {
            setTimeout(() => {
                if (!seracsDef.matches(":hover")) {
                    seracsDef.style.display = "none";
                }
            }, 100); //for transition
        });

        seracsDef.addEventListener("mouseleave", function () {
            seracsDef.style.display = "none";
        });