

var link = document.querySelector('link[rel="import"]');
    var content = link.import;

    // Grab DOM from warning.html's document.
    var el = content.querySelector('.apa');

    document.body.appendChild(el.cloneNode(true));
