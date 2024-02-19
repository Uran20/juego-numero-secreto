let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
let elementohtml = document.querySelector(elemento)
elementohtml.innerHTML= texto;
return;
}

function verificarIntento(){
    let numeroDeUsario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsario ===  numeroSecreto){
        asignarTextoElemento("p", `Asertaste el número ${intentos} ${(intentos ===1) ?'vez'  : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute( 'disabled');
    }else{

        // El Usuario no acerto
        if(numeroDeUsario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
    }
    intentos++;
    limpiarcaja();
return;

}

function limpiarcaja(){
    document. querySelector('#valorUsuario'). value="";
    return;
}

function generarNumeroSecreto(){
    let numeroGerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGerado);
    console.log(listaNumeroSorteados);
//Sean sorteado los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Sean sorteado todos los números posibles');
    }else{

        if(listaNumeroSorteados.includes(numeroGerado)){
        return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGerado);
            return numeroGerado;
        }
    }
}

function condicionesIniciales(){

    asignarTextoElemento("h1","¡Juego del Número Secreto!");
    asignarTextoElemento("p",`Digita un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego(){

    //limpiarcaja
    limpiarcaja();
    //Indicar mensaje intervalo de numeros
    //Generae número aleatorio
    //Inicilisar el número de intenetos
    condicionesIniciales();
    //Dsavilitar boton juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
