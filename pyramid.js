let slider = document.querySelector('#range'),
    output = document.querySelector('#output'),
    inside = document.querySelector('.inside'),
    brick = document.querySelector('#brickSymbol');


output.innerHTML = slider.value;
// PYRAMID 

function printPyramid(h, s) {
    let symbol = s;
    let space = '\u00A0';
    for (let i = 1; i <= h; i++) {
        for (let j = h; j >= i; j--) {
            space += "\u00A0" + "\u00A0";
        }
        symbol += s;
        let pg = document.createElement('p');
        inside.appendChild(pg);
        pg.innerText = space + symbol;
        space = '\u00A0';
    }

}

// Deleting all children

function deleteChildren() {
    let child = inside.lastElementChild;
    while (child) {
        inside.removeChild(child);
        child = inside.lastElementChild;
    }
}

printPyramid(+output.innerHTML, brick.value);


// SELECT

brick.addEventListener('change', function () {
    deleteChildren();

    printPyramid(+output.innerHTML, brick.value);

});

// SLIDER

slider.addEventListener('input', function () {
    output.innerHTML = this.value;
    deleteChildren();

    printPyramid(+output.innerHTML, brick.value);
});
