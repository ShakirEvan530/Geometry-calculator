function calculateRhombusArea(){

    // get the d1 of the rhombus

    const d1Input = document.getElementById('rhombus-d1');
    const d1Text = d1Input.value;
    const d1 = parseFloat(d1Text);
    console.log(d1);

    // get the length of the rectangle

    const d2Input = document.getElementById('rhombus-d2');
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text);
    console.log(d2);


    // calculate rectangle area 
    const area = 0.5*d1*d2;
    console.log('area of the rectangle is:',area);
    // display rectangle Area 

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}