// variables
let palabraAleatoria;
let time = 11; // se ve el 10 en pantalla =P .. cambiar
let score = 0;
let palabraingresada;
let hone = document.querySelector('#randomWord'); //h1
let timeSpan = document.querySelector('#timeSpan')
const inputt = document.querySelector('#inputt'); 

// listado palabras
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

//functions
function randomWords (palabras){
    return palabras[Math.floor(Math.random()*palabras.length)] 
}
function addToDOM (){
    const palabraalazar = randomWords(words);
    hone.textContent = palabraalazar
} 

//manipulando el tiempo
let timeInterval = setInterval(actualizarTiempo, 1000);
function actualizarTiempo(){
    if(time > 0){
    time --
    }
    if (time === 0){
    clearInterval(timeInterval);
    }
    timeSpan.textContent = time
} //<==========>

// inicia el juego
addToDOM()
actualizarTiempo()

// EVENTs
inputt.addEventListener('keyup', function(evn){
        if(evn.keyCode == 13){ 
            palabraingresada = inputt.value;
            for(let i of words)
            if (i == palabraingresada ) {
                inputt.value = '';  // limpia el input
                addToDOM()      //reinica h1
                console.log('es igual')

            //Que la variable time aumente 3 segundos.
            
        } else {
            console.log('Nooouuupp')
            }
        } 
    })


    //    <========>




