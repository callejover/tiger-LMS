
// Selects the image elements for quick evaluations
let itemImg1 = document.querySelector("#glad img");
let itemImg2 = document.querySelector("#between img");
let itemImg3 = document.querySelector("#sad img");

// Add opacity 50% and removes if current clicked item has opacity
function clickItem1() {
    itemImg2.classList.add("opacity50");
    itemImg3.classList.add("opacity50");
    itemImg1.classList.remove("opacity50");
}

// Add opacity 50% and removes if current clicked item has opacity
function clickItem2() {
    itemImg1.classList.add("opacity50");
    itemImg3.classList.add("opacity50");
    itemImg2.classList.remove("opacity50");
}

// Add opacity 50% and removes if current clicked item has opacity
function clickItem3() {
    itemImg1.classList.add("opacity50");
    itemImg2.classList.add("opacity50");
    itemImg3.classList.remove("opacity50");
}