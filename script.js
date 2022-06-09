// variables
let palabraAleatoria;
let time = 10;
let score = 0;
let hone = document.querySelector('#randomWord'); //h1
let palabraingresada;
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

// inicia el juego
addToDOM()

const inputt = document.querySelector('#inputt')
inputt.addEventListener('keyup', function(evn){
        if(evn.keyCode == 13){ 
            palabraingresada = inputt.value;
            for(let i of words)
            if (i == palabraingresada ){
                inputt.value = '';        // limpia el input
                console.log('es igual')


            /*Que la variable time aumente 3 segundos.
            ● Que el input vuelva a quedar vacío.
            
            ● Volver a invocar la Función addToDOM()  AUTOMATICO CON ENTER ?   */            
        }else{
            console.log('Nooopee')
        }
    }
    //console.log(evn)


/* inputt.addEventListener('keyup' , function(evn){
            const ingreso = inputt.value;
            for(let indice of css_color_names){
            if(indice == ingreso){
                caja1.style['background-color'] = ingreso;
                                return
            }  
        }*/

})
