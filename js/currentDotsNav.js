(function () {

    "use strict";

    const section = document.querySelectorAll(".section.highlight"); // Get all sections that have this class
    const links = document.querySelectorAll(".highlight"); // Get all links for each section
    const headerHeight = document.querySelector("header"); // Gets the hight of header
    const topPosOffset = headerHeight.clientHeight; // Get height from header-element to setting an offset for triggering the highlight before the content top-edge

    // Highlights the links for the corresponding section
    function highlight() {

        let scrollPos = window.scrollY; // Store current scroll position

        // Loop trough the sections and navigation links
        for (let i = 0; i < section.length; i++) {

            let topPosition = section[i].getBoundingClientRect().y; // Gets the "space value" from "element top" to the "window top"
            let height = section[i].offsetHeight; // Gets the height of the section

            // If section has margin get values
            let marginTop = window.getComputedStyle(section[i], null).getPropertyValue("margin-top").replace(/px/g, '') / 2;

            // Start position calculation
            let elementStartPos = (topPosition + window.scrollY) - (marginTop + topPosOffset);
            // End Position calculation
            let elementEndPos = (topPosition + window.scrollY + height) - (marginTop + topPosOffset);

            // Hightlight if window top hits the start of the element
            if (scrollPos >= elementStartPos) {
                links[i].classList.add('active'); // Adds the active link
                links[i].classList.remove('inactive'); // Current state of al highlights
            } else { // Stop highlighting if the position is less then start position
                links[i].classList.remove('active'); // Removes the active class
                links[i].classList.add('inactive'); // Adds the inactive class
            }

            // Stop hightlight if window-top hits the end of the element
            if (scrollPos >= elementEndPos) {
                links[i].classList.remove('active'); // Removes the active class
                links[i].classList.add('inactive'); // Adds the inactive class
            }
        }
    }

    // When user is scrolling
    window.addEventListener("load", highlight, false);
    window.addEventListener("scroll", highlight, false);

})();