//First try using jQuery. Save for new attempt.

// $(document).ready(() => {
    
//     $('#meny-button').on('click', () => {
//         $('.hidden-max-500').toggle();
//         });
    
//     });


// ======================================================================================

let hiddenNavButton = document.querySelector(".menuButton");    // Gets the nav-button-max-500 element
let hiddenNavWarp = document.querySelector(".hidden-max-500");          // Gets the hidden-max-500 element


// When the window loads, display navigation none

window.onload = function() {
    if (window.innerWidth < 1200) {
        hiddenNavWarp.style.display = "none";     
    } else {
        hiddenNavWarp.style.display = "flex";       
    } 
}

/*
    When clicking on the nav-button-max-500
    then the hidden-max-500 changes to display: flex
*/

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
    if (window.innerWidth < 1200) {
        hiddenNavWarp.style.display = "none";     
    } else {
        hiddenNavWarp.style.display = "flex";       
    } 
    
}



// Call functions with event listener 
window.addEventListener("resize", resizeWindow);
hiddenNavButton.addEventListener("click", navShowHide);



// =========================================================================================================================
// Nav Hamburger closing script
// =========================================================================================================================


function menuButton(x) {
    x.classList.toggle("change");
}

// =========================================================================================================================
// Return to last page script
// =========================================================================================================================


// Page back button for evaluation pages
function goBack() {
	window.history.back(); //Allows the user to return to recent page
}
