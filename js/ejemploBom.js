// funciones para manejar tiempo

// mostrar un mensaje pasado un tiempo x desde cargo la pagina
// function saludar(){
//     document.write('Hola mundo');
// }

let contador = 1;

let saludar =()=>{
    if(contador === 5){
        clearInterval(identificador)
    }
    document.write('Hola mundo');
    contador++;
}

// window.setTimeout(saludar,3000);

// setTimeout(()=>{document.write('Hola mundo')}, 4000);

// llamar a una funcion cada cierto tiempo en milisegundos
let identificador = window.setInterval(saludar,1000);

