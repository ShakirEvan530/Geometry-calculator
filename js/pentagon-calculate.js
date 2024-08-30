function calculatePentagonArea(){
    

    // get the p of the Pentagon
    const pInput = document.getElementById('Pentagon-p');
    const pText = pInput.value;
    const p = parseFloat(pText);
    console.log(p);

    // get the b of the Pentagon
    const bInput = document.getElementById('Pentagon-b');
    const bText = bInput.value;
    const b = parseFloat(bText);
    console.log(b);


    // calculate Pentagon area
    const area = 0.5 * p*b;
    console.log('Area of the Pentagon is',area);

    // display Pentagon area
    const PentagonAreaSpan = document.getElementById('Pentagon-area');
    PentagonAreaSpan.innerText= area;
}