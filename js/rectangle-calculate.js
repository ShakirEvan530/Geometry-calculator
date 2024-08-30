function calculateRectangleArea(){

    // get the width of the rectangle

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // get the length of the rectangle

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);


    // calculate rectangle area 
    const area = length * width;
    console.log('area of the rectangle is:',area);
    // display rectangle Area 

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}