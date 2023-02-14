//variables constante
var teclas = {
    UP:38,   //Arriba
    DOWN:40, //Abajo 
    LEFT:37, //izquierda
    RIGHT:39 //Derecha 
};

console.log(teclas);

//para detectar el evento donde esta el usuario
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento)
{ 
      switch(evento.keyCode)
      {
        case teclas.UP:
            console.log("Arriba");
        break;
        case teclas.DOWN:
            console.log("Abajo");
        break;
        case teclas.LEFT:
            console.log("Izquierda");
        break;
        case teclas.RIGHT:
            console.log("Derecha");
        break;
      }
}




