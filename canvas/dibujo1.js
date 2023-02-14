var texto   = document.getElementById("texto_lineas");
var boton   = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporClick );

var d       = document.getElementById('dibujito');
var ancho   = d.width;
var lienzo  = d.getContext("2d");

function dibujarlineas(color, xinical, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinical, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

function dibujoporClick()
{
    var lineas  = parseInt(texto.value);
    var l       = 0;
    var yi, xf, xi, yf;
    var colorcito= "#FAA";
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        xi = 0;
        yf = espacio;
        //yf = 300;
        dibujarlineas(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    //Bordes de la caja canvas
    dibujarlineas(colorcito  , 1, 1, 1, 299);
    dibujarlineas(colorcito  , 1, 299, 299, 299);
    dibujarlineas(colorcito  , 299, 1, 1, 1);
    dibujarlineas(colorcito  , 299, 299, 299, 1);
}
