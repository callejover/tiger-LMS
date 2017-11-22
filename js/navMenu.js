
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


// =========================================================================================================================
// Auto hide menu
// =========================================================================================================================


jQuery(document).ready(function($){
	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();

	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});


	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 )
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop, x) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');

	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
        hiddenNavWarp.style.display = "none";
        hiddenNavButton.classList.remove("change");
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

		if (previousTop >= currentTop ) {
	    	//if scrolling up...
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    } else {
	    	//if scrolling down...
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}
});
