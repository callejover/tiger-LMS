(function () {

    "use strict";

    const section = document.querySelectorAll(".section.highlight"); // Get all sections that have this class
    const links = document.querySelectorAll(".highlight"); // Get all links for each section
    const headerHeight = document.querySelector("header"); // Gets the hight of header
    const topPosOffset = headerHeight.clientHeight + 0; // Get height from header-element to setting an offset for triggering the highlight before the content top-edge

    let lastKnownScrollPos = 0; // Set variable to store the "last known scroll position", if page is reloaded it gets the new scroll y position value
    let scrollTicking = false; // Checks if the user is scrolling or not

    // Highlights the links for the corresponding section
    function highlight(scrollPos) {

        // Loop trough the sections and navigation links
        for (let i = 0; i < section.length; i++) {

            // Gets the space from top of section to the window position
            let topPosition = section[i].getBoundingClientRect().y;
            // Gets the height of the section
            let height = section[i].offsetHeight;
            // If section has margin get values
            let marginTop = window.getComputedStyle(section[i], null).getPropertyValue("margin-top").replace(/px/g, '') / 2;

            // Start position calculation
            let start = (topPosition - (marginTop) - topPosOffset) + window.scrollY;
            // End Position calculation
            let end = ((topPosition + height) - (marginTop) - topPosOffset) + window.scrollY;

            // Hightlight if window top hits the start of the element
            if (scrollPos > start) {
                links[i].classList.add('active');       // Adds the active link
                links[i].classList.remove('inactive');  // Current state of al highlights
            } else { // Stop highlighting if the position is less then start position
                links[i].classList.remove('active');    // Removes the active class
                links[i].classList.add('inactive');     // Adds the inactive class
            }

            // Stop hightlight if window-top hits the end of the element
            if (scrollPos > end) {
                links[i].classList.remove('active');    // Removes the active class
                links[i].classList.add('inactive');     // Adds the inactive class
            }
        }
    }

    // Function for scroll events
    function highlightLastKnownScrollPos(event) {
        lastKnownScrollPos = window.scrollY;  // Store the last know scroll position
        if (!scrollTicking) { // when true / user scrolling

            // Method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint
            window.requestAnimationFrame(function () {
                highlight(lastKnownScrollPos); // Runs the highlight function
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    // When user is scrolling
    window.addEventListener("scroll", highlightLastKnownScrollPos, false);
    
    // Run the function for highlight when loading page
    highlight(lastKnownScrollPos);

})();