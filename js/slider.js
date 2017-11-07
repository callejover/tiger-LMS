    let slider = [
        document.querySelector("#slider1"),
        document.querySelector("#slider2"),
        document.querySelector("#slider3")
    ];
    let output = [
        document.querySelector("#number1"),
        document.querySelector("#number2"),
        document.querySelector("#number3")
    ];
    
for (let i = 0; i < slider.length; i++) {
    output[i].innerHTML = slider[i].value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider[i].oninput = function() {
        output[i].innerHTML = this.value;
    }
}
