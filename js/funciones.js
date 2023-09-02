async function cargaHome(){
    let response = await fetch('index.html');
    let text = await response.text();
    document.getElementById('cuerpo').innerHTML = text;
}


async function cargaPizza(){
    let response = await fetch('html/pizzas.html');
    let text = await response.text();
    document.getElementById('cont').innerHTML = text;
    
}
async function cargaCrearPizza(){
    let response = await fetch('html/crearPizza.html');
    let text = await response.text();
    document.getElementById('cont').innerHTML = text;
}

function pregunta(){
    
    let res = confirm("HOLA");
    console.log(res);
}

function randomNumbre (){
    const num =  Math.random();

    const mult = num * 10;

    const redondeo =  Math.floor(mult)
    const res = redondeo + 20;
    console.log(res);
}
