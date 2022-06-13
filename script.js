// variables
let palabraAleatoria;
let time = 11; // se ve el 10 en pantalla =P .. cambiar
let score = 0;
let palabraingresada;
let hone = document.querySelector('#randomWord'); //h1
let timeSpan = document.querySelector('#timeSpan');
const inputt = document.querySelector('#inputt'); 
const puntaje = document.querySelector('#score');
const container = document.querySelector("#container");
let main = document.querySelector(".main");
let buton = document.querySelector('.button');
let huno = document.querySelector('#huno');
let puno = document.querySelector('#puno');
const endGame = document.querySelector("#end-game-container");
const endGame_show = document.querySelector(".end-game-container");

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
function updateScore(){
    score = score+1;
    puntaje.textContent = score;
}
function gameOver(){
    if (time == 0)        
    puntaje.textContent = score;
    endGame_show.classList.remove('end-game-container')
    puno.innerHTML= "Total score: "+score
}
function hide(){
    let hide = main;
    hide.classList.add('main_hide')
}

//manipulando el tiempo
let timeInterval = setInterval(actualizarTiempo, 1000);
function actualizarTiempo(){    
    if(time > 0){
    time --
    }
    if (time === 0){
        hide()     //ocultar main
        clearInterval(timeInterval);
        gameOver();
        puntaje.textContent = score;    
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
                time = time +3;
                updateScore()
                addToDOM()      //reinica h1
            } /*else {
                let maltyp;
                maltyp.innerHTML = '<p><strong>¡ Incorrecto !<strong></p>';
            }*/  //agregar Incorrecto con else al mal tipear ?
        }  
    })
    //    <========>




