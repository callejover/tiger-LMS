(function () {

    "use strict";

    const section = document.querySelectorAll(".section.highlight");
    const links = document.querySelectorAll(".highlight");
    const header = document.querySelector("#dots");
    const topPosOffset = header.clientHeight;

    let lastKnownScrollPos = 0;
    let scrollTicking = false;

    // Highlight function
    function highlight(scrollPos) {

        for (let i = 0; i < section.length; i++) {

            let topPosition = section[i].getBoundingClientRect().y;
            let height = section[i].offsetHeight;
            let marginTop = window.getComputedStyle(section[i], null).getPropertyValue("margin-top").replace(/px/g, '');

            let start = (topPosition - (marginTop / 2) - topPosOffset) + window.scrollY;
            let end = (topPosition + height) - (marginTop / 2) - topPosOffset + window.scrollY;

            // Hightlight if top hits the start of the element
            if (scrollPos > start) {
                links[i].classList.add('active');
                links[i].classList.remove('inactive');
            } else {
                links[i].classList.remove('active');
                links[i].classList.add('inactive');
            }

            // Hightlight if top hits the end of the element
            if (scrollPos > end) {
                links[i].classList.remove('active');
                links[i].classList.add('inactive');
            }
        }
    }

    // Function for scroll events
    function highlightLastKnownScrollPos(event) {
        lastKnownScrollPos = window.scrollY;
        if (!scrollTicking) {
            window.requestAnimationFrame(function () {
                highlight(lastKnownScrollPos);
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    window.addEventListener("scroll", highlightLastKnownScrollPos, false);
    highlight(lastKnownScrollPos);

})();
