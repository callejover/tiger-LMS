// Events fired on the draggable target (the source element):
// ondragstart - occurs when the user starts to drag an element
function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);

    if (event.target.className == "groupGroup" /* || event.target.className == "dragItem" */ ) {
        event.target.style.paddingBottom = ".5em";
        event.target.style.transition = "0.3s";
    }
}

// Events fired on the drop target:
// ondragenter - occurs when the dragged element enters the drop target
function ondragenter(event) {}

// ondragover - occurs when the dragged element is over the drop target
function onDragOver(event) {
    event.preventDefault();


    if (event.target.className == "groupGroup" /* || event.target.className == "dragItem" */ ) {
        event.target.style.paddingBottom = "3em";
        event.target.style.transition = "0.3s";
    }
}

// ondragleave - occurs when the dragged element leaves the drop target
function onDragLeave(event) {
    if (event.target.className == "groupGroup" /* || event.target.className == "dragItem" */ ) {
        event.target.style.paddingBottom = ".5em";
        event.target.style.transition = "0.3s";
    }
}

// ondrop - occurs when the dragged element is dropped on the drop target
function onDrop(event) {
    var data = event.dataTransfer.getData("Text");
    if (event.target.className == "groupGroup" /* && event.target.className != "dragItem" */ ) {

        event.target.style.paddingBottom = ".5em";
        event.target.style.transition = "0.3s";
    }
    event.target.appendChild(document.getElementById(data));
    event.stopPropagation();

}

// Prevents the item to be dropped in another item
function noAllowDrop(ev) {
    ev.stopPropagation();
}