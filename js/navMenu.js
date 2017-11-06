//First try using jQuery. Save for new attempt.

// $(document).ready(() => {
    
//     $('#meny-button').on('click', () => {
//         $('.hidden-max-500').toggle();
//         });
    
//     });


// ======================================================================================

/*
    When clicking on the nav-button-max-500
    then the hidden-max-500 changes to display: flex
*/

let hiddenNavButton = document.querySelector("#nav-button-max-500");    // Gets the nav-button-max-500 element
let hiddenNavWarp = document.querySelector(".hidden-max-500");          // Gets the hidden-max-500 element

function navShowHide() { // Change .hidden-max-500 element to display: flex
    if (hiddenNavWarp.style.display == "flex") {
        hiddenNavWarp.style.display = "none";     
    } else {
        hiddenNavWarp.style.display = "flex";       
    }
}

/*
    When resizing the window and the menu is toggled and hidden
    Reset the state so it aper on the desktop view again 
*/
function resizeWindow() {
    if (window.innerWidth < 500) {
        hiddenNavWarp.style.display = "none";     
    } else {
        hiddenNavWarp.style.display = "flex";          
    }
}


// Call functions with event listener 
window.addEventListener("resize", resizeWindow);
hiddenNavButton.addEventListener("click", navShowHide);
