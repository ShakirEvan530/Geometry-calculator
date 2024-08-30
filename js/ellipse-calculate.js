function calculateEllipseArea(){
    

    // get the p of the Ellipse
    const aInput = document.getElementById('Ellipse-a');
    const aText = aInput.value;
    const a = parseFloat(aText);
    console.log(a);

    // get the b of the Ellipse
    const bInput = document.getElementById('Ellipse-b');
    const bText = bInput.value;
    const b = parseFloat(bText);
    console.log(b);


    // calculate Ellipse area
    const area = 3.1416 * a * b;
    console.log('Area of the Ellipse is',area);

    // display Ellipse area
    const EllipseAreaSpan = document.getElementById('Ellipse-area');
    EllipseAreaSpan.innerText= area;
}